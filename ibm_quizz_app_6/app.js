angular.module('quizApp', [])
.controller('QuizController', function() {
  var vm = this;

  vm.questions = [
    {
      question: "What is the capital of France?",
      choices: ["London", "Paris", "Berlin", "Rome"],
      correctAnswer: "Paris"
    },
    {
      question: "What is the largest planet in the solar system?",
      choices: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Jupiter"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      choices: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
      correctAnswer: "William Shakespeare"
    }
  ];

  vm.score = 0;
  vm.currentQuestion = null;
  vm.currentIndex = 0;

  vm.loadQuestion = function() {
    vm.currentQuestion = vm.questions[vm.currentIndex];
  };

  vm.selectAnswer = function(choice) {
    if (choice === vm.currentQuestion.correctAnswer) {
      vm.score++;
    }
    vm.nextQuestion();
  };

  vm.nextQuestion = function() {
    vm.currentIndex++;
    if (vm.currentIndex < vm.questions.length) {
      vm.loadQuestion();
    } else {
      // Quiz completed
      vm.questions = [];
    }
  };

  // Initialize the quiz
  vm.loadQuestion();
});
