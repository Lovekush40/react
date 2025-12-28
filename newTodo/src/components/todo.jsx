import React from 'react'
import {createSelector, useDispatch} from "@reduxjs/toolkit";


function todo() {

const todos = createSelector(store => store.todos)
const dispatch = useDispatch()

  return (
    <>
        <ul>
             todos.map((todo) => (
                <li
                key = {todo.id}></li>
             ))
        </ul>
    </>
  )
}

export default todomega