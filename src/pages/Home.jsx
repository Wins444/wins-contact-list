
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

import React, { useEffect, useState } from "react";



import { Link, useNavigate } from "react-router-dom";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()


  
	useEffect(() => {

		const fetchContacts = async () => {
			try {
				const response = await fetch('https://playground.4geeks.com/contact/agendas/Roberto');
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				const data = await response.json();
				
				dispatch({
					type: "setContacts",
					payload: data.contacts
				})
					
				console.log("datos guardados")
				console.log(data.contacts)
				

			} catch (error) {
				console.error("Hubo un problema con la solicitud:", error);
			}

		};

		fetchContacts();
	}, []);


	// con un map renderizar esos contactos
	return (
		<div className="text-center mt-5">
			<Link to="/CreateUser">
			<button className="btn btn-success my-5">Add New contact</button> 
			</Link>


		</div>
	);
}; 