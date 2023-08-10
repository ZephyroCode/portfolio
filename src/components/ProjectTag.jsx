import styles from './ProjectTag.module.scss';

const ProjectTag = ({ tag }) => {
	return <span className={styles.projectTag}>#{tag}</span>;
};

export default ProjectTag;
