import TestBox from './components/TestBox'
import LogInPage from './components/LogInPage'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element = {<TestBox />}></Route>
            <Route path='/logIn' element = {<LogInPage />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
