<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>race game</title>
    <style>
        html {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        #title {
            display: flex;
            align-items: center;
            flex-direction: column;
            width: 100%;
            margin-top: 2rem;
        }

        #boardPlayer1,
        #boardPlayer2 {
            width: 100px;
            height: 100px;
        }

        div>* {
            text-align: center;
        }

        table {
            margin: 4rem auto;
        }

        td {
            height: 80px;
            width: 80px;
            border: 1px solid blue;

        }

        .racer_table td.active {
            background-repeat: no-repeat;
            background-size: 100%;
        }

        #finish {
            background-image: url('images/finish.png');

        }

        #player1,
        #player2 {
            display: flex;
            flex-flow: row wrap;
            padding: 0.3rem;
        }

        #player1 .activeClass {
            background-repeat: no-repeat;
            background-image: url('images/Pasted_image_at_2018-08-14__11_16_AM.png');
            background-size: 80px;
            background-position: bottom;
        }

        #player2 .activeClass {
            background-repeat: no-repeat;
            background-image: url('images/player_1.png');
            background-size: 80px;
            background-position: bottom;
        }

        .inactive {
            background-repeat: no-repeat;
            background-image: none;
            background-size: 80px;
        }

        .question {
            background-image: url('images/icons8-signo-de-interrogación-96.png');
            background-size: 100% 100%;
            background-position: center;
        }


        @keyframes animation-Question {
            0% {

                background-size: 100% 100%;
            }
            50% {
                background-size: 110% 110%;
                background-position: center;
            }
            100% {
                background-size: 100% 100%;
            }
        }

        .movingQuestion {
            animation: animation-Question 1s infinite;
            animation-iteration-count: 4;

        }
    </style>
</head>

