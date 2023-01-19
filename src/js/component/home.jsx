import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Cards from "./cards.jsx";
import Footer from "./footer.jsx";


//include images into your bundle

//create your first component
const Home = () => {
	return (

		<div className="">
			<Navbar/>
			<div className="container">
				<Jumbotron/>
				<div className="d-flex justify-content-between flex-wrap">
					<Cards/>
					<Cards/>
					<Cards/>
					<Cards/>
				</div>
			</div>

			<Footer/>
		
		</div>
	);
};

export default Home;
