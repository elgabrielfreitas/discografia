/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import api from '../../api/tracks';
import './index.css';

const AddAlbum = () => {

    const [name, setName] = useState("");
    const [year, setYear] = useState("");

    const addAlbum = (e) => {
      // e.preventDefault();
      // console.log(year)
      // const album = { name: name, year: "1234" };
      // return console.log(album)
      const response = api.post('/album', { name: name, year: "1234" })
      // .then(() => console.log(response))                      
      .catch((err) => console.log(err));
    }

    return (
    <div className="add-album-container" >
        <a className="links" id="toalbum"></a>
        <a className="links" id="totrack"></a>
        
        <div className="content">      
          <div id="track">
            <form method="post" action=""> 
              <h1 className='add-title'>Faixa</h1>
              <div className="add-form">
                <p className="add-item"> 
                  <select className='add-input' name="name" required="required" type="text" placeholder="Nome da Faixa">
                    <option>Selecione o Álbum</option>
                    <option>1</option>
                  </select>
                </p>

                <p className='add-item'> 
                  <input className='add-input-50' name="number" required="required" type="value" placeholder="Número"/>
                  <input className='add-input-50' name="number" required="required" type="value" placeholder="Duração"/>  
                </p>

                <p className="add-item"> 
                  <input className='add-input' name="name" required="required" type="text" placeholder="Nome da Faixa" />
                </p>              
                
                <p className='add-item-submit'> 
                  <button className="add-link" onClick={() => {addAlbum()}}>Adicionar</button> 
                </p>
                <p className='add-item-submit'> 
                  <a href="/" className="add-link-red" type="submit" placeholder="Cancelar">Cancelar</a> 
                </p>
              </div>  
              
              <p className="link">  
                <small className='link-text'>Adicionar um álbum? </small>
                <a className="add-link" href="#toalbum">Álbum</a>
              </p>
            </form>
          </div>

          <div id="album">
            <form method="post" action=""> 
              <h1 className="add-title">Adicionar Álbum</h1> 
              <div className="add-form">
                <p className="add-item"> 
                  <input className='add-input' name="name" required="required" type="text" placeholder="Nome do Álbum" onChange={(e) => setName(e.target.value)}/>
                </p>                
                <p className='add-item'> 
                  <input className='add-input' name="year" required="required" type="text" placeholder="Ano do Álbum" onChange={(e) => setYear(e.target.value)}/> 
                </p>

                <p className='add-item-submit'>
                  <button className="add-link" onClick={() => addAlbum()}>Adicionar</button>
                </p>
                <p className='add-item-submit'> 
                  <a href="/" className="add-link-red" type="submit" placeholder="Cancelar">Cancelar</a>                             
                </p>
              </div>                      
              <p className="link">  
                <small className='link-text'>Adicionar uma faixa? </small>
                <a className="add-link" href="#totrack">Adicionar Faixa</a>
              </p>
            </form>
          </div>
        </div>
      </div> 
    );
  };
  
export default AddAlbum;
