import { useNavigate } from "react-router-dom";

const TestBox = () => {
    const navigator = useNavigate();

    function logInPage(){
        navigator('/logIn')
    }

    return <div>
        <article title="párrafo"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, consequatur!
        </article>
        <button onClick={logInPage}>Iniciar sesión</button>
    </div>
}

export default TestBox;