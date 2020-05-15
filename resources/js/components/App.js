import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import ContactPage from './Contact/ContactPage';


const App = () =>  {
    return (
        <BrowserRouter>
            <div className="">
                <Switch>
                    <Route exact path="/">
                        <Header />
                        <Main />
                        <Footer />
                    </Route>
                    <Route exact path="/contact">
                        <ContactPage/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
