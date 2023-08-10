import '../resources/fa-icons/all.css';
import styles from './Links.module.scss';

const Links = ({ mail, phone, linkedin, github, discord }) => {
	return (
		<div className={styles.links}>
			<i className={`fas fa-envelope ${styles.icon}`}></i>
			<a href={`mailto:${mail}`}>{mail}</a>
			<br />
			<i className={`fas fa-phone-alt ${styles.icon}`}></i>
			<a href={`tel:${phone}`}>{phone}</a>
			<br />
			<i className={`fab fa-linkedin ${styles.icon}`}></i>
			<a href={linkedin} target='_blank' rel='noreferrer'>
				LinkedIn
			</a>
			<br />
			<i className={`fab fa-github ${styles.icon}`}></i>
			<a href={github} target='_blank' rel='noreferrer'>
				GitHub
			</a>
			<br />
			<i className={`fab fa-discord ${styles.icon}`}></i>
			<a href={discord} target='_blank' rel='noreferrer'>
				Discord
			</a>
		</div>
	);
};

export default Links;
