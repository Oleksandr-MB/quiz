import questions from "./database.json";

const topicsMap = new Map();

questions.forEach(qstn => {
    if (!topicsMap.has(qstn.topic))
        topicsMap.set(qstn.topic, new Set());
    topicsMap.get(qstn.topic).add(qstn.subTopic);
});

topicsMap.forEach((subTopics, topic) => {
    topicsMap.set(topic, Array.from(subTopics));
});

export { questions, topicsMap };
