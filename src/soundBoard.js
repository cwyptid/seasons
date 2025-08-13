import { Sound } from "./sound.js";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const SoundBoard = ({
	play,
	animalsounds,
	musicsounds,
	cartoonsounds,
	wintersounds,
}) => {
	return (
		<>
			<header>Sounds of the Seasons</header>
			<Tabs defaultActiveKey="genre-1" id="tabs" className="tabcss" justify>
				<Tab eventKey="genre-1" title="Spring">
					{animalsounds.map((sound) => (
						<Sound play={play} sound={sound} />
					))}
				</Tab>
				<Tab id="summer" eventKey="genre-2" title="Summer">
					{musicsounds.map((sound) => (
						<Sound play={play} sound={sound} />
					))}
				</Tab>
				<Tab id="autumn" eventKey="genre-3" title="Autumn">
					{cartoonsounds.map((sound) => (
						<Sound play={play} sound={sound} />
					))}
				</Tab>
				<Tab id="winter" eventKey="genre-4" title="Winter">
					{wintersounds.map((sound) => (
						<Sound play={play} sound={sound} />
					))}
				</Tab>
			</Tabs>
			<footer>
				<p>
					Made with Bootstrap and React.
					<br /> 2023 Eddie Lampert
				</p>
			</footer>
		</>
	);
};

export { SoundBoard };
