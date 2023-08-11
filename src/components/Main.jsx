import styles from './Header.module.scss';
import ProfileCard from './ProfileCard';
import Hobbies from './Hobbies';
import SkillCard from './SkillCard';
import ProjectCard from './ProjectCard';
import profileImg from '/assets/img/profile.png';
import firstProjectImg from '/assets/img/skydead-news-preview.jpg';
import secondProjectImg from '/assets/img/ethereum-card-preview.jpg';

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
			<ProjectCard
				img={firstProjectImg}
				imgAlt='SkyDead News Landing Page Preview'
				tags={['HTML', 'CSS', 'JavaScript', 'Responsive']}
				title='SkyDead News Landing Page'
				text="This is my first project. I wanted to make some kind of news page
            to practice my skills during my first week learning frontend web development. I'm thinking about adding more content to make it a full website
            instead of a single page."
				demoLink='https://zephyrocode.github.io/skydead-news'
				codeLink='https://github.com/zephyrocode/skydead-news'
			/>
			<ProjectCard
				img={secondProjectImg}
				imgAlt='Ethereum Card Preview'
				tags={['HTML', 'CSS', 'JavaScript', 'Responsive']}
				title='Ethereum Card Component'
				text="One project I've made from Frontend Mentor, a simple card component."
				demoLink='https://zephyrocode.github.io/ethereum-card'
				codeLink='https://github.com/zephyrocode/ethereum-card'
			/>
			<SkillCard />
			<Hobbies />
		</main>
	);
};

export default Main;
