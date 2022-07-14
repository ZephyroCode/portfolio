import { useState, createContext } from 'react';

export const Context = createContext();

export const ContextProvider = props => {
	const [theme, setTheme] = useState('Dark Mode');

	return (
		<Context.Provider value={{ theme, setTheme }}>
			{props.children}
		</Context.Provider>
	);
};
