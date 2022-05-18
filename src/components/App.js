import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
// import AddTrack from './AddTrack';
import TrackList from './TrackList';
import api from '../api/tracks';
import Modal from './Modal';
import AddAlbum from './AddAlbum';

function App() {
      const [albums, setAlbums] = useState([]);
      const [search, setSearch] = useState("");
      const [searchResults, setSearchResults] = useState([]);
      const [openModal, setOpenModal] = useState(false);

      albums.map(album => console.log(album.tracks))
      
      const retrieveAlbums = async () => {
        const response = await api.get("/album?keyword=");
        return response.data.data
      }

      const searchHandler = (search) => {
        setSearch(search);
        if (search !== "") {
          const newTrackList = albums.filter((track) => {
            return Object.values(track)
              .join(" ")
              .toLowerCase()
              .includes(search.toLowerCase());
          });
          setSearchResults(newTrackList);
        } else {
          setSearchResults(albums);
        }
      };

      // const addTrackHandler = async (track) => {
      //   const request = {
      //     ...track
      //   }
      //   const response = await api.post("/track", request)
      //     setAlbums([...albums, response.data])
      //   };
      
      const deleteTrackHandler = async (track) => {
        await api.delete(`/track/${track.id}`)
        const data = await retrieveAlbums();
        setAlbums(data);
      }

      const deleteAlbumHandler = async (album) => {
        await api.delete(`/album/${album.id}`)
        const data = await retrieveAlbums();
        setAlbums(data);
      }

      useEffect(() => {
        const getAllAlbums = async () => {
          const allAlbums = await retrieveAlbums();
          if (allAlbums) setAlbums(allAlbums);
        };
        getAllAlbums();
      }, []);

      return (
        <>
          <Router>
            <Header />
            <TrackList
              albums={search.length < 1 ? albums : searchResults}
              deleteTrack={deleteTrackHandler}
              deleteAlbum={deleteAlbumHandler}
              term={search}
              searchKey = {searchHandler}
              modal = {setOpenModal}
            />
            {openModal && (
              <Modal>
                <AddAlbum />
                {/* <AddTrack
                  addTrackHandler={addTrackHandler}
                  closeModal={setOpenModal}
                  albums={albums}
                /> */}
              </Modal>
            )}
          </Router>
        </>
      );
}

export default App;