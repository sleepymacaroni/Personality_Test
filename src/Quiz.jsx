import personalityMap from "./assets/personality-map-standard.png";
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

const types = [
  { name: "The Bull", x: -35, y: 35 },
  { name: "The Cheetah", x: 0, y: 25 },
  { name: "The Butterfly", x: 35, y: 35 },
  { name: "The Beaver", x: -15, y: 15 },
  { name: "The Kite", x: 15, y: 15},
  { name: "The Stone", x: 0, y: 0},
  { name: "The Cookie Cutter", x: -25, y: 0},
  { name: "The Mirror", x: 25, y: 0},
  { name: "The Jellyfish", x: -15, y: -15},
  { name: "The Elephant", x: 15, y: -15},
  { name: "The Kelp", x: -35, y: -35},
  { name: "The Acrobat", x: 35, y: -35},
  { name: "The Heron", x: 0, y: -25}
];

export default function Quiz() {
  const [answers, setAnswers] = useState(
    Array(questions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(null);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  // scaling for map coordinate system
  const scale = 40;

  const toPercent = (value) => {
    return ((value + scale) / (2 * scale)) * 100;
  };

  const calculateResults = () => {
    let x = 0;
    let y = 0;

    answers.forEach((value, i) => {
      const q = questions[i];

      if (q.axis === "x") {
        x += value * q.direction;
      } else if (q.axis === "y") {
        y += value * q.direction;
      }
    });

    return {
      x, y
    };
  };

const getClosestType = (x, y) => {
  let closest = null;
  let smallestDistance = Infinity;

  types.forEach((type) => {
    const dx = x - type.x;
    const dy = y - type.y;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < smallestDistance) {
      smallestDistance = distance;
      closest = type;
    }
  });

  return closest;
};

  // answer selection
  const handleSelect = (qIndex, value) => {
    const updated = [...answers];
    updated[qIndex] = value;
    setAnswers(updated);
  };

  // submit logic
  const handleSubmit = () => {
    setAttemptedSubmit(true);

    const firstMissing = answers.findIndex((a) => a === null);

    if (firstMissing !== -1) {
      alert("You didn’t answer all the questions.");

      const el = document.getElementById(`question-${firstMissing}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      return;
    }

    const result = calculateResults();
    setSubmitted(result);
  };

  // RESULTS SCREEN
  if (submitted) {
    const closestType = getClosestType(submitted.x, submitted.y);
  return (
    <div className="results-page">
      <h1 className="results-title">Results</h1>

      <div className="map-wrapper">
        <img
          src={personalityMap}
          alt="Personality map"
          className="methodology-image"
        />

        <div
          className="dot"
          style={{
            left: `${toPercent(submitted.x)}%`,
            top: `${100 - toPercent(submitted.y)}%`
          }}
        />
      </div>

      <p className="result-type">
        You are: <strong>{closestType.name}</strong>
      </p>
    </div>
  );
}

  // QUIZ SCREEN
  return (
    <div className="quiz-content">
      <h1 className="page-title">Personality Quiz</h1>

      {questions.map((question, qIndex) => (
        <div
          id={`question-${qIndex}`}
          key={qIndex}
          className={`question-row ${
            attemptedSubmit && answers[qIndex] === null
              ? "unanswered"
              : ""
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
    </div>
  );
}