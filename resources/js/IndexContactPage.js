import React from 'react';
import ReactDOM from 'react-dom';
import ContactPage from './components/Contact/ContactPage';

if (document.getElementById('contactPage')) {
    ReactDOM.render(<ContactPage />, document.getElementById('contactPage'));
}