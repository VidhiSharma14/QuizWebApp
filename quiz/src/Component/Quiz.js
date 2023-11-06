import React, { useState } from 'react'
import { Question } from '../Data/Question'
import Result from './Result';
function Quiz() {
    const [currentQuestion,SetCurrentQuestion]=useState(0);
    const [score,SetScore]= useState(0);
    const [clicked, SetClicked]=useState(0);
    const resetAll=()=>{
        SetShowResult(false);
        SetCurrentQuestion(0);
        SetClicked(0);
        SetScore(0);

    }
    const[showResult,SetShowResult]= useState(false);
    const changeQuestion =() =>{
        updateScore();
        if(currentQuestion<Question.length-1){
        SetCurrentQuestion(currentQuestion+1);
        SetClicked(0);
    }else{
        SetShowResult(true)
    }
}
const updateScore=()=>{
    if(clicked === Question[currentQuestion].answer){
        SetScore(score+1);
    }
}
  return (
    <div>
     <p className="heading-txt">QuizMaker</p>
     < div className="container">
        {showResult? (
            <Result score = {score} totalScore ={Question.length} tryAgain={resetAll}/>
        ):(
            <>
      <div className='question'>
      <span id ="question-number">{currentQuestion+1}.</span>
      <span id = "question-txt">{Question[currentQuestion].question}</span></div>
      <div className='option-container'>
       {Question[currentQuestion].options.map((Option,i)=>{
        return (
            <button className={`option-btn ${
                clicked == i+1?"checked":null}`}
            key={i}
            onClick ={()=> SetClicked(i+1)} 
            >
               
            {Option}
            </button>
        )
       })}
      </div>
      
      <input type='button' value="Next" id ="next-button" onClick={changeQuestion}></input>
      </>
       )
    }
      </div>
      </div>
     
    
  )
}

export default Quiz
