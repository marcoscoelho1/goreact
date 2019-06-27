import React, { Fragment } from 'react';
import './styles/global';
import Main from './pages/Main';
import GlobalStyle from './styles/global';

const App = () => (
    <Fragment>
        <GlobalStyle />
        <Main />
    </Fragment>
);

export default App;
