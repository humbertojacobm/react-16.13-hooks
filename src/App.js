import React from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './components/Example01'
import ComponentWithContext from './components/ComponentWithContext/ComponentWithContext'
import Counter from './components/Counter'
import TextInputWithFocusButton from './components/TextInputWithFocusButton'
import Comment from './components/HOC/Comment'
import CommentList from './components/HOC/CommentList'
import TextBlock from './components/HOC/TextBlock'
import BlogPostContainer from './components/HOC/BlogPost'
import MouseTracker from './components/RenderProps/MouseTracker'
import AppWithContext from './components/Context/AppWithContext'
import AppWithContext2 from './components/Context/AppWithContext2'
import AppMultiContext from './components/Context/ConsumingMultipleContext/AppMultiContext'
import {themes} from './components/Context/ConsumingMultipleContext/theme-context'
import FirstComponent from './components/refs-dom/01firstComponent'
import CustomTextInput from './components/refs-dom/02Example/CustomTextInput'

function App() {
  return (
    <CustomTextInput/>
  );
}

export default App;
