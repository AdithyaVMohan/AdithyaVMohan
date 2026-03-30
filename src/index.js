import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
);
reportWebVitals();
