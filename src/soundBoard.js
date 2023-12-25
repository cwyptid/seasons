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
			<div className="pwrapper">
				<p className="intro">
					we spend all summer waiting for winter, and all winter waiting for
					summer.
					<br />
					why not enjoy the present?
				</p>
			</div>
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
