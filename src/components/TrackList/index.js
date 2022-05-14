import React from "react";
import './index.css';

const TrackList = (props) => {

    const renderTrackList = props.tracks.map((track) => {
        return (
            <div className="item">
                <label className="item1">{track.number}</label>
                <label className="item2">{track.track}</label>
                <label className="item3">{track.duration}</label>
            </div>
        );
    })

  return (
    <div className="list-container">
        <h2 className="list-title">List</h2>
        <div className="item">
            <label className="item1">Nº</label>
            <label className="item2">Faixa</label>
            <label className="item3">Duração</label>
        </div>
        {renderTrackList}   
    </div>
  );
};

export default TrackList;
