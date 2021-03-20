var quiz = {
  // (A) PROPERTIES
  // (A1) QUESTIONS & ANSWERS
  // Q = QUESTION, O = OPTIONS, A = CORRECT ANSWER
  data: [
  {
    q : "What is your favorite size dick?",
    o : [
      "thick",
      "big",
      "long",
      "medium",
      "small"
    ],
    a : 1 // arrays start with 0, so answer is 70 meters
  },
  {
    q : "How many men made you get an orgasm?",
    o : [
      "0",
      "1",
      "2",
      "3",
      "more than 3"
    ],
    a : 1 // arrays start with 0, so answer is 70 meters
  },
  {
    q : "When was the last time you masturbated?",
    o : [
      "today",
      "this week",
      "last week",
      "last month",
      "6 months ago",
      "last year",
      "3 years ago",
      "5 years ago",
      "10 years ago",
    ],
    a : 1 // arrays start with 0, so answer is 70 meters
  },
  {
    q : "Do you like blowjob?",
    o : [
      "yes",
      "no",
    ],
    a : 1 // arrays start with 0, so answer is 70 meters
  },
  {
    q : "When was the last time you did blowjob?",
    o : [
      "today",
      "this week",
      "last week",
      "last month",
      "6 months ago",
      "last year",
      "3 years ago",
      "5 years ago",
      "10 years ago",
    ],
    a : 1 // arrays start with 0, so answer is 70 meters
  },
  {
    q : "Have you ever used toysex?",
    o : [
      "yes",
      "no",
    ],
    a : 1 // arrays start with 0, so answer is 70 meters
  },
  {
    q : "Do you like cunnilingus?",
    o : [
      "yes",
      "no",
    ],
    a : 1 // arrays start with 0, so answer is 70 meters
  },
  {
    q : "Does your ex-partner has a bigger dick than your current partner?",
    o : [
      "yes",
      "no",
    ],
    a : 1 // arrays start with 0, so answer is 70 meters
  },
  {
    q : "What is your partner's size dick?",
    o : [
      "thick",
      "big",
      "long",
      "medium",
      "small"
    ],
    a : 1 // arrays start with 0, so answer is 70 meters
  },
  {
    q : "What is your favorite sex position?",
    o : [
      "Missionary",
      "doggystyle",
      "cowgirl",
      "G-Whiz",
    ],
    a : 1 // arrays start with 0, so answer is 70 meters
  },
  {
    q : "Have you ever masturbated while you were thinking in your ex?",
    o : [
      "yes",
      "no",
    ],
    a : 1 // arrays start with 0, so answer is 70 meters
  },
  {
    q : "Did you feel a lot of pain when he was putting the head of his dick?",
    o : [
      "yes",
      "no",
    ],
    a : 1 // arrays start with 0, so answer is 70 meters
  },
  {
    q : "Did you feel a lot of pain when he was putting the head of his dick?",
    o : [
      "yes",
      "no",
    ],
    a : 1 // arrays start with 0, so answer is 70 meters
  },
  ],

  // (A2) HTML ELEMENTS
  hWrap: null, // HTML quiz container
  hQn: null, // HTML question wrapper
  hAns: null, // HTML answers wrapper

  // (A3) GAME FLAGS
  now: 0, // current question
  score: 0, // current score

  // (B) INIT QUIZ HTML
  init: function(){
    // (B1) WRAPPER
    quiz.hWrap = document.getElementById("quizWrap");

    // (B2) QUESTIONS SECTION
    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);

    // (B3) ANSWERS SECTION
    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);

    // (B4) GO!
    quiz.draw();
  },

  // (C) DRAW QUESTION
  draw: function(){
    // (C1) QUESTION
    quiz.hQn.innerHTML = quiz.data[quiz.now].q;

    // (C2) OPTIONS
    quiz.hAns.innerHTML = "";
    for (let i in quiz.data[quiz.now].o) {
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "quiz";
      radio.id = "quizo" + i;
      quiz.hAns.appendChild(radio);
      let label = document.createElement("label");
      label.innerHTML = quiz.data[quiz.now].o[i];
      label.setAttribute("for", "quizo" + i);
      label.dataset.idx = i;
      label.addEventListener("click", quiz.select);
      quiz.hAns.appendChild(label);
    }
  },

  // (D) OPTION SELECTED
  select: function(){
    // (D1) DETACH ALL ONCLICK
    let all = quiz.hAns.getElementsByTagName("label");
    for (let label of all) {
      label.removeEventListener("click", quiz.select);
    }

    // (D2) CHECK IF CORRECT
    let correct = this.dataset.idx == quiz.data[quiz.now].a;
    if (correct) {
      quiz.score++;
      this.classList.add("correct");
    } else {
      this.classList.add("wrong");
    }

    // (D3) NEXT QUESTION OR END GAME
    quiz.now++;
    setTimeout(function(){
      if (quiz.now < quiz.data.length) { quiz.draw(); }
      else {
        quiz.hQn.innerHTML = `You are 60% horny.`;
        quiz.hAns.innerHTML = "";
      }
    }, 1000);
  }
};
window.addEventListener("load", quiz.init);
