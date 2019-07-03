window.addEventListener('devicemotion', function(event) {
  console.log(event.acceleration.x + ' m/s2');
});

document.addEventListener('DOMContentLoaded', init, false);
function init() {
    console.log('Engage');
    window.addEventListener('devicemotion', motion, false);
}

let lastX, lastY, lastZ;
let moveCounter = 0;

function motion(e) {
    let acc = e.acceleration;
    if(!acc.hasOwnProperty('x')) {
        acc = e.accelerationIncludingGravity;
    }

    if(!acc.x) return;

    //only log if x,y,z > 1
    if(Math.abs(acc.x) >= 1 &&
    Math.abs(acc.y) >= 1 &&
    Math.abs(acc.z) >=1) {
        //console.log('motion', acc);
        if(!lastX) {
            lastX = acc.x;
            lastY = acc.y;
            lastZ = acc.z;
            return;
        }

        let deltaX = Math.abs(acc.x - lastX);
        let deltaY = Math.abs(acc.y - lastY);
        let deltaZ = Math.abs(acc.z - lastZ);
        
        if(deltaX + deltaY + deltaZ > 3) {
            moveCounter++;
        } else {
            moveCounter = Math.max(0, --moveCounter);
        }

        if(moveCounter > 2) {
            console.log('SHAKE!!!');
            alert('SHOOKETH');
            generate();
            moveCounter = 0;
        }

        lastX = acc.x;
        lastY = acc.y;
        lastZ = acc.z;
        
    }
}

 //check if shake is supported or not.
//  if(!("ondevicemotion" in window)){alert("Not Supported");}
// ~~~~~~~~~~~~~~~~~~~~~~LOCAL STORAGE YEEEEEEEEEEE / VARIABLE DEFs~~~~~~~~~~~~~~~~~~~~~~

var costVar = localStorage.vls_Cost;
var distanceVar = localStorage.vls_Distance;
var mainNdx = 0;
var outputDis = document.getElementById('travel');

var rnamearray = ['CHIK FIL A', 'RAMEN BAR', 'HONEY GROW', 'SUBWAY', 'HALAL', 'SABRINA\'S CAFE', 'MAD REX', 'MARATHON GRILL', 'FIVE GUYS', 'MC DONALDS', 'TACO BELL', 'CHIPOTLE', 'SHAKE SHACK', 'MAC MART', 'POD', 'SNAP KITCHEN', 'WENDY\'S', 'LANDMARK', 'HAN DYNASTY'];
var rcostarray = [1, 2, 2, 1, 1, 3, 3, 3, 2, 1, 1, 2, 2, 2, 3, 1, 1, 3, 3];
var rdistancearray = [1, 1, 3, 1, 1, 1, 2, 2, 2, 3, 3, 1, 1, 2, 3, 2, 2, 1, 3];
var rpatharray = ['img/chik.png', 'img/ramen.jpg', 'img/honey.jpg', 'img/sub.jpg', 'img/halal.jpg', 'img/sabrina.jpg', 'img/rex.jpg', 'img/marathon.jpg', 'img/five.jpg', 'img/mc.jpg', 'img/taco.jpg', 'img/chip.jpg', 'img/shake.jpg', 'img/mac.jpg', 'img/pod.jpg', 'img/snap.jpg', 'img/wendy.jpg', 'img/landmark.jpg', 'img/han.jpg'];

var content = [
  {
    id: 1,
    rname: 'CHIK FIL A',
    rcost: 1,
    rdist: 1,
    rpath: 'img/chik.png'
  },
  {
    id: 2,
    rname: 'RAMEN BAR',
    rcost: 2,
    rdist: 1,
    rpath: 'img/ramen.png'
  },
  {
    id: 3,
    rname: 'HONEY GROW',
    rcost: 2,
    rdist: 3,
    rpath: 'img/honey.jpg'
  },
  {
    id: 4,
    rname: 'SUBWAY',
    rcost: 1,
    rdist: 1,
    rpath: 'img/sub.jpg'
  },
  {
    id: 5,
    rname: 'HALAL',
    rcost: 1,
    rdist: 1,
    rpath: 'img/halal.jpg'
  },
  {
    id: 6,
    rname: 'SABRINA\'S CAFE',
    rcost: 3,
    rdist: 1,
    rpath: 'img/sabrina.jpg'
  },
  {
    id: 7,
    rname: 'MAD REX',
    rcost: 3,
    rdist: 2,
    rpath: 'img/rex.jpg'
  },
  {
    id: 8,
    rname: 'MARATHON GRILL',
    rcost: 3,
    rdist: 2,
    rpath: 'img/marathon.png'
  },
  {
    id: 9,
    rname: 'FIVE GUYS',
    rcost: 2,
    rdist: 2,
    rpath: 'img/five.jpg'
  },
  {
    id: 10,
    rname: 'MC DONALDS',
    rcost: 1,
    rdist: 3,
    rpath: 'img/mc.jpg'
  },{
    id: 11,
    rname: 'TACO BELL',
    rcost: 1,
    rdist: 3,
    rpath: 'img/taco.jpg'
  },{
    id: 12,
    rname: 'CHIPOTLE',
    rcost: 2,
    rdist: 1,
    rpath: 'img/chip.png'
  },{
    id: 13,
    rname: 'SHAKE SHACK',
    rcost: 2,
    rdist: 1,
    rpath: 'img/shake.png'
  },{
    id: 14,
    rname: 'MAC MART',
    rcost: 2,
    rdist: 2,
    rpath: 'img/mac.png'
  },{
    id: 15,
    rname: 'POD',
    rcost: 3,
    rdist: 3,
    rpath: 'img/pod.jpg'
  },{
    id: 16,
    rname: 'SNAP KITCHEN',
    rcost: 1,
    rdist: 2,
    rpath: 'img/snap.png'
  },{
    id: 17,
    rname: 'WENDY\'S',
    rcost: 1,
    rdist: 2,
    rpath: 'img/wendy.jpg'
  },{
    id: 18,
    rname: 'LANDMARK',
    rcost: 3,
    rdist: 1,
    rpath: 'img/landmark.jpg'
  },{
    id: 19,
    rname: 'HAN DYNASTY',
    rcost: 3,
    rdist: 3,
    rpath: 'img/han.jpg'
  },{
    id: 20,
    rname: 'BABY BLUES BBQ',
    rcost: 2,
    rdist: 3,
    rpath: 'img/blue.jpg'
  }

]

