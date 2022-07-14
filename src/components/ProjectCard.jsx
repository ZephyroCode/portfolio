import ProjectButtons from './ProjectButtons';
import styles from './ProjectCard.module.scss';
import ProjectTag from './ProjectTag';

const ProjectCard = ({
	img,
	imgAlt,
	tags,
	title,
	text,
	demoLink,
	codeLink,
}) => {
	return (
		<article className={styles.card}>
			<div className={styles.imageContainer}>
				<img src={img} alt={imgAlt} />
			</div>
			<div className={styles.project}>
				<div className={styles.projectTags}>
					{tags.forEach(tagName => {
						<ProjectTag tag={tagName} />;
					})}
				</div>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.text}>{text}</p>
				<ProjectButtons demoLink={demoLink} codeLink={codeLink} />
			</div>
		</article>
	);
};

export default ProjectCard;
