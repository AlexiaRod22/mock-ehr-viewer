import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';

import {Security} from '@okta/okta-react';
import {toRelativeUrl} from '@okta/okta-auth-js';

import './index.css';
import App from './App.jsx';

import oktaAuth from './oktaAuth';

const restoreOriginalUri = async(_oktaAuth, originalUri) =>
{
  window.location.replace(
    toRelativeUrl(originalUri || '/',window.location.origin)
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Security 
      oktaAuth = {oktaAuth}
      restoreOriginalUri = {restoreOriginalUri}
      >
        <App />
      </Security>
    </BrowserRouter>
  </StrictMode>
)

