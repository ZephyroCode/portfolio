const ProfileCard = () => {
	return (
		<article className="card card--profile">
					<div className="card__image-container">
						<img
							src="./assets/img/profile.png"
							alt="Wilver 'Zephyro' Salazar"
						/>
					</div>
					<div className="card__header">
						<h2 className="card__title no-margin">Wilver Salazar</h2>
						<p className="card__second-title">Zephyro Code</p>
						<p className="card__subtitle" data-section="profile" data-value="role">
							Front End Developer
						</p>
					</div>
					<div className="card__body">
						<div className="card__link">
							<i className="fas fa-envelope icon"></i>
							<a href="mailto:royceskycraft@gmail.com"
								>RoyceSkyCraft@gmail.com</a
							><br />
							<i className="fas fa-phone-alt icon"></i>
							<a href="tel:+584124204128">+58 412 4204128</a><br />
							<i className="fab fa-github icon"></i>
							<a href="https://github.com/ZephyroCode/" target="_blank"
								>GitHub</a
							><br />
							<i className="fab fa-discord icon"></i>
							<a
								href="https://discordapp.com/users/271083466890674176/"
								target="_blank"
								>Discord</a
							>
						</div>
						<p
							className="card__text"
							data-section="profile"
							data-value="description"
						>
							I'm a Web Developer looking for new experiences and knowledge. I'm
							very passionate about new technologies and I'm really interested
							in design and Videogames/Apps Development.<br />My objective is
							always be learning, improve my skills, and be able to complete any
							task.
						</p>
					</div>
				</article>
	)
}

export default ProfileCard;