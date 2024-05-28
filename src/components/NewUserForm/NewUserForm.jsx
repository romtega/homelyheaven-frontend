/* eslint-disable comma-dangle */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./newuserform.css";

const NewUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="section__signin grid">
      <form
        className="signin__form flex font-base"
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
                value: /\S+@\S+\.\S+/,
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
          <label htmlFor="phone" className="signin__label">
            Telefono
          </label>
          <input
            id="phone"
            type="tel"
            className="signin__input"
            {...register("phone", {
              required: "Debes ingresar un telefono",
              pattern: {
                value: /^\d{10}$/,
                message: "Debe ser al menos 10 digitos",
              },
            })}
          />
          {errors.phone && (
            <p className="signin__error flex">
              <i className="fa-solid fa-circle-chevron-left" />
              {errors.phone.message}
            </p>
          )}
        </div>
        <div className="signin__group grid">
          <label htmlFor="dni" className="signin__label">
            DNI
          </label>
          <input
            id="dni"
            className="signin__input"
            {...register("dni", {
              required: "es necesario que ingreses tu DNI",
            })}
          />
          {errors.dni && (
            <p className="signin__error flex">
              <i className="fa-solid fa-circle-chevron-left" />
              {errors.dni.message}
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
            <option value="customer">Huésped</option>
            <option value="provider">Anfitrión</option>
          </select>
          {errors.role && (
            <p className="signin__error flex">
              <i className="fa-solid fa-circle-chevron-left" />
              {errors.role.message}
            </p>
          )}
        </div>
        <button type="submit" className="signin__btn text-white uppercase fw-4">
          <Link to="/user">Crear cuenta</Link>
        </button>
      </form>
    </section>
  );
};

export default NewUserForm;
