import "./loginform.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <section className="section__signin grid">
      <form
        className="signin__form flex font-base"
        noValidate // Desactivar validación del navegador
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
