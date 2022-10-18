import React, { useEffect, useState } from "react";
import "../styles/section.scss";
import { client } from "../client/Client";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { FaLaptopCode as WorkIcon } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import "../styles/timeline.scss";

const setColours = (index) => {
	const colours = ["#EC373F", "#1B1B1B"];
	if (index % 2 === 0) {
		return colours;
	} else {
		return colours.reverse();
	}
};

const Timeline = () => {
	const [workHistory, setWorkHistory] = useState([]);

	useEffect(() => {
		const getWorkHistory = async () => {
			await client.get("work").then((res) => {
				res.data.forEach((element, index) => {
					const [iconColour, backgroundColour] = setColours(index);

					const item = (
						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: backgroundColour, color: "#fff" }}
							contentArrowStyle={{ borderRight: `7px solid ${backgroundColour}` }}
							date={element.date}
							dateClassName="date-element"
							iconStyle={{ background: iconColour, color: "#fff" }}
							icon={<WorkIcon />}>
							<h3 className="vertical-timeline-element-title">{element.name}</h3>
							<h4 className="vertical-timeline-element-subtitle">{element.role}</h4>
							<h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
							<p>{element.description}</p>
						</VerticalTimelineElement>
					);
					return setWorkHistory((array) => [item, ...array]);
				});
			});
		};

		getWorkHistory();
	}, []);

	return (
		<>
			<VerticalTimeline>{workHistory}</VerticalTimeline>
		</>
	);
};

export default Timeline;
