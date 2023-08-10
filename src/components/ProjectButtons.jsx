import styles from './ProjectButtons.module.scss';

const ProjectButtons = ({ demoLink, codeLink }) => {
	return (
		<div className={styles.buttons}>
			<a
				target='_blank'
				href={demoLink}
				className={styles.buttonPrimary}
				rel='noreferrer'
			>
				Demo
			</a>
			<a
				target='_blank'
				href={codeLink}
				className={styles.buttonGhost}
				rel='noreferrer'
			>
				Code
			</a>
		</div>
	);
};

export default ProjectButtons;
