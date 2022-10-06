import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./loginForm.css";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <form className="d-center-center-column form-login">
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
          type="text"
        />

        <div className="input-login">
          <input
            placeholder="Ingresá tu contraseña"
            className="input-login-password"
            type={showPassword ? "text" : "password"}
          />

          <div
            className="d-center-center-column icon-password-login"
            onClick={handleShowPassword}
          >
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </div>
        </div>
      </div>

      <div className="d-center-center-column w-100">
        <button type="submit" className="transition-slow-xs submit-login w-100">
          Ingresar
        </button>

        <a href="" className="reset-password-login transition-slow">Olvidé mi contraseña</a>
      </div>

      <div className="extra-btn-login">
        <button className="transition-slow-xs">Información comercial</button>

        <button className="transition-slow-xs">¿Necesitás ayuda?</button>
      </div>
    </form>
  );
};

export default LoginForm;
