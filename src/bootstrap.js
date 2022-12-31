import React from 'react';
import ReactDom from 'react-dom'
import App from './App'

//Mount function to start up the app
const mount = (el) => {
    ReactDom.render(<App />, el);
};

//If we are in development and in isolation, call app imediately
if(process.env.NODE_ENV =="development"){
   let dev = document.querySelector('#_structure-root');
    
    if (dev) {
       mount(dev);
    }
}

export { mount }

//we are runnung through container we shozuld export the mpuint function