import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/index.scss"
import App from './routes';
import Loader from "./TESTING/Loader"
import App2 from "./TESTING/AppDrawer"
import Appbars from "./components/Appbar"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App2 />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
