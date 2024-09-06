import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
import TestApp from './component/TestApp';

let root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <BrowserRouter>
        <TestApp />
    </BrowserRouter>
);
