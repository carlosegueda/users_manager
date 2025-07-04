import Theme from "../components/Theme";
import "../css/theme.css";
import "../css/register.css";

export default function RegisterPage() {
  return (
    <>
      <div className="register">  
        <div className="register-form">
          <form >
            <h1>Crear Usuario</h1>
            <div className="columnas">
              <div className="columna">
                <div class="input-group2">
                  <label for="nombre">Nombre Completo:</label>
                  <input
                    class="userinput"
                    id="nombre"
                    name="nombre"
                    autocomplete="off"
                    type="text"
                    required
                  />
                </div>
                <div class="input-group2">
                  <label for="correo">Correo:</label>
                  <input
                    class="userinput"
                    id="correo"
                    name="correo"
                    autocomplete="off"
                    type="text"
                    required
                  />
                </div>
                <div class="input-group2">
                  <label for="telefono">Teléfono:</label>
                  <input
                    class="userinput"
                    id="telefono"
                    name="telefono"
                    autocomplete="off"
                    type="text"
                    required
                  />
                </div>
              </div>

              <div className="columna">
                <div class="input-group2">
                  <label for="role">Rol:</label>
                  <select
                    class="userinput"
                    id="role"
                    name="role"
                    autocomplete="off"
                    required
                  >
                    <option value="admin">Administrador</option>
                    <option value="user">Usuario</option>
                    <option value="guest">Invitado</option>
                  </select>
                </div>
                <div class="input-group2">
                  <label for="sex">Sexo:</label>
                  <input
                    class="userinput"
                    id="sex"
                    name="sex"
                    autocomplete="off"
                    type="text"
                    required
                  />
                </div>
                <div class="input-group2">
                  <label for="password">Contraseña:</label>
                  <input
                    class="userinput"
                    id="password"
                    name="password"
                    autocomplete="off"
                    type="password"
                    required
                  />
                </div>
              </div>
              <div className="columna">
                <div class="input-group2">
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

                <div class="input-group2">
                  <label for="password">Contraseña:</label>
                  <input
                    class="userinput"
                    id="password"
                    name="password"
                    autocomplete="off"
                    type="password"
                    required
                  />
                </div>
                <div class="input-group2">
                  <label for="cpassword">Confirmar Contraseña:</label>
                  <input
                    class="userinput"
                    id="cpassword"
                    name="cpassword"
                    autocomplete="off"
                    type="password"
                    required
                  />
                </div>
                <button class="submit2" type="submit">
                  Registrarse
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Theme />
    </>
  );
}
