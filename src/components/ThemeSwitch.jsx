import { useContext } from 'react';
import { Context } from '../context/Context';
import styles from './ThemeSwitch.module.scss';
import moonImg from '/assets/img/icons/moon.svg';
import sunImg from '/assets/img/icons/sun.svg';

const ThemeSwitch = () => {
	const { theme, setTheme } = useContext(Context);

	const handleClick = () => {
		theme === 'Dark Mode' ? setTheme('Light Mode') : setTheme('Dark Mode');
	};

	return (
		<div className={styles.themeSwitch} onClick={handleClick}>
			<img src={theme === 'Dark Mode' ? moonImg : sunImg} alt='Theme Icon' />
			<p>{theme}</p>
		</div>
	);
};

export default ThemeSwitch;
