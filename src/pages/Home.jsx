import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

import { Link, useNavigate } from "react-router-dom";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<Link to="/CreateUser">
			<button className="btn btn-success my-5">Add New contact</button> 
			</Link>


		</div>
	);
}; 