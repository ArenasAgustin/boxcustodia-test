import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDocuments } from "../../redux/actions";
import "./documents.css";

const Documents = () => {
  const dispatch = useDispatch();

  const tokenState = useSelector((state) => state.token);

  const [token, setToken] = useState("");

  useEffect(() => setToken(tokenState), [tokenState]);

  useEffect(() => {
    if(token){
        dispatch(getDocuments(token));
    }
    }, [token]);

  return <div></div>;
};

export default Documents;
