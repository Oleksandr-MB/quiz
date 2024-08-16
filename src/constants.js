//To be changed to a backend call

export const quizQuestions = {
questions : [
  {
    text: "Question 1",
    choices: [
      "A",
      "B",
      "C",
      "D",
    ],
    type: "multiple-choice",
    correctAnswer: "A",
  },
  
  {
    text: "Question 2",
    choices: [
      "A",
      "B",
      "C",
      "D",
    ],
    type: "multiple-choice",
    correctAnswer: "B",
  },

  {
    text: "Question 3",
    choices: [
      "A",
      "B",
      "C",
      "D",
    ],
    type: "multiple-choice",
    correctAnswer: "C",
  },

  {
    text: "Question 4",
    choices: [
      "A",
      "B",
      "C",
      "D",
    ],
    type: "multiple-choice",
    correctAnswer: "D",
  },

  {
    text: "Question 5",
    type: "open",
    correctAnswer: "E",
  },
],
};

export const quizTopics = { topics : ["Topic 1", "Topic 2", "Topic 3", "Topic 4", "Topic 5"] };

export const resultInitalState = {
  score: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
};