mainNdx = rnamearray.length-1;

var oval = document.getElementById("Oval").classList;
var money = document.getElementById("m").classList;

var oval2 = document.getElementById("Oval2").classList;
var money2 = document.getElementById("m2").classList;

var oval3 = document.getElementById("Oval3").classList;
var money3 = document.getElementById("m3").classList;


//-----------------CLICK LISTENERS-------------------------------
var el = document.getElementById('d1');
if(el){
el.addEventListener('click', highlight, false);
}

var el2 = document.getElementById('d2');
if(el2){
el2.addEventListener('click', highlight2, false);
}

var el3 = document.getElementById('d3');
if(el3){
el3.addEventListener('click', highlight3, false);
}

//-----------------ON CLICK HIGHLIGHT - TRANSPORTATION-------------------------------

var cash;

$('.transport').click(function(){
var $this = $(this);
 $this.siblings().removeClass('active');
 if($this.hasClass('active')){
   cash = 1;
 }else{
   $this.removeClass('inactive').addClass('active');
 }
    
})

// -----------ACTIVE STATE READ - TRANSPORTATION ------------------

$('.transport').click(function() {
  switch (true) {
    case $("#walk").hasClass('active'):
    distanceVar = 1
    localStorage.vls_Distance= distanceVar;
    outputDis.src= "img/walk.svg";
      break;
    case $("#subway").hasClass('active'):
    distanceVar = 2
    localStorage.vls_Distance= distanceVar;
    outputDis.src= "img/subway.svg";
      break;
    case $("#uber").hasClass('active'):
    distanceVar = 3
    localStorage.vls_Distance= distanceVar;
    outputDis.src= "img/uber.svg";
      break;
    default :
    distanceVar = 0
      break;
  }
  console.log('distancevar is ' + distanceVar);
})

//
//---------------------ON LOAD------------------------------------
//


function pageSetUp() {
  console.log('pageSetUp');
  console.log('CURRENT COST VAR IS ' + costVar);
  switch (costVar){
  case '1':
    console.log('local1');
    money.add("active");
    oval.add("active2");
    money2.remove("active");
    oval2.remove("active2");
    money3.remove("active");
    oval3.remove("active2");
    break;

  case '2': 
    console.log('local2'); 
    money.add("active");
    oval.add("active2");
    money2.add("active");
    oval2.add("active2");
    
    money3.remove("active");
    oval3.remove("active2");
    break;

  case '3':
    console.log('local3');
    money.add("active");
    oval.add("active2");
    money2.add("active");
    oval2.add("active2");
    money3.add("active");
    oval3.add("active2");
    break;

  default: 
    console.log('defaulting');
    money.add("active");
    oval.add("active2");
    money2.remove("active");
    oval2.remove("active2");
    money3.remove("active");
    oval3.remove("active2");
    break;

}

switch(distanceVar){
  case '1':
    $("#walk").addClass('active')
    $("#walk").siblings().removeClass('active');
    outputDis.src= "img/walk.svg";
    break;

  case '2':
    $("#subway").addClass('active')
    $("#subway").siblings().removeClass('active');
    outputDis.src= "img/subway.svg";
    break;

  case '3':
    $("#uber").addClass('active')
    $("#uber").siblings().removeClass('active');
    outputDis.src= "img/uber.svg";
    break;

  default:
    console.log('tryagain');

  }
}


