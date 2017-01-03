import React from 'react';
import { render } from 'react-dom';

var minhaDiv = document.getElementById("app");

// var React = require("react");
// import { render } from 'react-dom'

var TextCounter = React.createClass({

    getInitialState: function(){ // objeto padrão para definir um estado inicial ao inicializar o componente
        return {totalChars: 0}
    },

    handleChange: function(event){
        var element = event.target;
        var text = element.value;
        this.setState({totalChars: text.length}); // Caso precise de algo no componente que se atualize você precisa utilizar o objeto setState
    },

    render: function(){
        return (
            <div>
                <textarea onChange={this.handleChange} />
                <div><b>Total:</b> {this.state.totalChars}</div>
            </div>
        )
    }
})


render(
    <TextCounter />,
    minhaDiv
);