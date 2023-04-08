import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyle";

const Footer = () => {
return (
	<Box>
	{/* <h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		GeeksforGeeks: A Computer Science Portal for Geeks
	</h1> */}
	<Container>
		<Row>
		<Column>
			<Heading>ABOUT US</Heading>
			<FooterLink href="#">Who we are</FooterLink>
			<FooterLink href="#">Quality in the details</FooterLink>
			<FooterLink href="#">Customer Reviews</FooterLink>
		</Column>
		<Column>
			<Heading>DEPARTMENTS</Heading>
			<FooterLink href="#">Women fashion</FooterLink>
			<FooterLink href="#">Men fashion</FooterLink>
			<FooterLink href="#">Home</FooterLink>
			
		</Column>
		<Column>
			<Heading>HELP</Heading>
			<FooterLink href="#">Customer service</FooterLink>
			<FooterLink href="#">Size guide</FooterLink>
			<FooterLink href="#">Contact us</FooterLink>
			
		</Column>
		<Column>
			<Heading>PAYMENTS & DELIVERY</Heading>
			<FooterLink href="#">Purchase terms</FooterLink>
			<FooterLink href="#">Guarantee</FooterLink>
			<FooterLink href="#">Contact us</FooterLink>
			
		</Column>
		{/* <Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column> */}
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
