import ReactDom from "react-dom/client"
import React from "react"

const reactRoot = ReactDom.createRoot(document.getElementById('root'));

const h1 = React.createElement('h1', {id: 'h1elem', class:'orange-text'}, 'I am a h1');

const h2 = React.createElement('h2', {id: 'h2elem', class:'blue-text'}, 'I am a h2');

const h3 = React.createElement('h3', {id: 'h3elem', class:'green-text'}, 'I am a h3');


const div = React.createElement('div', {id:'reactdiv'}, [h1, h2, h3]);

reactRoot.render(div);