import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Quiz from './components/!quiz.jsx'
import { quizQuestions, quizTopics } from "./constants";

ReactDOM.createRoot(document.getElementById('root')).render(<Quiz questions = {quizQuestions.questions} topics = {quizTopics.topics}/>);