// react and react-DOM is the two library that are used in the mainipulation of DOM
import React from 'react';// Its the core foundatational library (jo ki shara references lena ka kam karti haa)
import ReactDOM from 'react-dom/client';// React DOM is its(react) implementation on the web like React-native its implementaion on moblie app.

import App from './App';
// Browser is having its own DOM
// React is creating its own DOM  that is called virtual dom and compare with the main DOM how differnt it is and change those that are needed(there is seperate video for dissing alogrithms)

// What is DOM?
//-> Dom is the tree structure hota hai jo HTML page ko represent karta hai.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />// App jada kuch ha nahi its the function that returing the html
  
);

