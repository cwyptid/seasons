import "./index.css";

const Sound = ({ play, sound: { id, name, soundURL } }) => {
	return (
		<div className="button">
			<a href="#this" onClick={() => play(id)}>
				<audio id={id} src={soundURL} />
				<div className="emoji">
					<p class="soundtile">{name} </p>
				</div>
			</a>
		</div>
	);
};

export { Sound };
