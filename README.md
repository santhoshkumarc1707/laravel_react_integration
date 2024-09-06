 "devDependencies": {
        "@babel/plugin-proposal-private-property-in-object": "^7.21.11",
        "@vitejs/plugin-react": "^4.0.4",
        "autoprefixer": "^10.4.14",
        "eslint": "^8.47.0",
        "eslint-config-react-app": "^7.0.1",
        "laravel-vite-plugin": "^0.8.0",
        "postcss": "^8.4.27",
        "sass": "1.64.2",
        "vite": "^4.4.9",
        "vite-plugin-eslint": "^1.8.1",
        "vite-plugin-svgr": "^3.2.0"
    },

terminal command : npm i -D (packagesName)  

<!-- --------------------->
 "dependencies": {
        "@reduxjs/toolkit": "^2.0.1",
        "axios": "^1.6.2",
        "formik": "^2.4.5",
        "laravel-echo": "^1.15.3",
        "moment": "^2.29.4",
        "pusher-js": "^8.4.0-rc2",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-moment": "^1.1.3",
        "react-popper": "^2.3.0",
        "react-redux": "^9.0.4",
        "react-router-dom": "^6.21.1",
        "react-toastify": "^9.1.3",
        "redux-persist": "^6.0.0",
        "sweetalert2": "^11.10.1",
        "yup": "^1.3.3"
    }

terminal command : npm i (packagesName)  
<!-- ---------steps ------------>
<!-- vite.config.js file ->>> -->
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/src/App.jsx'],
            refresh: true,
        }),
        react(),
        svgr(),
        eslint()
    ],
    build: {
        commonjsOptions: {
            transformMixedEsModules: true
        }
    } // for support all old js files
});

<!-- jsconfig.json file ->>> -->
{
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@/*": [
                "resources/js/*"
            ]
        }
    },
    "exclude": [
        "node_modules",
        "public"
    ]
}

<!-- postcss.config.js -->
export default {
    plugins: {
        autoprefixer: {},
    },
};


<!-- .eslintrc.json -->
{
    "extends": "react-app"
}

<!-- welcome.blade.php -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>React Laravel Template</title>
    @viteReactRefresh
    @vite('resources/js/src/App.jsx')
</head>

<body>
    <noscript>
        <strong>We're sorry but Cork doesn't work properly without JavaScript enabled.</strong> <br>
        <strong>Please enable it to continue.</strong>
    </noscript>
    <div id="app"></div>
</body>
</html>

<!-- resoursces/js/src/App.jsx -->
import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
import TestApp from './component/TestApp';

let root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <BrowserRouter>
        <TestApp /> -> components 
    </BrowserRouter>
);


<!-- route/web.php -->
<?php
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');  it will initaly load the welcome page



