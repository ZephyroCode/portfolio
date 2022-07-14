const ProjectCard = () => {
	return (
		<article className='card card--project'>
			<div className='card__image-container'>
				<img
					src='./assets/img/sdn-preview.jpg'
					alt='SkyDead News Preview'
					className='card__image'
				/>
			</div>
			<div className='project'>
				<div className='project__tags'>
					<span className='project__tag'>#HTML</span>
					<span className='project__tag'>#CSS</span>
					<span className='project__tag'>#JavaScript</span>
					<span className='project__tag'>#Responsive</span>
				</div>
				<h2 className='card__title'>SkyDead News Page</h2>
				<p
					className='card__text'
					data-section='projects'
					data-value='first-project-first-text'
				>
					This is my first project. I wanted to make some kind of news page to
					practice my skills.
				</p>
				<p
					className='card__text'
					data-section='projects'
					data-value='first-project-second-text'
				>
					I'm planning on adding more content to make it a full website instead
					of a single page.
				</p>
				<div className='buttons'>
					<a
						target='_blank'
						href='https://zephyrocode.github.io/skydead-news/'
						className='button button--primary'
					>
						Demo
					</a>
					<a
						target='_blank'
						href='https://github.com/zephyrocode/skydead-news/'
						className='button button--ghost'
						data-section='projects'
						data-value='code-button'
					>
						Code
					</a>
				</div>
			</div>
		</article>
	);
};

export default ProjectCard;
