import React, {useState, useEffect, useReducer} from 'react';
function todosReducer (state,action){
    switch (action.type){
        case 'add':
            return [...state,
                        {
                            text: action.text,
                            completed: false
                        }
            ];

        default:
            return state;
    }
}

function Todos(){
    const [todos, dispatch] = useReducer(todosReducer, []);
    function handleAddClick(text){
        dispatch({type: 'add', text})
    }
}