import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { loginUserService } from "@/services/useServices";
import { useAuthContext } from "@/hooks/useAuthContext";
import "./loginform.css";

const LoginForm = () => {
  const { login } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await loginUserService(data);
      if (!response.data) {
        throw new Error(`Error ${response.status}: ${response.status}`);
      }

      const result = response.data;
      //  console.log("Response JSON:", result);
      if (response.status === 200) {
        login(result.token);
        navigate("/user");
        alert("Bienvenido!");
      } else {
        console.error(result.msg);
        alert(result.msg);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Ocurrió un error, por favor intenta nuevamente.");
    }
  };

  return (
    <section className="section__signin grid">
      <form
        className="signin__form flex font-base"
        onSubmit={handleSubmit(onSubmit)}
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
