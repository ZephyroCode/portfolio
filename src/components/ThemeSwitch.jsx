import styles from './ThemeSwitch.module.scss';
import moonImg from '/assets/icons/moon.svg';
import sunImg from '/assets/icons/sun.svg';

const ThemeSwitch = () => {
	return (
		<div className={styles.themeSwitch}>
			<img src={moonImg} alt='Theme Icon' />
			<p>Dark Mode</p>
		</div>
	);
};

export default ThemeSwitch;
