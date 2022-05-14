import React from "react";
import './index.css';

const AddTrack = () => {
  return (
    <div className="add-list-container">
        <h2 className="add-list-title">Adicionar Faixa</h2>
        <form className="">
        <div className="">
                <label>Álbum</label>
                <input type="text" placeholder="Álbum" />
            </div>
            <div className="">
                <label>Faixa</label>
                <input type="text" placeholder="Faixa" />
            </div>
            <div className="">
                <label>Duração</label>
                <input type="text" placeholder="Duração" />
            </div>
            <button className="button">Adicionar</button>
        </form>
    </div>
  );
};

export default AddTrack;
