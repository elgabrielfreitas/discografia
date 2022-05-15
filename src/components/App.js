import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import AddTrack from './AddTrack';
import TrackList from './TrackList';
import api from '../api/tracks';
import Modal from './Modal';

function App() {
  const [tracks, setTracks] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const retrieveTracks = async () => {
    const response = await api.get("/tracks");
    return response.data
  }

  const searchHandler = (search) => {
    setSearch(search);
    if (search !== "") {
      const newTrackList = tracks.filter((track) => {
        return Object.values(track)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setSearchResults(newTrackList);
    } else {
      setSearchResults(tracks);
    }
  };

  const addTrackHandler = async (track) => {
    const request = {
      id: uuidv4(),
      ...track
    }
  
    const response = await api.post("/tracks", request)
    setTracks([...tracks, response.data])
  };

  const deleteTrackHandler = async (trackToRemove) => {
    await api.delete(`/tracks/${trackToRemove.id}`)
    const newTrackList = tracks.filter((track) => {
      if (track !== trackToRemove) {
        return true
      } else {
        return false
      }
    }) 
    setTracks(newTrackList)
  }

  useEffect(() => {
    const getAllTracks = async () => {
      const allTracks = await retrieveTracks();
      if (allTracks) setTracks(allTracks);
    };

    getAllTracks();
  }, []);

  return (
    <>
      <Header />    
      <TrackList
        tracks={search.length < 1 ? tracks : searchResults}
        deleteTrack={deleteTrackHandler}
        term={search}
        searchKey = {searchHandler}
        addNewTrack = {setOpenModal}
      />
      {openModal && (
        <Modal>
          <AddTrack
            addTrackHandler={addTrackHandler}
            closeModal={setOpenModal}
          />
        </Modal>
      )}
    </>
  );
}

export default App;