import React from "react";
import './index.css';

class AddTrack extends React.Component {

  state = {
    number: "",
    track: "",
    duration: ""
  }

  add = (e) => {
    e.preventDefault();
    if (this.state.number === "" || this.state.track === "" || this.state.duration === "") {
      alert("Preencha todos os campos");
      return
    }
    this.props.addTrackHandler(this.state);
    this.props.closeModal(false)
    this.setState({number:"", track:"", duration:""})
  };
  render() {
    return (
      <div className="add-list-container">
          <h2 className="add-list-title">Adicionar Faixa</h2>
          <form className="" onSubmit={this.add}>
              <div className="">
                  <label>Número</label>
                  <input
                   type="text"
                   placeholder="Número"
                   value={this.state.number} 
                   onChange={(e) => this.setState({number: e.target.value})}
                  />
              </div>
              <div className="">
                  <label>Faixa</label>
                  <input 
                    type="text"
                    placeholder="Faixa"
                    value={this.state.track} 
                    onChange={(e) => this.setState({track: e.target.value})}
                  />
              </div>
              <div className="">
                  <label>Duração</label>
                  <input 
                    type="text"
                    placeholder="Duração"
                    value={this.state.duration} 
                    onChange={(e) => this.setState({duration: e.target.value})}
                  />
              </div>
              <button className="button-blue">Adicionar</button>
              <button className="button-red" onClick={() => this.props.closeModal(false)}>Cancelar</button>
          </form>
      </div>
    );
  };
  }

export default AddTrack;
