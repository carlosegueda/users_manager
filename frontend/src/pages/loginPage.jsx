import "../css/login.css";
import Theme from "../components/Theme";
import "../css/theme.css";

export default function LoginPage() {
  return (
    <>
      <div class="login">
        <div class="form-login">
          <form class="form-log">
            <h1>Inicio de Sesión</h1>
            <div class="input-group">
              <label for="user">Usuario:</label>
              <input
                class="userinput"
                id="user"
                name="user"
                autocomplete="off"
                type="text"
                required
              />
            </div>

            <div class="input-group">
              <label for="password">Contraseña:</label>
              <input
                class="passwordinput"
                id="password"
                name="password"
                autocomplete="off"
                type="password"
                required
              />
            </div>
            <span class="forgot">
              <a href="/dash">Has Olvidado tu contraseña?</a>
            </span>
            <button class="submit" type="submit">
              Iniciar Sesión
            </button>
            <span class="registrar">
              No tienes cuenta?
              <a href="/register">Regístrate</a>
            </span>
            <a href="https://github.com/carlosegueda" target="_blank">
              <img src="/github-logo.png" class="giticon" />
            </a>
          </form>
        </div>
        <div class="options">
          <Theme/>
        </div>
        <div class="info-login">
          <div class="info">
            <h1>Users Manager</h1>
            <h2>
              Aplicación web desarrollada con React, HTML, CSS, JavaScript,
              NodeJS, Express y SQL que permite la gestión de usuarios y los
              permisos respectivos en el Dashboard.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
