import "./index.css";

const Sound = ({ play, sound: { id, icon, soundURL } }) => {
	return (
		<div className="button">
			<a href="#" onClick={() => play(id)}>
				<audio id={id} src={soundURL} />
				<div className="emoji">
					<p class="soundtile">{icon} </p>
				</div>
			</a>
		</div>
	);
};

export { Sound };
