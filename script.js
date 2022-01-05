const CORRECT_ANSWER = 10;
const INCORRECT_ANSWER = 0;
const survey = [
    {
        question: 'Сколько будет 2+2?',
        answer: '4',
        type: prompt,
    },
    {
        question: 'Солнце встает на востоке?',
        answer: 'true',
        type: confirm,
    },
    {
        question: 'Сколько будет 5 / 0?',
        answer: 'infinity',
        type: prompt,
    },
    {
        question: 'Какого цвета небо?',
        answer: 'голубого',
        type: prompt,
    },
    {
        question: 'Как правильный ответ на «Главный вопрос жизни, вселенной и всего такого',
        answer: '42',
        type: prompt,
    },
];

runSurvey(survey);

function runSurvey(surveyQuestions) {
    let score = 0;

    surveyQuestions.map((question) => {
        score += getUserAnswer(question) === question.answer ? CORRECT_ANSWER : INCORRECT_ANSWER
    });

    showResult(score);
}

function getUserAnswer({ question, type }) {
    return type(question);
}

function showResult(score) {
    alert(`Ваша оценка ${score}`);
}