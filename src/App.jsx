import { useContext } from 'react';
import { Context } from './context/Context';
import Header from './components/Header';
import Main from './components/Main';
import './styles/App.scss';

const App = () => {
	const { theme } = useContext(Context);

	return (
		<div className={theme === 'Dark Mode' ? 'darkTheme' : ''}>
			<Header />
			<Main />
		</div>
	);
};

export default App;
