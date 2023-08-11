import styles from './Header.module.scss';
import ThemeSwitch from './ThemeSwitch';

const Header = () => {
	return (
		<header className={styles.header}>
			<h1>ZephyroCode</h1>
			<ThemeSwitch />
		</header>
	);
};

export default Header;
