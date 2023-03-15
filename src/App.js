import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import RouterApp from './router/index';
import GlobalStyle from './style/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterApp />
    </>
  );
}

export default App;
