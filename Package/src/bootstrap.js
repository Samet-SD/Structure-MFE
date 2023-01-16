import React from 'react';
import ReactDom from 'react-dom'
import App from './App'
import { createMemoryHistory } from 'history'

//Mount function to start up the app
const launch = (el, {onNavigate}) => {
    const history = createMemoryHistory();
    if (onNavigate){
        history.listen(onNavigate);
    }

    ReactDom.render(<App history={history} />, el);

    return {
        onParentNavigate({pathname}) {
            const myPath = history.location;

            if(pathname !== myPath){
                history.push(pathname);
            }
        }
    }
}
if(process.env.NODE_ENV =="development"){
   let dev = document.querySelector('#_structure-root');
    
    if (dev) {
       launch(dev, {});
    }
}

export { launch }
