import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import AddTrack from './AddTrack';
import TrackList from './TrackList';

function App() {

  const LOCAL_STORAGE_KEY = "tracks";
  const [tracks, setTracks] = useState([]);

  const addTrackHandler = (track) => {
    setTracks([...tracks, { id: uuidv4(), ...track}])
  };

  const deleteTrackHandler = (trackToRemove) => {
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
    const retriveTracks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setTracks(retriveTracks);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tracks));
  }, [tracks]);

  return (
    <>
      <Header />
      <AddTrack addTrackHandler={addTrackHandler}/>
      <TrackList tracks={tracks} deleteTrack={deleteTrackHandler}/>
    </>
  );
}

export default App;