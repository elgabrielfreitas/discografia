import React from 'react';
import Header from './Header';
import AddTrack from './AddTrack';
import TrackList from './TrackList';

function App() {

  const tracks = [
    {
      number: "1",
      track: "teste1",
      duration: "1:11"
    },
    {
      number: "2",
      track: "teste2",
      duration: "2:22"
    }
  ];
  return (
    <div className="ui container">
      <Header />
      <AddTrack />
      <TrackList tracks={tracks} />
    </div>
  );
}

export default App;