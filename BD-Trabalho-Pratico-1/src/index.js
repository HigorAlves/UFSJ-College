//Bootstrap Imports
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Router from './router';
import './index.css';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();