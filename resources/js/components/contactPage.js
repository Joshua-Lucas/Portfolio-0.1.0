import React from 'react';
import ReactDOM from 'react-dom';
import ContactPage from './Contact/ContactPage';

if (document.getElementById('contactPage')) {
    ReactDOM.render(<ContactPage />, document.getElementById('contactPage'));
}