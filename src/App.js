import React, { useState } from 'react';

import TodoListContext from './contexts/TodoListContext';

import SignUp from './components/SignUp';

import Login from './components/Login';

import TodoList from './components/TodoList';

import './App.css';
import TodoListComponent from './components/TodoList';

function App() {

  // 상태 변수 선언

  // 회원 가입 버튼 열기/닫기 제어용 변수
  const [signUpView, setSignUpView] = useState(false);

  /* 로그인한 회원 정보를 저장 변수 */
  const [loginMember, setLoginMember] = useState(null);

  /* 로그인한 회원의 할 일 목록을 저장할 변수 */
  const [todoList, setTodoList] = useState([]);

  return (
   <TodoListContext.Provider value={ {loginMember, setLoginMember, todoList, setTodoList} }>
      {/* 버튼이 클릭 될 때 마다 signUpView 값을 변경(T/F) */}
      <button onClick={ () => { setSignUpView(!signUpView) } }>
        {signUpView ? ('회원 가입 닫기') : ('회원 가입 열기')}
      </button>

      {/* 회원 가입 컴포넌트 */}
      <div className='signup-wrapper'>
        {/* 존건식 && 결과 : 조건식이 true이면 결과 출력 */}
        {signUpView === true && (<SignUp/>)}
      </div>

      <h1>Todo List</h1>
      {/* 로그인 컴포넌트 */}
      <Login/>

      <hr/>

      {/* 로그인이 되어 있을 때 TodoList 컴포넌트 출력 */}
      { loginMember && <TodoList/> }

   </TodoListContext.Provider>
   
  );
}

export default App;
