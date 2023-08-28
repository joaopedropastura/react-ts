import React, { useState } from 'react';
import Calculadora from './components/calculadora';
import Counter from './components/counterAuto';
import Alert from './components/alert'
import TodoList from './components/todoList';
import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';


function App() {

  return (
    <>
      {/* <Calculadora/>
      <Counter.Counter/>
      <Counter.Counter2 setShow={setShow}/>
      <Alert show={show} setShow={setShow}/> */}

      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/sobre' element={<AboutPage />} />
        <Route path='*' element={<NotFoundPage />} /> */}
        <Route path='list' element={ <TodoList />} />
      </Routes>
     
    </>
  )
}

export default App;
