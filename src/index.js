import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDWm20LEUvctdAvyZ_u3WSWztArlplHFGM",
    authDomain: "fir-test-project-9d867.firebaseapp.com",
    databaseURL: "https://fir-test-project-9d867-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fir-test-project-9d867",
    storageBucket: "fir-test-project-9d867.appspot.com",
    messagingSenderId: "128691373686",
    appId: "1:128691373686:web:309b57903588aaa28e8157"
}
firebase.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
