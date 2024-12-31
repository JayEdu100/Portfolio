const pronouns = [
    "he",
    "she",
    "it",
    "they",
    "we",
    "you",
    "I",
    "me",
    "us",
    "them"
];

const verbs = [
    "eat",
    "pick",
    "run",
    "jump",
    "write",
    "read",
    "sing",
    "dance",
    "swim",
    "play"
];

const fruitsAndVeggies = [
    "apple",
    "banana",
    "carrot",
    "broccoli",
    "grape",
    "orange",
    "spinach",
    "strawberry",
    "tomato",
    "cucumber"
];

const bundledObject = {
    pronouns: pronouns,
    verbs: verbs,
    fruitsAndVeggies: fruitsAndVeggies
};

function getRandomWord(type) {
    const randomIndex = Math.floor(Math.random() * bundledObject[type].length);
    return bundledObject[type][randomIndex];
}

function getRandomSentence() {
    const pronoun = getRandomWord("pronouns");
    const verb = getRandomWord("verbs");
    const fruitOrVeggie = getRandomWord("fruitsAndVeggies");

    return `${pronoun} ${verb}s a ${fruitOrVeggie}.`;
}

console.log(getRandomSentence());