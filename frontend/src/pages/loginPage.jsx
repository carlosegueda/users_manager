import "../css/Login.css";

export default function LoginPage() {
  return (
    <>
    
      <div class="login">
        <div class="form-login"><form>
            <h1>Users Manager</h1>
          <div class="input-group">
            <label for="user">Usuario:</label>
            <input
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
              id="password"
              name="password"
              autocomplete="off"
              type="password"
              required
            />
          </div>
            <span class="forgot"><a href="#">Has Olvidado tu contraseña?</a></span>
          <button class="submit" type="submit">Iniciar Sesión</button>
        </form></div>
        
        <div class="info-login">
            <div class="info">
                <h1>¿Qué es Users Manager?</h1>
                <h2>Aplicación web desarrollada con React, HTML, CSS, JavaScript, NodeJS, Express y SQL que permite la gestión de usuarios y los permisos respectivos en el Dashboard.</h2>
            </div>
        </div>
      </div>
    </>
  );
}
