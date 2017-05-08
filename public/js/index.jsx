import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

import App from './App'

$(function() {
    let container = document.getElementById('content');
    ReactDOM.render(<App/>, container);
});
