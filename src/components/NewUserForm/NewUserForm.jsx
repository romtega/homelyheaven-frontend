import "./newuserform.css";

import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { registerUserService, loginUserService } from "@/services/useServices";
import { useAuthContext } from "@/hooks/useAuthContext";

const NewUserForm = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await registerUserService(data);
      if (!response || !response.data || response.status !== 201) {
        throw new Error(
          `Error ${response.status}: ${
            response.data?.msg || "Unexpected error occurred"
          }`
        );
      }

      const loginResponse = await loginUserService(data);

      if (
        !loginResponse ||
        !loginResponse.data ||
        loginResponse.status !== 200
      ) {
        throw new Error(
          `Error ${loginResponse.status}: ${
            loginResponse.data?.msg || "Unexpected error occurred"
          }`
        );
      }

      const { token } = loginResponse.data;
      login(token);
      navigate("/user/profile");
      alert("¡Bienvenido!");
    } catch (error) {
      console.error("Login error:", error.message);
      alert(
        error.response?.data?.msg ||
          "Ocurrió un error durante el registro de usuario. Por favor, intenta nuevamente."
      );
    }
  };

  return (
    <section className="section__signin grid">
      <form
        className="signin__form flex font-base"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="signin__title font-2">Registrate</h2>
        <div className="signin__group grid">
          <label htmlFor="firstName" className="signin__label">
            Nombre
          </label>
          <input
            id="firstName"
            className="signin__input"
            {...register("firstName", {
              required: "Debes ingresar un nombre",
            })}
          />
          {errors.firstName && (
            <p className="signin__error flex">
              <i className="fa-solid fa-circle-chevron-left" />
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className="signin__group grid">
          <label htmlFor="lastName" className="signin__label">
            Apellidos
          </label>
          <input
            id="lastName"
            className="signin__input"
            {...register("lastName", {
              required: "Debes ingresar un apellido",
            })}
          />
          {errors.lastName && (
            <p className="signin__error flex">
              <i className="fa-solid fa-circle-chevron-left" />
              {errors.lastName.message}
            </p>
          )}
        </div>
        <div className="signin__group grid">
          <label htmlFor="email" className="signin__label">
            Email
          </label>
          <input
            id="email"
            className="signin__input"
            {...register("email", {
              required: "Debes ingresar un correo valido",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Correo invalido",
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
          <label htmlFor="phoneNumber" className="signin__label">
            Telefono
          </label>
          <input
            id="phoneNumber"
            type="tel"
            className="signin__input"
            {...register("phoneNumber", {
              required: "Debes ingresar un telefono",
              pattern: {
                value: /^\+?[1-9]\d{1,14}$/,
                message: "Debe ser al menos 10 digitos",
              },
            })}
          />
          {errors.phoneNumber && (
            <p className="signin__error flex">
              <i className="fa-solid fa-circle-chevron-left" />
              {errors.phoneNumber.message}
            </p>
          )}
        </div>
        <div className="signin__group grid">
          <label htmlFor="username" className="signin__label">
            Username
          </label>
          <input
            id="username"
            className="signin__input"
            {...register("username", {
              required: "Debes ingresar un nombre de usuario",
            })}
          />
          {errors.username && (
            <p className="signin__error flex">
              <i className="fa-solid fa-circle-chevron-left" />
              {errors.username.message}
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
              required: "Debes ingresar una contraseña",
            })}
          />
          {errors.password && (
            <p className="signin__error flex">
              <i className="fa-solid fa-circle-chevron-left" />
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="signin__group grid">
          <label htmlFor="role" className="signin__label">
            Elige tu perfil
          </label>
          <select
            id="role"
            className="signin__input"
            {...register("role", { required: "Elige un perfil" })}
          >
            <option value="">Selecciona</option>
            <option value="guest">Huésped</option>
            <option value="host">Anfitrión</option>
            <option value="admin">Admin</option>
          </select>
          {errors.role && (
            <p className="signin__error flex">
              <i className="fa-solid fa-circle-chevron-left" />
              {errors.role.message}
            </p>
          )}
        </div>
        <button type="submit" className="signin__btn text-white uppercase fw-4">
          Crear cuenta
        </button>
        <Link to="/login" className="login__newuser text-secondary fw-2">
          ¿Ya tienes cuenta?
        </Link>
      </form>
    </section>
  );
};

export default NewUserForm;
