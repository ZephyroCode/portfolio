import styles from './Header.module.scss';
import ProfileCard from './ProfileCard';
import Hobbies from './Hobbies';
import SkillCard from './SkillCard';
import ProjectCard from './ProjectCard';
import profileImg from '/assets/img/profile.png';

const Main = () => {
	return (
		<main className={styles.main}>
			<ProfileCard
				profileImg={profileImg}
				imgAlt='Wilver "ZephyroCode" Salazar'
				title='Wilver Salazar'
				secondTitle='Zephyro Code'
				subtitle='Frontend Web Developer'
				mail='WilverSmithSL@gmail.com'
				phone='+584124204128'
				linkedin='https://linkedin.com/in/wilver-salazar'
				github='https://github.com/ZephyroCode'
				discord='https://discordapp.com/users/271083466890674176'
				text={`I'm a Web Developer looking for new experiences and knowledge. I'm very passionate about new technologies and I'm really interested in design and Videogames/Apps Development. My objective is always be learning, improve my skills, and be able to complete any task.`}
			/>
			<ProjectCard />
			<ProjectCard />
			<SkillCard />
			<Hobbies />
		</main>
	);
};

export default Main;
