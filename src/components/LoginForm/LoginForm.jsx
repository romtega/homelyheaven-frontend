import "./loginform.css";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "@/services/axiosConfig";
import { jwtDecode } from "jwt-decode";

const LoginForm = () => {
  const [isAuth, SetIsAuth] = useState(false);
  const [userPayload, setUserPayload] = useState(null);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("/api/v1/login", data);

      if (!response || !response.data || response.status !== 200) {
        throw new Error(
          `Error ${response.status}: ${
            response.data?.msg || "Unexpected error occurred"
          }`
        );
      }

      const { token } = response.data;
      localStorage.setItem("token", token);

      const payload = jwtDecode(token);
      SetIsAuth(true);
      setUserPayload(payload);
      navigate("/user/profile");
      alert("¡Bienvenido!");
    } catch (error) {
      console.error("Login error:", error.message);
      alert(
        error.response?.data?.msg ||
          "Ocurrió un error durante el inicio de sesión. Por favor, intenta nuevamente."
      );
    }
  };

  return (
    <section className="section__signin grid">
      <form
        className="signin__form flex font-base"
        noValidate // Desactivar validación del navegador
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="signin__title font-2">Bienvenido</h2>
        <div className="signin__group grid">
          <label htmlFor="email" className="signin__label">
            Email
          </label>
          <input
            id="email"
            className="signin__input"
            {...register("email", {
              required: "Debes ingresar un correo válido",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Correo inválido",
              },
            })}
          />
          {errors.email && (
            <p className="signin__error flex">
              <i className="fa-solid fa-circle-chevron-left" />
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="signin__group grid">
          <label htmlFor="password" className="signin__label">
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            className="signin__input"
            {...register("password", {
              required: "Tu contraseña no es correcta, intenta de nuevo",
            })}
          />
          {errors.password && (
            <p className="signin__error flex">
              <i className="fa-solid fa-circle-chevron-left" />
              {errors.password.message}
            </p>
          )}
        </div>
        <button type="submit" className="signin__btn text-white uppercase fw-4">
          Ingresa
        </button>
        <Link to="/signin" className="login__newuser text-secondary fw-2">
          ¿Eres nuevo? Regístrate ahora
        </Link>
      </form>
    </section>
  );
};

export default LoginForm;
