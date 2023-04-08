import styled from 'styled-components';

export const Box = styled.div`
padding: 80px 60px;
background: black;
position: absolute;
bottom: 0;
width: 100%;
height: 300px;
background-color: #1D1F22;
font-family: Raleway;`


// @media (max-width: 1000px) {
// 	padding: 70px 30px;
// }
// `;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
width: 200px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;`

// @media (max-width: 1000px) {
// 	grid-template-columns: repeat(auto-fill,
// 						minmax(200px, 1fr));
// }
// `;

export const FooterLink = styled.a`
color: #FFFFFF;
margin-bottom: 20px;
/* font-size: 18px; */
text-decoration: none;
/* font-family: re;
font-style: Regular; */
font-size: 16px;
line-height: 22px;
line-height: 140%;
align-items: Left;
vertical-align: Center;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
	font-size: 16x;
	font-style: Medium;
	line-height: 22.4px
	line-height: 140%;
	color: #FFFFFF;
	margin-bottom: 40px;
	font-weight: bold;
`;
