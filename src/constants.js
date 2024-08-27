import questions from "./database.json";

const topics = Array.from(new Set(questions.map((question) => question.topic)));
const subTopics = Array.from(new Set(questions.map((question) => question.subTopic)));

export { questions, topics, subTopics };
