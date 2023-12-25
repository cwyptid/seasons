import { Sound } from "./sound.js";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const SoundBoard = ({ play, animalsounds, musicsounds, cartoonsounds }) => {
	return (
		<>
			<div class="icon"></div>
			<Tabs
				defaultActiveKey="genre-1"
				id="tabs"
				className="tabcss opacity-75"
				justify
			>
				<Tab eventKey="genre-1" title="Animals">
					{animalsounds.map((sound) => (
						<Sound play={play} sound={sound} />
					))}
				</Tab>
				<Tab eventKey="genre-2" title="Musical">
					{musicsounds.map((sound) => (
						<Sound play={play} sound={sound} />
					))}
				</Tab>
				<Tab eventKey="genre-3" title="For Fun">
					{cartoonsounds.map((sound) => (
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
