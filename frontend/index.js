import React from 'react';
import { render } from 'react-dom';
import { configureStore } from './store/configureStore';
import Root from './components/Root/Root';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/stylesheets/base.scss';
import './assets/stylesheets/app.css';
import 'react-select/dist/react-select.css';

const store = configureStore();

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
