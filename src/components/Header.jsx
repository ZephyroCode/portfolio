import styles from './Header.module.scss';
import ThemeSwitch from './ThemeSwitch';
import Flags from './Flags';

const Header = () => {
	return (
		<header className={styles.header}>
			<ThemeSwitch />
			<h1>ZephyroCode</h1>
			<Flags />
		</header>
	);
};

export default Header;
