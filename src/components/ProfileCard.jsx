import Links from './Links';
import styles from './ProfileCard.module.scss';

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
				<Links
					mail={mail}
					phone={phone}
					linkedin={linkedin}
					github={github}
					discord={discord}
				/>
				<p className={styles.text}>{text}</p>
			</div>
		</article>
	);
};

export default ProfileCard;
