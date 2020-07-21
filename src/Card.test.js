import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js';

it ("Card renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Card 
        title={"CARD"}
        content={"THIS IS WHERE CONTENT GOES"}/>, div);
    ReactDOM.unmountComponentAtNode(div);
});