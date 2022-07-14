import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextProvider } from './context/Context';
import './styles/normalize.css';
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ContextProvider>
			<App />
		</ContextProvider>
	</React.StrictMode>
);
