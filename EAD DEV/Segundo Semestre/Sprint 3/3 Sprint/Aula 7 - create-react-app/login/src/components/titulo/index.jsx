import React, { Component } from 'react';
import './index.css';

class Titulo extends Component {

    constructor(){
        super();
    }
    render(){
        return (
            <div className='cor'>
                <h1>{this.props.texto}</h1>
                <p>{this.props.descricao || 'Não passou a descrição'}</p>
            </div>
        )
    }

}

export default Titulo;