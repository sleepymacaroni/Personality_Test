import { useState } from "react";

const questions = [
  {
    text: "I naturally take charge when a situation is unclear.",
    axis: "y",
    direction: 1 // initiative
  },
  {
    text: "My feelings can change my perspective quickly.",
    axis: "x",
    direction: 1 // emotionality
  },
  {
    text: "I usually set my own goals rather than waiting for guidance.",
    axis: "y",
    direction: 1 // initiative
  },
  {
    text: "I evaluate situations based on usefulness.",
    axis: "x",
    direction: -1 // practicality
  },
  {
    text: "I don’t feel pressured to constantly improve or push forward.",
    axis: "y",
    direction: -1 // complacence
  },
  {
    text: "I pick up on other people’s emotions easily.",
    axis: "x",
    direction: 1 // emotionality
  },
  {
    text: "I focus on efficiency when making decisions.",
    axis: "x",
    direction: -1 // practicality
  },
  {
    text: "I feel uncomfortable when nothing is moving forward.",
    axis: "y",
    direction: 1 // initiative
  },
  {
    text: "I tend to go along with group decisions rather than push my own.",
    axis: "y",
    direction: -1 // complacence
  },
  {
    text: "I don’t have a strong intuition.",
    axis: "x",
    direction: -1 // practicality
  },
  {
    text: "I tend to reflect on emotional experiences deeply.",
    axis: "x",
    direction: 1 // emotionality
  },
  {
    text: "I think mutual understanding is more important than correctness.",
    axis: "x",
    direction: 1 // emotionality
  },
  {
    text: "I tend to lead even in informal group settings.",
    axis: "y",
    direction: 1 // initiative
  },
  {
    text: "I enjoy having a familiar routine.",
    axis: "y",
    direction: -1 // complacence
  },
  {
    text: "When I don’t understand something, I attempt to figure it out myself first before consulting others.",
    axis: "y",
    direction: 1 // initiative
  },
  {
    text: "I feel fine not always being in control of outcomes.",
    axis: "y",
    direction: -1 // complacence
  },
  {
    text: "I like having clear systems and rules to follow.",
    axis: "x",
    direction: -1 // practicality
  },
  {
    text: "I try to minimize unnecessary emotional involvement in choices.",
    axis: "x",
    direction: -1 // practicality
  },
  {
    text: "I spend a lot of time thinking about how my actions might affect other people.",
    axis: "x",
    direction: 1 // emotionality
  },
  {
    text: "I avoid making impulsive decisions.",
    axis: "y",
    direction: -1 // complacence
  },
  {
    text: "I prefer doing something imperfectly over not doing it at all.",
    axis: "y",
    direction: 1 // initiative
  },
  {
    text: "I often rely on my intuition.",
    axis: "x",
    direction: 1 // emotionality
  },
  {
    text: "I find emotional arguments more effective than logical ones.",
    axis: "x",
    direction: 1 // emotionality
  },
  {
    text: "I prefer structured plans over spontaneous decisions.",
    axis: "y",
    direction: -1 // practicality
  },
  {
    text: "My emotions strongly influence my decisions.",
    axis: "x",
    direction: 1 // emotionality
  },
  {
    text: "I tend to act quickly once I know what I want.",
    axis: "y",
    direction: 1 // initiative
  },
  {
    text: "I avoid unnecessary change unless it feels important.",
    axis: "y",
    direction: -1 // complacence
  },
  {
    text: "I tend to separate emotion from decision-making when possible.",
    axis: "x",
    direction: -1 // practicality
  },
  {
    text: "I look to others (family, friends) for help making big decisions.",
    axis: "y",
    direction: -1 // complacence
  },
  {
    text: "I am comfortable letting others take the lead.",
    axis: "y",
    direction: -1 // complacence
  },
  {
    text: "I feel energized when I’m actively working toward something.",
    axis: "y",
    direction: 1 // initiative
  },
  {
    text: "I often wait before making decisions to see what happens.",
    axis: "y",
    direction: -1 // complacence
  },
  {
    text: "I often think about how things make me feel before anything else.",
    axis: "x",
    direction: 1 // emotionality
  },
  {
    text: "I prefer clear, logical solutions to abstract ideas.",
    axis: "x",
    direction: -1 // practicality
  },
  {
    text: "I like being in positions where I can influence outcomes.",
    axis: "y",
    direction: 1 // initiative
  },
  {
    text: "I feel emotions strongly, even in small situations.",
    axis: "x",
    direction: 1 // emotionality
  },
  {
    text: "I prefer stability over constant progression.",
    axis: "x",
    direction: 1 // emotionality
  },
  {
    text: "I prioritize what actually works over how it feels.",
    axis: "x",
    direction: -1 // practicality
  },
  {
    text: "I prefer things to unfold naturally without forcing direction.",
    axis: "y",
    direction: -1 // complacence
  },
  {
    text: "I think long-term results matter more than immediate feelings.",
    axis: "x",
    direction: -1 // practicality
  },
  {
    text: "I often initiate plans rather than waiting for others.",
    axis: "y",
    direction: 1 // initiative
  }
];

const options = [
  { label: "Strongly Disagree", value: -2 },
  { label: "Disagree", value: -1 },
  { label: "Neutral", value: 0 },
  { label: "Agree", value: 1 },
  { label: "Strongly Agree", value: 2 }
];

export default function Quiz() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const handleSelect = (qIndex, value) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setAttemptedSubmit(true);

    const firstMissing = answers.findIndex((a) => a === null);

    if (firstMissing !== -1) {
      alert("You didn’t answer all the questions.");

      const element = document.getElementById(`question-${firstMissing}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      return;
    }

    console.log("Answers:", answers);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="quiz-content">
        <h1>Results</h1>
        <p>We'll calculate your personality here...</p>
      </div>
    );
  }

  return (
    <div className="quiz-content">
      <h1 className="quiz-title">Personality Quiz</h1>

      {questions.map((question, qIndex) => (
        <div
          id={`question-${qIndex}`}
          key={qIndex}
          className={`question-row ${
            attemptedSubmit && answers[qIndex] === null ? "unanswered" : ""
          }`}
        >
          <p className="question-text">{question.text}</p>

          <div className="options-row">
            {options.map((opt) => (
              <button
                key={opt.label}
                className={`option-button ${
                  answers[qIndex] === opt.value ? "selected" : ""
                }`}
                onClick={() => handleSelect(qIndex, opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      ))}

      <button className="submit-button" onClick={handleSubmit}>
        See Results
      </button>

      <p className="extra-space">
         
      </p>
    </div>
  );
}