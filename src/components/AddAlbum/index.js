/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import api from '../../api/tracks';
import './index.css';

const AddAlbum = (albums) => {

    const [album, setAlbum] = useState({
      name: "",
      year: ""
    })

    const [track, setTrack] = useState({
      album_id: "",
      number: "",
      title: "",
      duration: ""
    })

    const getAlbums = albums.albums.map((album) => {
      return album
    })

    const addAlbum = () => {
      if (album.name === "" || album.year === "") {
        alert("Preencha todos os campos");
        return
      }
      if (album.year.length !== 4) {
        alert("Ano deve conter 4 dígitos");
        return
      }
      api.post('/album', album)     
      .then(() => window.location.reload())                      
      .catch((err) => alert(err.response.data.error));
    }

    const addTrack = () => {
      if (track.number === "" || track.title === "" || track.duration === "") {
        alert("Preencha todos os campos.");
        return
      }
      if (track.album_id === "") {
        alert("Selecione um álbum")
      }
      const regex = /^[0-9.]+$/;
      if (!regex.test(track.number)) {
        alert("Campo 'Número da Faixa' só aceita números.");
        return 
      }
      if (!regex.test(track.duration)) {
        alert("Campo 'Duração da Faixa' só aceita números.");
        alert('Exemplo: para "3:00" inserir apenas "300".')
        return
      }
      api.post('/track', track)     
      .then(() => window.location.reload())                      
      .catch((err) => alert(err.response.data.error));
    }

    return (
    <div className="add-album-container" >
        {/* LINKS */}
        <a className="links" id="toalbum" content="teste"></a>
        <a className="links" id="totrack" content="teste"></a>
        
        <div className="content">
          {/* ADD TRACK */}
          <div id="track">
              <h1 className='add-title'>Adicionar Faixa</h1>
              <div className="add-form">
                {/* TRACK FORM */}
                <p className="add-item">
                  <select className='add-input' name="name" required="required" type="text" onChange={(e) => setTrack(prevState => ({ ...prevState, album_id: e.target.value }))}>
                    <option value="">Selecione um álbum</option>
                    {getAlbums.map((album) => <option key={album.id} value={album.id}>{album.name}</option>)}
                  </select>
                </p>
                <p className='add-item'> 
                  <input className='add-input-50' name="number" required="required" type="text" placeholder="Número" onChange={(e) => setTrack(prevState => ({ ...prevState, number: e.target.value }))}/>
                  <input className='add-input-50' name="number" required="required" type="value" placeholder="Duração" onChange={(e) => setTrack(prevState => ({ ...prevState, duration: e.target.value }))}/>  
                </p>
                <p className="add-item"> 
                  <input className='add-input' name="name" required="required" type="text" placeholder="Nome da Faixa" onChange={(e) => setTrack(prevState => ({ ...prevState, title: e.target.value }))} />
                </p>              
                {/* ADD AND CANCEL BUTTONS */}
                <p className='add-item-submit'> 
                  <button className="add-link" onClick={() => addTrack()}>Adicionar</button> 
                </p>
                <p className='add-item-submit'> 
                  <a href="/" className="add-link-red" type="submit" placeholder="Cancelar">Cancelar</a> 
                </p>
              </div>  
              {/* LINK TO ADD ALBUM */}
              <p className="link">  
                <a className="add-link-green" href="#toalbum">Adicionar Álbum</a>
              </p>
          </div>
          {/* ADD ALBUM */}
          <div id="album">
              <h1 className="add-title">Adicionar Álbum</h1> 
              <div className="add-form">
                {/* ALBUM FORM */}
                <p className="add-item"> 
                  <input className='add-input' required="required" type="text" name="name" id="name" placeholder="Nome do Álbum" onChange={(e) => setAlbum(prevState => ({ ...prevState, name: e.target.value }))}/>
                </p>  
                <p className="add-item"> 
                  <input className='add-input' required="required" type="year" name="year" id="year" placeholder="Ano do Álbum" onChange={(e) => setAlbum(prevState => ({ ...prevState, year: e.target.value }))}/>
                </p>
                {/* ADD AND CANCEL BUTTONS */}
                <p className='add-item-submit'>
                  <button className="add-link" onClick={() => addAlbum()}>Adicionar</button>
                </p>
                <p className='add-item-submit'> 
                  <a href="/" className="add-link-red" type="submit" placeholder="Cancelar">Cancelar</a>                             
                </p>
              </div>
              {/* LINK TO ADD TRACK */}
              <p className="link">  
                <a className="add-link-green" href="#totrack">Adicionar Faixa</a>
              </p>
          </div>
        </div>
      </div> 
    );
  };
  
export default AddAlbum;
