import { Col, Container, Row } from "react-bootstrap";
import "./HomePage.css";
import React from "react";

export default function HomePage() {
	return (
		<div classname="wrapper">
			<section className="top-container">
				<div className="top-box top-box-a">ALL HP QUIZ</div>
				<div className="top-box gry">Gryffindor</div>
				<div className="top-box sly">Slytherin</div>
				<div className="top-box huff">HuffelPuff</div>
				<div className="top-box raw">Rawenclaw</div>
				<div className="top-box top-box-f">Rawenclaw</div>
			</section>
		</div>
	);
}
