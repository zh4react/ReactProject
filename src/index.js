import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Father from './test/Father';
import {Provider} from 'react-redux';
import store from '../src/test/store';
import Toolbar from '../src/toolbar/Toolbar';
import TestLayout from './test/TestLayout';
import MenuRouter from './test/MenuRouter';



const APPS=(

     //<Toolbar/>
     <MenuRouter/>
);


//暂时注释
//ReactDOM.render(APPS, document.getElementById('root'));

//
ReactDOM.render(APPS, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