function readData() {
  console.log("readData called");
  // Does this browser support local storage?
  if (typeof (Storage) !== "undefined") {
    // Read data from local storage
    costValue = localStorage.vls_Cost;
    distanceValue = localStorage.vls_Distance;
    ndxStr = localStorage.vls_Ndx;

    console.log("cost is .. " + costValue);
    console.log("distance is .. " + distanceValue);
  } else {
    // Sorry! No Web Storage support..
    alert('This browser does NOT support local storage');
  }
}


//
// ---- HIGHLIGHTING FUNCTIONS TRIGGERED WHEN USER CLICKS ON FITLER SETTING
//

//HIGHLIGHT 1
function highlight() {
  if (typeof (Storage) !== "undefined") {
   // Add data to cost variable
  costVar = 1;
  // Add to storage
    localStorage.vls_Cost = costVar;
  } else {
  // Sorry! No Web Storage support..
      alert('This browser does NOT support local storage');
    }

  console.log('highlight')
  money.add("active")
  oval.add("active2")
  console.log('costVar is ' + costVar)
  
  money2.remove("active")
  oval2.remove("active2")
  money3.remove("active")
  oval3.remove("active2");
  }


//HIGHLIGHT 2
function highlight2() {
  if (typeof (Storage) !== "undefined") {
    // Add data to cost variable
   costVar = 2;
   // Add to storage
     localStorage.vls_Cost = costVar;
   } else {
   // Sorry! No Web Storage support..
       alert('This browser does NOT support local storage');
     }

  console.log('highlight2')  
  money.add("active")
  oval.add("active2")
  money2.add("active")
  oval2.add("active2")
  console.log('costVar is ' + costVar)
  
  if (money3.contains("active")){
    money3.remove("active")
    oval3.remove("active2");
  }
  }


//HIGHLIGHT 3
function highlight3() {
  if (typeof (Storage) !== "undefined") {
    // Add data to array
    costVar = 3;
    // save data string to local storage
    localStorage.vls_Cost = costVar;
  } else {
      // Sorry! No Web Storage support..
      alert('This browser does NOT support local storage');
    }

    console.log('highlight3')
    money.add("active")
    oval.add("active2")
    money2.add("active")
    oval2.add("active2")
    money3.add("active")
    oval3.add("active2") 
    console.log('costVar is ' + costVar)
  
  }
var result;
var recieved = [];
var selected;
var outputArea = document.getElementById('title');
var displayObj = document.getElementById('image');

function generate(costArray, distanceArray){
    switch (true){
    case (costVar == 1 && distanceVar == 1):
      console.log('1 & 1');
      result = content.map(function(x){
        if (x.rcost == 1 && x.rdist == 1){
          return x.id
        }
        });
      console.log(result);
      break;

    case (costVar == 1 && distanceVar == 2):
      console.log('1 & 2');
      result = content.map(function(x){
        if (x.rcost == 1 && x.rdist == 2){
          return x.id
        }
        });
      console.log(result);
      break;

    case (costVar == 1 && distanceVar == 3):
      console.log('1 & 3');
      result = content.map(function(x){
        if (x.rcost == 1 && x.rdist == 3){
          return x.id
        }
        });
      console.log(result);
      break;

    case (costVar == 2 && distanceVar == 1):
      console.log('2 & 1');
      result = content.map(function(x){
        if (x.rcost == 2 && x.rdist == 1){
          return x.id
        }
        });
      console.log(result);
      break;

    case (costVar == 2 && distanceVar == 2):
      console.log('2 & 2');
      result = content.map(function(x){
        if (x.rcost == 2 && x.rdist == 2){
          return x.id
        }
        });
      console.log(result);
      break;

    case (costVar == 2 && distanceVar == 3):
      console.log('2 & 3');
      result = content.map(function(x){
        if (x.rcost == 2 && x.rdist == 3){
          return x.id
        }});
      console.log(result);
      break;

    case (costVar == 3 && distanceVar == 1):
      console.log('3 & 1');
      result = content.map(function(x){
        if (x.rcost == 3 && x.rdist == 1){
          return x.id
        }});
      console.log(result);
      break;

    case (costVar == 3 && distanceVar == 2):
      console.log('3 & 2');
      result = content.map(function(x){
        if (x.rcost == 3 && x.rdist == 2){
          return x.id
        }});
      console.log(result);
      break;

    case (costVar == 3 && distanceVar == 3):
      console.log('3 & 3');
      result = content.map(function(x){
        if (x.rcost == 3 && x.rdist == 3){
          return x.id
        }});
      console.log(result );
      break;

    default:
        result = content.map(function(x){
          if (x.rcost == 1 && x.rdist == 1){
            return x.id
          }});
      console.log('error - something went wrong :(');
  }
  console.log("options are " + result);
  recieved = [];

  for (var i = 0; i<result.length; i++){
    if (result[i]!== undefined){
      recieved.push(result[i]);
    }
  }


  recieved = shuffle(recieved);
  recieved --;
  console.log(recieved);

  outputArea.innerHTML = '<p>' + content[recieved].rname + '</p>';
  displayObj.src= content[recieved].rpath ;
  
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array[0];
  
}





