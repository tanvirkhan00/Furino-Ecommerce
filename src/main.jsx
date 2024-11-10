import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ContextApi } from './Componenets/ContextApi.jsx';
import { Provider } from 'react-redux';
import Store from './Store.js';
import 'react-toastify/dist/ReactToastify.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
      <ContextApi>
        <App />
      </ContextApi>
    </Provider>
  </StrictMode>,
)
