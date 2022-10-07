import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getToken, setToken } from "../../redux/actions";
import "./loginForm.css";

const LoginForm = () => {
  /*
   * Initialize dispatch, and navigate
   */
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /*
   * Initialize global state variables
   */
  const errorTokenState = useSelector((state) => state.errorToken);
  const tokenState = useSelector((state) => state.token);

  /*
   * Initialize state variables
   */
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [token, setToken] = useState(false);

  /*
   * Functions to handle state changes
   */
  const handleShowPassword = () => setShowPassword((prev) => !prev);
  const handleSetEmail = (e) => setEmail(e.target.value);
  const handleSetPassword = (e) => setPassword(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(getToken({ userName: email, password }));
    setToken(true);
  };

  /*
   * useEffect to handle token state changes
   */
  useEffect(() => setError(errorTokenState), [errorTokenState]);

  /*
   * useEffect to navigate to documents page if token is set
   */
  useEffect(() => {
    if (tokenState && token) navigate("/documents");
  }, [tokenState]);

  return (
    <form className="d-center-center-column form-login" onSubmit={handleSubmit}>
      <div className="d-center-center-column logo-login-container">
        <img src="img/logo.jpg" alt="JornalYa" className="logo-login" />

        <p className="text-center text-login">
          ¡Hola! Ingresa los datos de tu cuenta para continuar
        </p>
      </div>

      <div className="d-center-center-column w-100">
        <label className="text-start w-100 label-login">Usuario</label>

        <input
          placeholder="Ingresá tu usuario"
          className="input-login"
          type="email"
          value={email}
          onChange={handleSetEmail}
        />

        <div className="input-login">
          <input
            placeholder="Ingresá tu contraseña"
            className="input-login-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handleSetPassword}
          />

          <div
            className="d-center-center-column icon-password-login"
            onClick={handleShowPassword}
          >
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </div>
        </div>

        {error ? (
          <p className="error-login">Es incorrecto el usuario y/o contraseña</p>
        ) : null}
      </div>

      <div className="d-center-center-column w-100">
        <button type="submit" className="transition-slow-xs submit-login w-100">
          Ingresar
        </button>

        <a href="" className="reset-password-login transition-slow">
          Olvidé mi contraseña
        </a>
      </div>

      <div className="extra-btn-login">
        <button className="transition-slow-xs">Información comercial</button>

        <button className="transition-slow-xs">¿Necesitás ayuda?</button>
      </div>
    </form>
  );
};

export default LoginForm;
