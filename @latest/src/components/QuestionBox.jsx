import React, { useState } from "react";
import questions from "../questions";

export default function QuestionBox(props) {
  const [highlighted, setHighlighted] = useState(false);
  const [highlightButtonDisabled, setHighlightButtonDisabled] = useState(false);
  const [num, setNum] = useState(0);
  const { darkmode, setDarkMode } = props;

  const toggleDarkMode = () => {
    setDarkMode(!darkmode);
  };

  const handleHighlight = () => {
    setHighlighted(true);
    setHighlightButtonDisabled(true);
  };

  const handleRemoveHighlight = () => {
    setHighlighted(false);
    setHighlightButtonDisabled(false);
  };

  const questionColor = highlighted ? "#D4514C" : "black";
  const containerStyle = darkmode ? { background: "#22668D", color: "rgb(255,255,255)" } : {};

  const next = (selectedOptionId) => {
    checkAnswer(selectedOptionId);

    if (num === questions.length - 1) {
      props.onQuizCompletion();
    } else {
      setNum((prevnum) => prevnum + 1);
      setHighlighted(false);
      setHighlightButtonDisabled(false);
    }
  };

  const checkAnswer = (selectedOptionId) => {
    const correctAnswerId = questions[num].options.findIndex((option) => option.isCorrect);
    const isCorrect = selectedOptionId === correctAnswerId;

    if (isCorrect) {
      props.setScore((prevScore) => prevScore + 1);
    }
  };

  return (
    <>
      <div className='app' style={containerStyle}>
        <div className='header'>
          <h1 style={containerStyle}>Kalvium</h1>
          <button className='Dmode' onClick={toggleDarkMode}>
            {darkmode ? "Light mode" : "Dark mode"}
          </button>
        </div>
        <div className='Q-box'>
          <p className='Qno'>Question {[num + 1]} out of 5</p>
          <p className='Q' style={{ color: questionColor }}>
            {questions[num].text}
          </p>

          <div className='opts'>
            {questions[num].options.map((option) => (
              <button key={option.id} className='options' onClick={() => next(option.id)}>
                {option.text}
              </button>
            ))}
          </div>

          <div className='btns'>
            <button className='btn' onClick={handleHighlight} disabled={highlightButtonDisabled}>
              Highlight
            </button>
            <button className='btn' onClick={handleRemoveHighlight}>
              Remove Highlight
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
