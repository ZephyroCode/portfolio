import styles from './Flags.module.scss';

const Flags = () => {
	return (
		<div className={styles.flags}>
			<img src='/assets/img/icons/es.svg' alt='ES Flag' />
			<img src='/assets/img/icons/gb.svg' alt='EN Flag' />
		</div>
	);
};

export default Flags;
