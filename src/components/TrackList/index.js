import React, { useRef } from "react";
import './index.css';

const TrackList = ({albums, deleteTrack, deleteAlbum, term, searchKey, modal}) => {

    const input = useRef("");

    // SEARCH VALUE
    const getSearch = () => {
        searchKey(input.current.value);
    };

    return (
        <>
            {/* SEARCH BAR */}
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
                    <button className="add-button" onClick={() => modal(true)}>Adicionar</button>
                </div>
            </div>
            {/* LIST ALBUM AND TRACKS */}
            <div>
            {albums.map((album) => {
                return (
                    <div className="list-container" key={album.id}>
                        <h2 className="album-title">Álbum: {album.name}, {album.year} <button type="button" className="delete-item" alt="Excluir" onClick={() => deleteAlbum(album)}>&#10006;</button></h2>
                            <div className="item">
                                <label className="item1">Nº</label>
                                <label className="item2">Faixa</label>
                                <label className="item3">Duração</label>            
                            </div>
                            {album.tracks.map((track) => {
                                return (
                                    <div className="item" key={track.id}>
                                        <label className="item1">{track.number}</label>
                                        <label className="item2">{track.title}</label>
                                        <label className="item3">{track.duration.toString()[0]}:{track.duration.toString().substr(1,2)}<button type="button" className="delete-item" alt="Excluir" onClick={() => deleteTrack(track)}>&#10006;</button></label>
                                    </div>
                                )
                            })}                         
                    </div>
                )
            })}
            </div>
        </>
    );
};

export default TrackList;
