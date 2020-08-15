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

function App() {
  return (
    <BlogPostContainer id="1"/>
  );
}

export default App;
