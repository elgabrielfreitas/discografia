import React, { useRef } from "react";
import './index.css';

const TrackList = ({tracks, deleteTrack, term, searchKey, addNewTrack}) => {

    const input = useRef("");

    const renderTrackList = tracks.map((track) => {
        return (
            <div className="item" key={track.id}>
                <label className="item1">{track.number}</label>
                <label className="item2">{track.track}</label>
                <label className="item3">{track.duration}<button className="delete-item" alt="Excluir" onClick={() => deleteTrack(track)}>&#10006;</button></label>                
            </div>
        );
    });

    const getSearch = () => {
        searchKey(input.current.value);
    };

  return (
      <>
        <div className="search-container">
            <h4 className="search-title">Digite uma palavra chave</h4>
            <div className="search-bar-container">
                <input
                    ref={input}
                    type="text"
                    placeholder="Buscar..." 
                    className="search-bar" 
                    value={term} 
                    onChange={getSearch}
                ></input>
                <button className="button" onClick={() => addNewTrack(true)}>Adicionar Faixa</button>
            </div>
        </div>
        <div className="list-container">
            <h2 className="album-title">Álbum: Nome do Álbum, 1987</h2>
                <div className="item">
                    <label className="item1">Nº</label>
                    <label className="item2">Faixa</label>
                    <label className="item3">Duração</label>            
                </div>
                {renderTrackList.length > 0
                    ? renderTrackList
                    : <div className="item">Nenhum resultado</div>} 
                
        </div>
      </>
  );
};

export default TrackList;
