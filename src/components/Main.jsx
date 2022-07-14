import ProfileCard from './ProfileCard';

const Main = () => {
	return (
		<main className="main">
			<section className="column column--left">
				<ProfileCard />
				<article className="card card--hobbies">
					<h2 className="card__title">Hobbies</h2>
					<div className="hobbies">
						<div className="card__image-container">
							<img src="./assets/img/games-hobbie.jpg" alt="Videogames" />
						</div>
						<h3
							className="hobbies__title"
							data-section="hobbies"
							data-value="first-hobbie-title"
						>
							Gaming
						</h3>
						<p
							className="card__text"
							data-section="hobbies"
							data-value="first-hobbie-description"
						>
							I like to spend some time in Videogames. Especially RPG, but I'm
							always open to try other games.
						</p>
					</div>
					<div className="hobbies">
						<div className="card__image-container">
							<img src="./assets/img/reading-hobbie.jpg" alt="Libro" />
						</div>
						<h3
							className="hobbies__title"
							data-section="hobbies"
							data-value="second-hobbie-title"
						>
							Reading
						</h3>
						<p
							className="card__text"
							data-section="hobbies"
							data-value="second-hobbie-description"
						>
							I have a great fascination for reading. I can like any genre, and
							I'm always open to new books recommendations.
						</p>
					</div>
					<div className="hobbies">
						<div className="card__image-container">
							<img src="./assets/img/shuffle-hobbie.jpg" alt="Shuffle Dance" />
						</div>
						<h3
							className="hobbies__title"
							data-section="hobbies"
							data-value="third-hobbie-title"
						>
							Shuffle Dance
						</h3>
						<p
							className="card__text"
							data-section="hobbies"
							data-value="third-hobbie-description"
						>
							I spend some time practicing Shuffle Dance. I have always liked
							that kind of dance.
						</p>
					</div>
				</article>
			</section>
			<section className="column column--right">
				<article className="card">
					<h2 className="card__title no-margin">Front End</h2>
					<small
						data-section="skills-card"
						data-value="front-end-card-experience"
						>Years of Experience</small
					>
					<div className="skills__header">
						<span className="skills__start-level">0</span>
						<span className="skills__start-level">1</span>
					</div>
					<div className="skills">
						<div className="skills__item">
							<p className="skills__tech">HTML</p>
							<div className="skills__bar skills__bar--60"></div>
						</div>
						<div className="skills__item">
							<p className="skills__tech">CSS</p>
							<div className="skills__bar skills__bar--50"></div>
						</div>
						<div className="skills__item">
							<p className="skills__tech">JavaScript</p>
							<div className="skills__bar skills__bar--40"></div>
						</div>
					</div>
				</article>
				<article className="card">
					<h2
						className="card__title no-margin"
						data-section="skills-card"
						data-value="language-card-title"
					>
						Languages
					</h2>
					<small data-section="skills-card" data-value="language-card-level"
						>Level</small
					>
					<div className="skills">
						<div className="skills__header">
							<span
								className="skills__start-level"
								data-section="skills-card"
								data-value="language-card-base-level"
								>Basic</span
							>
							<span
								className="skills__start-level"
								data-section="skills-card"
								data-value="language-card-high-level"
								>Native</span
							>
						</div>
						<div className="skills">
							<div className="skills__item">
								<p
									className="skills__tech"
									data-section="skills-card"
									data-value="language-card-first-language"
								>
									Spanish
								</p>
								<div className="skills__bar skills__bar--95"></div>
							</div>
							<div className="skills__item">
								<p
									className="skills__tech"
									data-section="skills-card"
									data-value="language-card-second-language"
								>
									English
								</p>
								<div className="skills__bar skills__bar--70"></div>
							</div>
						</div>
					</div>
				</article>
				<article className="card">
					<h2
						className="card__title no-margin"
						data-section="skills-card"
						data-value="other-skills-card-title"
					>
						Other Skills
					</h2>
					<small data-section="skills-card" data-value="other-skills-card-level"
						>Level</small
					>
					<div className="skills">
						<div className="skills__header">
							<span
								className="skills__start-level"
								data-section="skills-card"
								data-value="other-skills-card-base-level"
								>Basic</span
							>
							<span
								className="skills__start-level"
								data-section="skills-card"
								data-value="other-skills-card-high-level"
								>Advanced</span
							>
						</div>
						<div className="skills">
							<div className="skills__item">
								<p
									className="skills__tech"
									data-section="skills-card"
									data-value="other-skills-card-first-skill"
								>
									Translation
								</p>
								<div className="skills__bar skills__bar--80"></div>
							</div>
							<div className="skills__item">
								<p
									className="skills__tech"
									data-section="skills-card"
									data-value="other-skills-card-second-skill"
								>
									Drafting
								</p>
								<div className="skills__bar skills__bar--75"></div>
							</div>
						</div>
					</div>
				</article>
				<article className="card card--project">
					<div className="card__image-container">
						<img
							src="./assets/img/sdn-preview.jpg"
							alt="SkyDead News Preview"
							className="card__image"
						/>
					</div>
					<div className="project">
						<div className="project__tags">
							<span className="project__tag">#HTML</span>
							<span className="project__tag">#CSS</span>
							<span className="project__tag">#JavaScript</span>
							<span className="project__tag">#Responsive</span>
						</div>
						<h2 className="card__title">SkyDead News Page</h2>
						<p
							className="card__text"
							data-section="projects"
							data-value="first-project-first-text"
						>
							This is my first project. I wanted to make some kind of news page
							to practice my skills.
						</p>
						<p
							className="card__text"
							data-section="projects"
							data-value="first-project-second-text"
						>
							I'm planning on adding more content to make it a full website
							instead of a single page.
						</p>
						<div className="buttons">
							<a
								target="_blank"
								href="https://zephyrocode.github.io/skydead-news/"
								className="button button--primary"
							>
								Demo
							</a>
							<a
								target="_blank"
								href="https://github.com/zephyrocode/skydead-news/"
								className="button button--ghost"
								data-section="projects"
								data-value="code-button"
								>Code</a
							>
						</div>
					</div>
				</article>
				<article className="card card--project">
					<div className="card__image-container">
						<img
							src="./assets/img/ec-preview.jpg"
							alt="Ethereum Card Preview"
							className="card__image"
						/>
					</div>
					<div className="project">
						<div className="project__tags">
							<span className="project__tag">#HTML</span>
							<span className="project__tag">#CSS</span>
							<span className="project__tag">#Responsive</span>
						</div>
						<h2 className="card__title">Ethereum Card</h2>
						<p
							className="card__text"
							data-section="projects"
							data-value="second-project-first-text"
						>
							One project I've made from Frontend Mentor, a simple card.
						</p>
						<div className="buttons">
							<a
								target="_blank"
								href="https://zephyrocode.github.io/ethereum-card/"
								className="button button--primary"
							>
								Demo
							</a>
							<a
								target="_blank"
								href="https://github.com/zephyrocode/ethereum-card/"
								className="button button--ghost"
								data-section="projects"
								data-value="code-button"
								>Code</a
							>
						</div>
					</div>
				</article>
			</section>
		</main>
	);
}

export default Main;