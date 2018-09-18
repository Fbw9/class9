let playerOneTrack = document.getElementById("player1_race");
let playerTwoTrack = document.getElementById("player2_race");
let tdPlayerOne = document.querySelectorAll("td");
// console.log(tdPlayerOne);


function moveCars(e) {
  if (e.keyCode == 88) {
    let selected = playerOneTrack.querySelector('td.active');
    let next = playerOneTrack.querySelector('td.active').nextSibling.nextSibling;
    // selected.className = "";
    // next.className = "active";
    selected.classList.remove('active');
    next.classList.add('active');
    if (next.id == "finish") {
      document.body.removeEventListener('keyup', moveCars);
      alert('Player One Wins!!!!!');
      window.location.reload();
    }
  } else if (e.keyCode == 89) {
    let selected = playerTwoTrack.querySelector('td.active');
    let next = playerTwoTrack.querySelector('td.active + td');
    selected.classList.remove('active');
    next.classList.add('active');
    if (next.id == "swedish") {
      document.body.removeEventListener('keyup', moveCars);
      alert('Player Two Wins!!!!!');
    }
  };


 }

 // function checkTheWinner(e) {
 // }








document.body.addEventListener('keyup', moveCars);
document.body.addEventListener('keyup', checkTheWinner);
