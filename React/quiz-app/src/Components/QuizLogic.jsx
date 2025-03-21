import React, { useState } from 'react';
import { QuizData } from "../Data/QuizData";
import QuizResult from "./QuizResult";

function QuizLogic() {
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selOption, setSelOption] = useState(null); 
  const [showResult, setShowResult] = useState(false);
 
  const changeQuestion = () => {
    if (selOption !== null) {
      updateScore();
    }
    if (question < QuizData.length - 1) {
      setQuestion(question + 1);
      setSelOption(null); 
    } else {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    if (selOption === QuizData[question].answer) {
      setScore(score + 1);
    }
  };

  const resetAll = () => {
    setShowResult(false);
    setQuestion(0);
    setSelOption(null);
    setScore(0);
  };

  return (
    <div>
      <p className="heading-txt">Quiz App</p>
      <div className="container">
        {showResult ? (
          <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
        ) : (
          <>
            <div className="question">
              <span id='question-number'>{question + 1}. </span>
              <span id='question-txt'>{QuizData[question].question}</span>
            </div>
            <div className="option-container">
              {QuizData[question].options.map((option, i) => (
                <button
                  className={`option-btn ${selOption === i ? "checked" : ""}`}
                  key={i}
                  onClick={() => setSelOption(i)}  
                >
                  {option}
                  
                </button>
               
              ))}
            </div> 
            <input
              type="button"
              value="Next"
              id="next-button"
              onClick={changeQuestion}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default QuizLogic;
