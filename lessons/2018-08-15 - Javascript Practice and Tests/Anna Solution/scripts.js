// function leftArrowPressed() {
//   var element = document.getElementById("image1");
//   element.style.left = parseInt(element.style.left) - 5 + 'px';
//   }


  // function upArrowPressed() {
  // var element = document.getElementById("image1");
  // element.style.top = parseInt(element.style.top) - 5 + 'px';
  // }

  // function downArrowPressed() {
  // var element = document.getElementById("image1");
  // element.style.top = parseInt(element.style.top) + 5 + 'px';
  // }

  // function moveSelection(evt) {
  //     switch (evt.keyCode) {
  //         case 37:
  //         leftArrowPressed();
  //         break;
  //         case 39:
  //         rightArrowPressed();
  //         break;
  //         case 38:
  //         upArrowPressed();
  //         break;
  //         case 40:
  //         downArrowPressed();
  //         break;
  //         }
  //     };





// var test1 =0;
var elementBlue = document.getElementById("blueCar");
var elementRed = document.getElementById("redCar");
elementBlue.style.left = 0;
elementRed.style.left= 0;

// BLUE CAR
// var elementBlue = document.getElementById("blueCar");
function rightArrowPressed() {
  elementBlue.style.left = parseInt(elementBlue.style.left) + 20 + 'px';
  console.log(elementBlue);
  if(elementBlue.style.left == "1100px"){
    window.removeEventListener('keydown', moveSelection);
    alert("Blue car won!");
    window.location.reload(); 
  }
}

// var elementRed = document.getElementById("redCar");
function downArrowPressed() {
  elementRed.style.left = parseInt(elementRed.style.left) + 20 + 'px';
  console.log(elementRed);
  if(elementRed.style.left == "1100px"){
    window.removeEventListener('keydown', moveSelection);
    alert("Red car won!");
    window.location.reload(); 
  }
}

function moveSelection(evt) {
  switch (evt.keyCode) {
      case 39:
      rightArrowPressed();
      break;
      case 89:
      downArrowPressed();
      break;
      }
  };



function docReady()
{
  window.addEventListener('keydown', moveSelection);
}