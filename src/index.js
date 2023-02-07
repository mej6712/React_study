import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";
import "./style/fonts.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
const GlobalStyle = createGlobalStyle`
    ${reset};
`

root.render(
    <>
        <GlobalStyle />
        <App />
    </>
);
