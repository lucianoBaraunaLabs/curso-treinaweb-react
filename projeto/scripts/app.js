import React from 'react';
import { render } from 'react-dom';

var TextCounter = React.createClass({
    
    getInitialState: function() {
        return {totalChars: 0}
    },
    
    handleChange: function(event){
        var element = event.target;
        var text = element.value;
        this.setState({
            totalChars: text.length 
        });
    }
    
    
});