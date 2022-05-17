import React from "react";
import './index.css';

class AddTrack extends React.Component {

  state = {
    album_id: undefined,
    number: undefined,
    title: "",
    duration: undefined
  }

  add = (e) => {
    e.preventDefault();
    if (this.state.number === undefined || this.state.title === "" || this.state.duration === undefined) {
      alert("Preencha todos os campos");
      return
    }
    this.props.addTrackHandler(this.state);
    this.setState({album_id:null, number:null, title:"", duration:null})
    console.log(this.state)
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="add-list-container">
          <h2 className="add-list-title">Adicionar Faixa</h2>
          <form className="" onSubmit={this.add}>
            <div className="">
              <label>Álbum: </label>
                {/* <select value={this.state.album_id} onChange={(e) => this.setState({album_id: e.target.value})}>
                  {this.props.albums.map((album) => {
                   return (     
                      <option key={album.id}>{album.name}</option>                
                   )
                  })}
                </select> */}                  
                  <input
                   type="value"
                   placeholder="Álbum"
                   value={this.state.album_id || 0} 
                   onChange={(e) => this.setState({album_id: e.target.value})}
                  />
              </div>
              <div className="">
                  <label>Número</label>
                  <input
                   type="value"
                   placeholder="Número"
                   value={this.state.number || 0} 
                   onChange={(e) => this.setState({number: e.target.value})}
                  />
              </div>
              <div className="">
                  <label>Faixa</label>
                  <input 
                    type="text"
                    placeholder="Faixa"
                    value={this.state.title || ''} 
                    onChange={(e) => this.setState({title: e.target.value})}
                  />
              </div>
              <div className="">
                  <label>Duração</label>
                  <input 
                    type="value"
                    placeholder="Duração" 
                    value={this.state.duration || 0} 
                    onChange={(e) => this.setState({duration: e.target.value})}
                  />
              </div>
              <button className="button-blue" onClick={() => this.add}>Adicionar</button>
              <button className="button-red" onClick={() => this.props.addNewTrack(false)}>Cancelar</button>
          </form>
      </div>
    );
  };
  }

export default AddTrack;
