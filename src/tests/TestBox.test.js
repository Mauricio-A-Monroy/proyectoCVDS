import { render, screen, fireEvent } from "@testing-library/react";
import TestBox from "../components/TestBox";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogInPage from '../components/LogInPage';

describe('TestBox component', () => {
    let article;
    let button;
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Routes>
                    <Route path='/' element = {<TestBox />}></Route>
                    <Route path='/logIn' element = {<LogInPage />}></Route>
                </Routes>
            </BrowserRouter>
        );
        article = screen.getByRole('article', { name: 'párrafo'});
        button = screen.getByRole('button', { name: 'Iniciar sesión'})
    });

    test('Caja de texto en el documento', () => {
        expect(article).toBeInTheDocument();
    });

    test('Cambiar a la página de "iniciar seción"', () => {
        fireEvent.click(button);
        expect(window.location.pathname).toBe('/logIn');
    });


});