import React from 'react';
import ReactDom from 'react-dom';

import App from './app';

import './index.css';

export default () => <App/>;

export const mount = (Сomponent) => {
    ReactDom.render(
        <Сomponent/>,
        document.getElementById('app')
    );

    if(module.hot) {
        module.hot.accept('./app', ()=> {
            ReactDom.render(
                <App/>,
                document.getElementById('app')
            );
        })
    }
};

export const unmount = () => {
    ReactDom.unmountComponentAtNode(document.getElementById('app'));
};

