import { useNavigate } from "react-router-dom";

const TestBox = () => {
    const navigator = useNavigate();

    function logInPage(){
        navigator('/logIn')
    }

    return <div>
        <article title="párrafo"> PROYECTO CVDS :D
        </article>
        <button onClick={logInPage}>Iniciar sesión</button>
    </div>
}

export default TestBox;