<body>
    <div id="title">
        <h2>Race Game</h2>
        <h4>Use the arrows "right" and "left" for the blue car and the keys "w" and "e" for the red car.
            <br> The correct answer for all the questions is 'yes'. Very easy. If you are wrong, you ll go back one step.
            <br> It is also possible to go back voluntary... but it makes no sense if you want to win, isn't?.
            <br> Ah! and your scores are saved into the local storage for the next time. Enjoy the game!</h4>
        <div style="display:flex; justify-content: space-around; width: 60%; flex-direction: row;">
            <div id="boardPlayer1">
                <h3>Score Player 1</h3>
                <div id="scorePlayer1"></div>

            </div>
            <div id="boardPlayer2">
                <h3>Score Player 2</h3>
                <div id="scorePlayer2"></div>

            </div>
        </div>
    </div>


    <table class=“racer_table”>
        <tr id="player1">
            <td class="activeClass"></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="question">
                <div id="scorePopUp" style="opacity: 0; position: relative; bottom: 0; width: 80px; height: 80px; background-color:darkgoldenrod; border-radius: 50%;">
                    <div style="position: relative; color: yellow; top: 10px; font-size: 1.3rem;">1
                        <br>Point</div>
                </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="question"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td id="finish"></td>

        </tr>
        <tr id="player2">
            <td class="activeClass"></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="question"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="question"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td id="finish"></td>

        </tr>
    </table>

    <div id="result" style="opacity:0;"></div>

    <script>
        let score1 = localStorage.getItem('score1') || "0";
        let score2 = localStorage.getItem('score2') || "0";

        console.log(score1);
        console.log(score2);

        const fieldsPlayer1 = document.querySelectorAll('#player1 td');
        const fieldsPlayer2 = document.querySelectorAll('#player2 td');
        const questionMark = document.querySelectorAll('.question');
        const scorePlayerOne = document.querySelector('#scorePlayer1');
        const scorePlayerTwo = document.querySelector('#scorePlayer2');

        const result = document.getElementById('result');


        /////////////////////questions array. The only correct answer for every question is 'yes'/////////////////////

        let questionsArray = [
            "What is JavaScript?",
            "Name some of the JavaScript features.",
            "What are the advantages of using JavaScript?",
            "What are disadvantages of using JavaScript?",
            "Is JavaScript a case-sensitive language?",
            "How can you create an Object in JavaScript?",
            "How can you read properties of an Object in JavaScript?",
            "How can you create an Array in JavaScript?",
            "How to read elements of an array in JavaScript?",
            "What is a named function in JavaScript? How to define a named function?",
            "How many types of functions JavaScript supports?",
            "How to define a anonymous function?",
            "Can you assign a anonymous function to a variable?",
            "Can you pass a anonymous function as an argument to another function?",
            "What is arguments object in JavaScript?",
            "How can you get the type of arguments passed to a function?",
            "How can you get the total number of arguments passed to a function?",
            "How can you get the reference of a caller function inside a function?",
            "What is the purpose of 'this' operator in JavaScript?",
            "What are the valid scopes of a variable in JavaScript?",
            "Which type of variable among global and local, takes precedence over other if names are same?",
            "What is callback?",
            "What is closure?",
            "Give an example of closure?",
            "Which built-in method returns the character at the specified index?",
            "Which built-in method combines the text of two strings and returns a new string?",
            "Which built-in method calls a function for each element in the array?",
            "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
            "Which built-in method returns the length of the string?",
            "Which built-in method removes the last element from an array and returns that element?",
            "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
            "Which built-in method reverses the order of the elements of an array?",
            "Which built-in method sorts the elements of an array?",
            "Which built-in method returns the characters in a string beginning at the specified location?",
            "Which built-in method returns the calling string value converted to lower case?",
            "Which built-in method returns the calling string value converted to upper case?",
            "Which built-in method returns the string representation of the number's value?",
            "What are the variable naming conventions in JavaScript?",
            "How typeof operator works?",
            "What typeof returns for a null value?",
            "Can you access Cookie using javascript?",
            "How to create a Cookie using JavaScript?",
            "How to read a Cookie using JavaScript?",
            "How to delete a Cookie using JavaScript?",
            "How to redirect a url using JavaScript?",
            "How to print a web page using javascript?",
            "What is Date object in JavaScript?",
            "What is Number object in JavaScript?",
            "How to handle exceptions in JavaScript?",
            "What is purpose of onError event handler in JavaScript?"
        ];

        let clicks1 = 0;
        let clicks2 = 0;

        /////////////////////player one///////plays with the right and left arrows////////////////////////////////////////////////


        document.addEventListener('keyup', (event) => {

            if (event.key == "ArrowRight") {
                clicks1 += 2;
                const keyName = event.key;
                console.log(clicks1);
                // console.log('keyup event\n\n' + 'key: ' + keyName);


                fieldsPlayer1.forEach(field => {
                    if (field.className === "activeClass") {
                        field.setAttribute('class', 'inactive');
                        field.parentNode.childNodes[1 + clicks1].setAttribute('class', 'activeClass');
                        ((clicks1 == 8) || (clicks1 == 48)) ? callOneQuestionPlayer1() : console.log("you drive" + clicks1 + "km");
                        (clicks1 == 16) ? changeDoneStatus() : null;
                        // (clicks1 == 48) ? changeDoneStatus() : null;
                        clicks1 == 58 ? endGamePlayer1() : null;

                    }

                });



            }
            if (event.key == "ArrowLeft") {
                clicks1 -= 2;
                const keyName = event.key;
                console.log('keyup event\n\n' + 'key: ' + keyName);
                fieldsPlayer1.forEach(field => {

                    if (field.className == "activeClass") {

                        console.log(field);
                        console.log(field.parentNode.childNodes[1 + clicks1]);
                        field.setAttribute('class', 'inactive');
                        field.parentNode.childNodes[1 + clicks1].setAttribute('class', 'activeClass');

                    }

                });

            }
            const keyName = event.key;
            console.log('keyup event\n\n' + 'key: ' + keyName);
        });

        ///////////////////////////////player two//////////////plays with the "w" and "e" keys///////////////////////////////////////


        document.addEventListener('keyup', (event) => {

            if (event.key == "e") {
                clicks2 += 2;
                const keyName = event.key;
                // console.log('keyup event\n\n' + 'key: ' + keyName);
                fieldsPlayer2.forEach(field => {
                    if (field.className == "activeClass") {

                        console.log(field.parentNode.childNodes[1 + clicks2]);
                        field.setAttribute('class', 'inactive');
                        field.parentNode.childNodes[1 + clicks2].setAttribute('class', 'activeClass');

                        ((clicks2 == 8) || (clicks2 == 48)) ? callOneQuestionPlayer2() : console.log("you drive" + clicks1 + "km");
                        clicks2 == 16 ? changeDoneStatus() : null;
                        // (clicks2 == 48) ? changeDoneStatus() : null;
                        clicks2 == 58 ? endGamePlayer2() : console.log("you drive" + clicks1 + "km");
                    }

                });

            }
            if (event.key == "w") {
                clicks2 -= 2;
                const keyName = event.key;
                console.log('keyup event\n\n' + 'key: ' + keyName);
                fieldsPlayer2.forEach(field => {
                    if (field.className == "activeClass") {

                        console.log(field.parentNode.childNodes[1 + clicks2]);
                        field.setAttribute('class', 'inactive');
                        field.parentNode.childNodes[1 + clicks2].setAttribute('class', 'activeClass');

                    }

                });

            }
            const keyName = event.key;
            console.log('keyup event\n\n' + 'key: ' + keyName);
        });


        ////////////////////////////////ask random question/////////////////////////////////////////


        let done1 = false;
        let done2 = false;

        ///////////we need to fix the problem that the prompt appears twice//////////////////


        function callOneQuestionPlayer1() {
            if (!done1) {
                done1 = true;
                askRandomQuestion();
            }

        }



        function callOneQuestionPlayer2() {
            console.log('working2');
            if (!done2) {
                done2 = true;
                askRandomQuestion();
            }
        }

        function stepBack1() {
            console.log('working1');

            fieldsPlayer1.forEach(field => {

                if (field.className == "activeClass") {
                    field.setAttribute('class', 'inactive');
                    field.previousElementSibling.previousElementSibling.setAttribute('class', 'activeClass');
                    field.setAttribute('class', 'question');
                    console.log(field, clicks1);
                    console.log(field.previousElementSibling);
                }

            });
            done1 = false;
        }

        function stepBack2() {
            console.log('working2');
            fieldsPlayer2.forEach(field => {

                if (field.className == "activeClass") {
                    field.setAttribute('class', 'inactive');
                    field.previousElementSibling.previousElementSibling.setAttribute('class', 'activeClass');
                    field.setAttribute('class', 'question');
                    console.log(field, clicks1);
                    console.log(field.previousElementSibling);

                }

            });

            done2 = false;
        }


        ///////////function to change the done boolean to false, otherwise the second question will no occurs////////////
        ///////////we remove the congratulations text from our result////////////////////////////////////////////////////

        function changeDoneStatus() {
            console.log(done1, done2);
            done1 = false;
            done2 = false;
            result.style.opacity = "0";
        }

        const congratulationsPopUp = document.createElement('div');

        function scoreOne() {

            scorePlayerOne.innerHTML = `
            <h2 style="font-size: 2rem; color: blue;">${score1}</h2>`;
            localStorage.setItem('score1', score1);

        }
        function scoreTwo() {

            scorePlayerTwo.innerHTML = `
            <h2 style="font-size: 2rem; color: red;">${score2}</h2>`;
            localStorage.setItem('score2', score2);

        }

        /////////we call the scores once at the beginning to retrieve the local storage date///////
        scoreOne();
        scoreTwo();


        function askRandomQuestion(min, max) {
            min = 0;
            max = questionsArray.length;
            let index = Math.floor(Math.random() * (max - min) + min);
            let solution = prompt(questionsArray[index]);

            if ((solution != null) && (solution === 'yes') && (solution != "")) {

                result.innerHTML = "congratulations! your answer was correct";
                result.style.fontSize = "3rem";
                result.style.width = "100%";
                result.style.color = "blue";
                result.style.textAlign = "center";
                result.style.opacity = "1";
                result.style.transform = "rotate(360deg)";
                result.style.transition = "all 1s cubic-bezier(0.84, 0.08, 0.28, 1.08)";
                if (done1 == true) {
                    score1++;
                    ////  starting to create a score pop up////
                    // let popUp = document.querySelector("#scorePopUp");
                    // console.log(popUp);
                    // popUp.style.transform = "translateY(-120px)";
                    // popUp.style.transition = "1s ease-out";
                    // popUp.style.opacity = "1";
                    scoreOne();
                }
                if (done2 == true) {
                    score2++;
                    scoreTwo();
                }

            } else {
                result.innerHTML = "sorry! your answer was incorrect";
                result.style.fontSize = "3rem";
                result.style.width = "100%";
                result.style.color = "red";
                result.style.textAlign = "center";
                result.style.opacity = "1";

                if (done1 == true) {
                    stepBack1();
                    if (clicks1 == 8) {
                        questionMark[0].classList += " movingQuestion";
                        clicks1 = 4;
                    }
                    if (clicks1 == 48) {
                        questionMark[1].classList += " movingQuestion";
                        clicks1 = 44;
                    }
                }
                if (done2 == true) {
                    stepBack2();
                    if (clicks2 == 8) {
                        questionMark[2].classList += " movingQuestion";
                        clicks2 = 4;
                    }
                    if (clicks2 == 48) {
                        questionMark[3].classList += " movingQuestion";
                        clicks2 = 44;
                    }

                }


            }
        }




        //////////////////////end game//////////////////////////////////////////////////


        var audio = new Audio('audio/Cheering-SoundBible.com-1115515042.mp3');

        function endGamePlayer1() {
            // alert("player one wins!");
            result.innerHTML = "player one wins!";
            result.style.fontSize = "3rem";
            result.style.width = "100%";
            result.style.color = "blue";
            result.style.textAlign = "center";
            result.style.opacity = "1";
            result.style.transform = "rotate(360deg)";
            result.style.transition = "all 1s cubic-bezier(0.84, 0.08, 0.28, 1.08)";
            audio.play();
            setTimeout(function () { location.reload(); }, 3200);

        }
        function endGamePlayer2() {
            // alert("player two wins!");
            result.innerHTML = "player two wins!";
            result.style.fontSize = "3rem";
            result.style.width = "100%";
            result.style.color = "blue";
            result.style.textAlign = "center";
            result.style.opacity = "1";
            result.style.transform = "rotate(360deg)";
            result.style.transition = "all 1s cubic-bezier(0.84, 0.08, 0.28, 1.08)";
            audio.play();
            setTimeout(function () { location.reload(); }, 3200);

        }
    </script>
</body>

</html>