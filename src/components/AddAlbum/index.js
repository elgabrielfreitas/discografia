/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './index.css';

const AddAlbum = ({addAlbumHandler}) => {
    return (
    <div className="add-album-container" >
        <a className="links" id="toalbum"></a>
        <a className="links" id="totrack"></a>
        
        <div className="content">      
          <div id="track">
            <form method="post" action=""> 
              <h1 className='add-title'>Adicionar Faixa</h1>
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
                  <input className="add-link" type="submit" value="Adicionar"/> 
                </p>
                <p className='add-item-submit'> 
                  <a href="/" className="add-link-red" type="submit" placeholder="Cancelar">Cancelar</a> 
                </p>
              </div>  
              
              <p className="link">  
                <small className='link-text'>Adicionar um álbum? </small>
                <a className="add-link" href="#toalbum">Adicionar Álbum</a>
              </p>
            </form>
          </div>

          <div id="album">
            <form method="post" action=""> 
              <h1 className="add-title">Adicionar Álbum</h1> 
              <div className="add-form">
                <p className="add-item"> 
                  <input className='add-input' name="name" required="required" type="text" placeholder="Nome do Álbum" />
                </p>                
                <p className='add-item'> 
                  <input className='add-input' id="email_cad" name="year" required="required" type="value" placeholder="Ano do Álbum"/> 
                </p>

                <p className='add-item-submit'> 
                  <input className="add-link" type="submit" value="Adicionar"/> 
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
