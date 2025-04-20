"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import styles from "@/styles/Quiz.module.css";

export default function Quiz({ type, questionNumber, question, options = [], correctAnswer, feedback, explanation }) {
    const [userInput, setUserInput] = useState(
        type === "mcq" ? null : ""
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        const correctToast = "Question " + questionNumber + " is Correct!";

        if (type === "mcq") {
            if (userInput === null) {
                const tId =  questionNumber + "toast"
                toast.info("Please select an option for Question " + questionNumber + ".", {toastId: tId});
                return;
            }
            const tId = questionNumber + "Toast" + userInput;
            const selectedIndex = options.indexOf(userInput); // 0-based index
            const correctIndex = parseInt(correctAnswer, 10) - 1;

            if (selectedIndex === correctIndex) {
                const correctToast = `Question ${questionNumber}: Option ${selectedIndex + 1} is Correct!`;
                toast.success(
                    <div>
                        <p className={styles.toastLabel}>{ correctToast }</p>
                    </div>, {toastId: tId});
            } 
            else {
                const wrongKey = (selectedIndex + 1).toString();
                const incorrectToast = "❌ Question " + questionNumber + ": Option " + String(selectedIndex + 1) + " is Incorrect";
                if (feedback && feedback[wrongKey]) {
                    const explanation = feedback[wrongKey];
                    toast.error(
                        <div>
                            <div className={styles.toastContent}>
                                <p className={styles.toastLabel}>{ incorrectToast }</p>
                                <p className={styles.explanation}>{ explanation }</p>
                            </div>
                        </div>
                    , {autoClose: 15000, toastId: tId});
                }
                else {
                    toast.error(incorrectToast, {toastId: tId});
                }

            }
        }
        else if (type === "short") {
            const incorrectToast = "❌ Question " + questionNumber + " is Incorrect";
            if (userInput.trim() === "") {
                const tId =  questionNumber + "toast";
                toast.info("Please select your answer for Question " + questionNumber + ".", {toastId: tId});
                return;
            }
            const tId = questionNumber + "Toast" + userInput;
            const acceptableAnswers = Array.isArray(correctAnswer)
                ? correctAnswer
                : [correctAnswer];
            const preferredAnswer = Array.isArray(correctAnswer)
                ? correctAnswer[0]
                : correctAnswer;
              

            const isCorrect = acceptableAnswers.some(
                (ans) => ans.trim().toLowerCase() === userInput.trim().toLowerCase()
            );

            if (isCorrect) {
                toast.success(correctToast, {toastId: tId});
            } 
            else {
                if (explanation) {
                    toast.error(
                        <div>
                            <div className={styles.toastContent}>
                                <p className={styles.toastLabel}>{ incorrectToast }</p>
                                <p className={styles.explanation}><strong>Correct Answer: { preferredAnswer }</strong></p>
                                <p style={{marginTop: "0.25rem"}}>{ explanation }</p>
                            </div>
                        </div>
                    , {autoClose: 15000, toastId: tId});
                }  
                else {
                    toast.error(incorrectToast, {toastId: tId});
                }
            }
        }
};

  return (
    <form onSubmit={handleSubmit} className={styles.quizBox}>
      <p className={styles.question}>
        <strong>📝 Question {questionNumber}:</strong> {question}
      </p>

      {type === "mcq" ? (
        <ul className={styles.options}>
          {options.map((option, index) => (
            <li key={index}>
              <label className={styles.optionItem}>
                <input
                  type="radio"
                  name="quiz"
                  value={option}
                  checked={userInput === option}
                  onChange={() => setUserInput(option)}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
      ) : (
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className={styles.textInput}
          placeholder="Type your answer here..."
        />
      )}

      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
}
