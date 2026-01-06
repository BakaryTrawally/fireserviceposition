
function log(message){
    console.log(message)
}
log("Hello Bakary!!!")
 

// india Positioning
  // Function to animate the first object
  function myMoveT1() {
    // log("we move object 1...!!!");
    const element = document.getElementById('oneTruck');
    // const btn = document.getElementById('myBtn');
    const style = document.createElement('style');
    element.style.animation = 'mySecond1 5s ease-in-out forwards';
    // btn.style.animation = '5s ease-in-out forwards';
    style.innerHTML = `
      @keyframes mySecond1 {
        from {
          top: 120px;
        }
        to {
          top: 10%;
          right: 59.5%;
          width: 30px;
          height: 80px;
          border-radius: 0;
          text-wrap: wrap;
          text-align: center;
          border-bottom-right-radius: 5px;
          border-bottom-left-radius: 5px;
          text-transform: uppercase;
          font-size: 8px;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  // Function to animate the second object
  function myMoveT2() {
    const element = document.getElementById('twoTruck');
    const style = document.createElement('style');
    element.style.animation = 'mySecond2 3s ease-in-out forwards';
    style.innerHTML = `
      @keyframes mySecond2 {
      0% {
        top: 160px;
        right: 0%;
      }
      25% {
        top: 50px;
        right: 40%;
      }
      50% {
        top: 20px;
        right: 40%;
      }
      75% {
        top: 5px;
        right: 70%;
      }
      100% {
        top: 10%;
        right: 75%;
         width: 30px;
          height:80px;
          border-radius: 0;
          text-wrap: wrap;
          text-align: center;
          border-bottom-right-radius: 5px;
          border-bottom-left-radius: 5px;
          text-transform: uppercase;
          font-size: 8px;
      }`;
    document.head.appendChild(style);
  }


  // Function to animate the third object
  function myMoveT3() {
    const element = document.getElementById('threeTruck');
    const style = document.createElement('style');
    element.style.animation = 'mySecond3 5s ease-in-out forwards';
    style.innerHTML = `
      @keyframes mySecond3 {
        from { top: 190px;
        }   
        to {
          bottom: 65px;
          right: 67%;
          width: 30px;
          height: 80px;
          border-radius: 0;
          text-wrap: wrap;
          text-align: center;
          border-top-right-radius: 5px;
          border-top-left-radius: 5px;
          text-transform: uppercase;
          font-size: 8px;
         };
      }
    `;
    document.head.appendChild(style);
  }



  


// Tanco Positioning 
function myMoveTanco() {
  log("we move object 1...!!!");
  const element = document.getElementById('threeTruck');
  const style = document.createElement('style');
  element.style.animation = 'mythird2  3s ease-in-out forwards';
  style.innerHTML = `
    @keyframes mythird2 {
      from {
        top: 120px;
      }
      to {
        top: 40px;
        right: 67%;
        width: 30px;
        height: 80px;
        border-radius: 0;
        text-wrap: wrap;
        text-align: center;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
        text-transform: uppercase;
        font-size: 10px;
      }
    }
  `;
  document.head.appendChild(style);
}




// quebeec Positioning
  function myMoveQuebbec() {
    // log("we move object 1...!!!");
    const element = document.getElementById('oneTruck');
    const style = document.createElement('style');
    element.style.animation = 'mySecond1 5s ease-in-out forwards';
    style.innerHTML = `
      @keyframes mySecond1 {
        from {
          top: 120px;
        }
        to {
          bottom: 85px;
          right: 59.5%;
          width:30px;
          height: 70px;
          border-radius: 0;
          text-wrap: wrap;
          text-align: center;
          border-to-right-radius: 5px;
          border-top-left-radius: 5px;
          text-transform: uppercase;
          font-size: 10px;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  function myMoveQuebbec1() {
    
    const element = document.getElementById('twoTruck');
    const style = document.createElement('style');
    element.style.animation = 'mySecond2 3s ease-in-out forwards';
    style.innerHTML = `
      @keyframes mySecond2 {
        from {
        top: 160px;
      }
     
      to {
          bottom: 85px;
          right: 75%;
          width:30px;
          height: 75px;
          border-radius: 0;
          text-wrap: wrap;
          text-align: center;
          border-top-right-radius: 5px;
          border-top-left-radius: 5px;
          text-transform: uppercase;
          font-size: 10px;
      }`;
    document.head.appendChild(style);
  }

// Delta/Golf Positioning

function myMoveDeltaOrGolfOne()  {
  // log("we move object 1...!!!");
  const element = document.getElementById('oneTruck');
  const style = document.createElement('style');
  element.style.animation = 'mySecond1 5s ease-in-out forwards';
  style.innerHTML = `
    @keyframes mySecond1 {
      from {
        top: 120px;
      }
      to {
        bottom: 290px;
        right: 46.5%;
        width:80px;
        height: 30px;
        border-radius: 0;
        text-wrap: wrap;
        text-align: center;
        border-to-right-radius: 5px;
        border-top-left-radius: 5px;
        text-transform: uppercase;
        font-size: 10px;
      }
    }
  `;
  document.head.appendChild(style);
}


function myMoveDeltaOrGolfTwo() {
  const element = document.getElementById('twoTruck');
  const style = document.createElement('style');
  element.style.animation = 'mySecond2 3s ease-in-out forwards';
  style.innerHTML = `
    @keyframes mySecond2 {
      from {
      top: 160px;
    }
   
    to {
        bottom: 170px;
        right: 47%;
        width: 80px;
        height: 30px;
        border-radius: 0;
        text-wrap: wrap;
        text-align: center;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        text-transform: uppercase;
        font-size: 10px;
    }`;
  document.head.appendChild(style);
}


// General selctors
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
function applyToCloseElements(){
  var span = document.getElementsByClassName("close");
  for(let i =0; i<span.length; i++){
    span[i].addEventListener('click', function(){
      myModalTanco.style.display = "none";
      myModalDelta.style.display = "none";
      myModalQuebeec.style.display = "none";
      modal.style.display = "none";
      log("Hi I am tanco funtion......!")
    })
  }
}
var reloadApp = window.onclick = applyToCloseElements();

// reset btn
function resetBtn(){
  //  window.location.reload()
   location.reload()
  }


// India Modal function start
// Get the modal
var modal = document.getElementById("myModal");
function modalBtn(){
  btn = document.getElementById("myBtn");
  modal.style.display = "block";
  span.onclick = function() {
  modal.style.display = "none";
  resetBtn();
  }
  animation = 'animatetop 30s ease-in-out forwards';
}

// Tanco Modal function start
// Get the modal
// Get the button that opens the modal
var myModalTanco = document.getElementById("myModalTanco");
function modalBtnTanco(){
  btn = document.getElementById("myBtn");
  myModalTanco.style.display = "block";
  span.onclick = function() {
  myModalTanco.style.display = "none";
  resetBtn();
  }
  animation = 'animatetop 30s ease-in-out forwards';
}

// Delta Modal function start
// Get the modal
// Get the button that opens the modal
var myModalDelta = document.getElementById("myModalDelta");
function modalBtnDelta(){
  btn = document.getElementById("myBtn");
  myModalDelta.style.display = "block";
  span.onclick = function() {
  myModalDelta.style.display = "none";
  resetBtn();
  }
  animation = 'animatetop 30s ease-in-out forwards';
}

// Quebeec Modal function start
// Get the modal
// Get the button that opens the modal
var myModalQuebeec = document.getElementById("myModalQuebeec");
function modalBtnQuebeec(){
  btn = document.getElementById("myBtn");
  myModalQuebeec.style.display = "block";
  span.onclick = function() {
  myModalQuebeec.style.display = "none";
  resetBtn();
  }
  animation = 'animatetop 30s ease-in-out forwards';
}


// setting date
const date = new Date();
let dat = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()
let dateToday = "today's date: " +  dat + "/" +  month   + "/" + year
log(dateToday)
// document.getElementById('footer').innerText = dateToday;
document.getElementById('footer').innerHTML = dateToday;
document.getElementById('footer_1').innerHTML = dateToday;
document.getElementById('footer_2').innerHTML = dateToday;
document.getElementById('footer_3').innerHTML = dateToday;

