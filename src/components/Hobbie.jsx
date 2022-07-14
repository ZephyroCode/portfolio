import styles from './Hobbie.module.scss';

const Hobbie = ({ img, imgAlt, title, text }) => {
	return (
		<div className={styles.hobbie}>
			<div className={styles.imageContainer}>
				<img src={img} alt={imgAlt} />
			</div>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.text}>{text}</p>
		</div>
	);
};

export default Hobbie;
