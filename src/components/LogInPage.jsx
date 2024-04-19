import React from 'react';

const LogInPage = () => {
    return (
        <div>
            <h1>Iniciar Sesión</h1>
            {/* Aquí puedes agregar el formulario de inicio de sesión */}
            <form>
                <label htmlFor="username">Nombre de usuario:</label>
                <input type="text" id="username" name="username" />
                <label htmlFor="password">Contraseña:</label>
                <input type="password" id="password" name="password" />
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
}

export default LogInPage;
