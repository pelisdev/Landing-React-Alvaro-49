import React from "react";
import Navbar from "./component/Navbar";
import Head from "./component/Head";
import Card from "./component/Card";
import Footer from "./component/Footer";

const Home = () => {

	return (
		<div>
			<Navbar />
			<Head />
			<div className="Containar-Card container-fluid h-800">
				<div className="row">
					<div className="col-sm-12 col-md-12 col-lg-3">
						<Card
							imageUrl="https://www.themoviedb.org/t/p/w220_and_h330_face/ncKCQVXgk4BcQV6XbvesgZ2zLvZ.jpg"
							title="Oppenheimer (2023)"
							description="

							Película sobre el físico J. Robert Oppenheimer y su papel como desarrollador de la bomba atómica."
							buttonText="Más Información"
						/>
					</div>
					<div className="col-sm-12 col-md-12 col-lg-3">
						<Card
							imageUrl="https://www.themoviedb.org/t/p/w220_and_h330_face/vpuuFM032yiX8tox4L84Wl9MGjG.jpg"
							title="The Marvels (2023)"
							description="Cuando sus obligaciones la envían a un agujero de gusano vinculado a un revolucionario kree, los poderes de..."
							buttonText="Más Información"
						/>
					</div>
					<div className="col-sm-12 col-md-12 col-lg-3">
						<Card
							imageUrl="https://www.themoviedb.org/t/p/w220_and_h330_face/rUV9FvLHqm50jnbf30kwiFpzFmM.jpg"
							title="El asesino (2023)"
							description="Después de un fatídico error, un asesino se enfrenta a sus jefes —y a sí mismo— en una persecución internacional de castigo, según...."
							buttonText="Más Información"
						/>
					</div>
					<div className="col-sm-12 col-md-12 col-lg-3">
						<Card
							imageUrl="https://www.themoviedb.org/t/p/w220_and_h330_face/53aonG0QS3ynbYuuwhPtyoOwTDD.jpg"
							title="Loki (2021)"
							description="Loki es llevado ante la misteriosa organización llamada AVT (Autoridad de Variación Temporal) después de los..."
							buttonText="Más Información"
						/>
					</div>
				</div>
			</div>
			<div className="col-sm-12 col-md-12 col-lg-12 mt-5" >
				<Footer
					footerText="Copyright Alvaro-49 TheMovieDB © 2023" />
			</div>
		</div>
	);
};
export default Home; 