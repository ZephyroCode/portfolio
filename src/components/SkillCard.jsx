const SkillCard = () => {
	return (
		<article className='card'>
			<h2 className='card__title no-margin'>Front End</h2>
			<small data-section='skills-card' data-value='front-end-card-experience'>
				Years of Experience
			</small>
			<div className='skills__header'>
				<span className='skills__start-level'>0</span>
				<span className='skills__start-level'>1</span>
			</div>
			<div className='skills'>
				<div className='skills__item'>
					<p className='skills__tech'>HTML</p>
					<div className='skills__bar skills__bar--60'></div>
				</div>
				<div className='skills__item'>
					<p className='skills__tech'>CSS</p>
					<div className='skills__bar skills__bar--50'></div>
				</div>
				<div className='skills__item'>
					<p className='skills__tech'>JavaScript</p>
					<div className='skills__bar skills__bar--40'></div>
				</div>
			</div>
		</article>
	);
};

export default SkillCard;
