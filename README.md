# React Quiz
A lightweight quiz which allows for inifinte questions created in React.
* [React](https://reactjs.org/)

### Requirements
* [Node.js](http://nodejs.org/) >= 8.0.0
* [Yarn](https://yarnpkg.com/en/docs/install)


A little project to help manage online Quizzes in the age of Coronavirus.

## Personalize the quiz
Update the title, date and category (comment out to remove) properties in the  `QuizHeader` Component in **/src/QuizDashboard.js** 

## Setting Questions & Answers
Update `src/Questions.js` with an array of question objects for each round.
Each Question object should have the following manadatory properties:
#### `q` The Question
#### `a` The Answer to the question

You can optionally add an image to each question by including the following properties:
#### `img` Object containing two properties: 
##### `src` for the img url and `showOnAnswer` (bool) to show the image only when 'Show Answers' is clicked

#### Example
`{  
    q: 'The question,  
    a: 'The Answer',  
    img: {  
        src: http://image.url,  
        showOnAnswer: false  
    }  
}`

## Adding Rounds
After adding the questions to Questions.js
- Import your new round. Add the name to the import on Ln 2 of QuizDashboard
- Add properties to `rounds` variable in QuizDashboard Ln 8 right at the top (increment the flag by one for each new round)