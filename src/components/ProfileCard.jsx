import styles from './ProfileCard.module.scss';
import '../resources/fa-icons/all.css';

const ProfileCard = ({
	profileImg,
	imgAlt,
	title,
	secondTitle,
	subtitle,
	mail,
	phone,
	linkedin,
	github,
	discord,
	text,
}) => {
	return (
		<article className={styles.card}>
			<div className={styles.imageContainer}>
				<img src={profileImg} alt={imgAlt} />
			</div>
			<div className={styles.header}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.secondTitle}>{secondTitle}</p>
				<p className={styles.subtitle}>{subtitle}</p>
			</div>
			<div>
				<div className={styles.links}>
					<i className={`fas fa-envelope ${styles.icon}`}></i>
					<a href={`mailto:${mail}`}>{mail}</a>
					<br />
					<i className={`fas fa-phone-alt ${styles.icon}`}></i>
					<a href={`tel:${phone}`}>{phone}</a>
					<br />
					<i className={`fab fa-linkedin ${styles.icon}`}></i>
					<a href={linkedin} target='_blank'>
						LinkedIn
					</a>
					<br />
					<i className={`fab fa-github ${styles.icon}`}></i>
					<a href={github} target='_blank'>
						GitHub
					</a>
					<br />
					<i className={`fab fa-discord ${styles.icon}`}></i>
					<a href={discord} target='_blank'>
						Discord
					</a>
				</div>
				<p className={styles.text}>{text}</p>
			</div>
		</article>
	);
};

export default ProfileCard;
