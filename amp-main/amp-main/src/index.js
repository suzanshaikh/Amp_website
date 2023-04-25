/*
import React from 'react';
import App from './App';
import * as ReactDOMClient from 'react-dom/client';


ReactDOMClient.createRoot(<App />, document.getElementById('root'));

ReactDOMClient.hydrateRoot(<App />, document.getElementById('root'));

<script src="https://unpkg.com/react-router-dom/umd/react-router-dom.min.js"></script>

ReactDOM.render(<App />, document.getElementById('root'));
*/

import * as ReactDOMClient from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(<App tab="home" />);