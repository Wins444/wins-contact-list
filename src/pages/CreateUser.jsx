import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link, useNavigate } from "react-router-dom";

export const CreateUser = () => {

  const { store, dispatch } = useGlobalReducer()

  return (
    <div className="text-center mt-5">
      CREATEUSERR
      <Link to="/">
      <a>Volver Al Home</a>
      </Link>
    </div>
  );
}; 