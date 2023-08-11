import Hobbie from './Hobbie';
import styles from './Hobbies.module.scss';
import gamingImg from '/assets/img/games-hobbie.jpg';
import readingImg from '/assets/img/reading-hobbie.jpg';
import shuffleImg from '/assets/img/shuffle-hobbie.jpg';

const Hobbies = () => {
	return (
		<article className={styles.card}>
			<h2 className={styles.title}>Hobbies</h2>
			<Hobbie
				img={gamingImg}
				imgAlt='Videogames image'
				title='Gaming'
				text="I like to spend some time in Videogames. Especially RPG, but I'm always open to try other games."
			/>
			<Hobbie
				img={readingImg}
				imgAlt='Reading image'
				title='Reading'
				text="I have certain... fascination about reading. I like pretty much any genre, so I'm always open to some new recommendations."
			/>
			<Hobbie
				img={shuffleImg}
				imgAlt='Shuffle Dance image'
				title='Shuffle Dance'
				text='I like to spend some time practicing some Shuffle Dance, I always liked that dance style, and it helps a lot to let off some steam.'
			/>
		</article>
	);
};

export default Hobbies;
