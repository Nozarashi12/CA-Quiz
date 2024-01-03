import React, { useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";

function App() {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [darkmode, setDarkMode] = useState(false);

  const handleQuizCompletion = () => {
    setQuizCompleted(true);
  };

  return (
    <div>
      {!quizCompleted ? (
        <QuestionBox
          onQuizCompletion={handleQuizCompletion}
          setScore={setScore}
          darkmode={darkmode}
          setDarkMode={setDarkMode}
        />
      ) : (
        <Result darkmode={darkmode} score={score} />
      )}
    </div>
  );
}

export default App;
