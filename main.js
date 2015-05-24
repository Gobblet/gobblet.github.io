var clicks = -1;
var radius = 4;
var isSelected = false;

var boardAll = [[[null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null]],
                [[null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null]],
                [[null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null]],
                [[null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null]]];

window.onload = function draw(){

  //window is 601,750
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  c.addEventListener("click", checkLocation, false);

  ctx.strokeRect(99,174,400,403);
  ctx.lineWidth = 3;
  ctx.stroke();


  ctx.beginPath();
  //vertical lines
  ctx.moveTo(199,174);
  ctx.lineTo(199,577);
  ctx.moveTo(299,174);
  ctx.lineTo(299,577);
  ctx.moveTo(399,174);
  ctx.lineTo(399,577);

  //horozontal lines
  ctx.moveTo(99,274);
  ctx.lineTo(499,274);//499,274
  ctx.moveTo(99,374); //99,374
  ctx.lineTo(499,374); //499,374
  ctx.moveTo(99,474); //99,474
  ctx.lineTo(499,474); //499,474

  ctx.lineWidth = 5;
  ctx.strokeStyle = "#005600";
  ctx.stroke();

  //#00008F p1 blue
  var p1Col = "#00008F";
  var p2Col = "#A30000";

  //the top left circle
  drawCircle(150,100,4,p1Col);
  drawCircle(300,100,4,p1Col);
  drawCircle(450,100,4,p1Col);
   //#A30000 p2 red
  drawCircle(150,650,4,p2Col);
  drawCircle(300,650,4,p2Col);
  drawCircle(450,650,4,p2Col);


  function drawCircle(x,y,size,hexColor){
    var r = (size * 10) + 5;

    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2,true);
    ctx.fillStyle = "" + hexColor;
    ctx.fill();
  }

  function checkLocation(e){
    var pos = findOffset(c);
    mouseX = e.pageX - pos.x;
    mouseY = e.pageY - pos.y;
    //alert(mouseX + " " + mouseY);

if(isSelected){
  clicks++;
    if(clicks % 3 == 0){
      radius -= (clicks / 3);
    }
  //square 0, 0
      if(99 <= mouseX && mouseX <= 199&& 174 <= mouseY && mouseY <= 274){
        drawCircle(149,224,radius,p1Col);
        boardAll[0][0][radius] = true;
      } 
  //square 1, 0
      if(205 <= mouseX && mouseX <= 299 && 174 < mouseY && mouseY < 274){
        drawCircle(249,224,radius,p1Col);
        boardAll[1][0][radius] = true;
      }
  //square 2, 0
      if(299 < mouseX && mouseX < 399 && 174 < mouseY && mouseY < 274){
        drawCircle(349,224,radius,p1Col);
        boardAll[2][0][radius] = true;
      }
  //square 3, 0
      if(399 < mouseX && mouseX < 499 && 174 < mouseY && mouseY < 274){
        drawCircle(449,224,radius,p1Col);
        boardAll[3][0][radius] = true;
      }
  //square 0, 1
      if(99 < mouseX && mouseX < 199 && 274 < mouseY && mouseY < 374){
        drawCircle(149,324,radius,p1Col);
        boardAll[0][1][radius] = true;
      }
  //square 1, 1
      if(199 < mouseX && mouseX < 299 && 274 < mouseY && mouseY < 374){
        drawCircle(249,324,radius,p1Col);
        boardAll[1][1][radius] = true;
      }
  //square 2, 1
      if(299 < mouseX && mouseX < 399 && 274 < mouseY && mouseY < 374){
        drawCircle(349,324,radius,p1Col);
        boardAll[2][1][radius] = true;
      }
  //square 3, 1
      if(399 < mouseX && mouseX < 499 && 274 < mouseY && mouseY < 374){
        drawCircle(449,324,radius,p1Col);
        boardAll[3][1][radius] = true;
      }
  //square 0, 2
      if(99 < mouseX && mouseX < 199 && 374 < mouseY && mouseY < 474){
        drawCircle(149,424,radius,p1Col);
        boardAll[0][2][radius] = true;
      }
  //square 1, 2
      if(199 < mouseX && mouseX < 299 && 374 < mouseY && mouseY < 474){
        drawCircle(249,424,radius,p1Col);
        boardAll[1][2][radius] = true;
      }
  //square 2, 2
      if(299 < mouseX && mouseX < 399 && 374 < mouseY && mouseY < 474){
        drawCircle(349,424,radius,p1Col);
        boardAll[2][2][radius] = true;
      }
  //square 3, 2
      if(399 < mouseX && mouseX < 499 && 374 < mouseY && mouseY < 474){
        drawCircle(449,424,radius,p1Col);
        boardAll[3][2][radius] = true;
      }
  //square 0, 3
      if(99 < mouseX  && mouseX< 199 && 474 < mouseY  && mouseY< 574){
        drawCircle(149,524,radius,p1Col);
        boardAll[0][3][radius] = true;
      }
  //square 1, 3
      if(199 < mouseX && mouseX < 299 && 474 < mouseY && mouseY < 574){
        drawCircle(249,524,radius,p1Col);
        boardAll[1][3][radius] = true;
      }
  //square 2, 3
      if(299 < mouseX && mouseX < 399 && 474 < mouseY && mouseY < 574){
        drawCircle(349,524,radius,p1Col);
        boardAll[2][3][radius] = true;
      }
  //square 3, 3
      if(399 < mouseX && mouseX < 499 && 474 < mouseY  && mouseY< 574){
        drawCircle(449,524,radius,p1Col);
        boardAll[3][3][radius] = true;
      }
      isSelected = false;
    } else {
      if(99 < mouseX && mouseX < 499 && 50 < mouseY && mouseY < 150) {        
        isSelected = true;
      } else {
        //square 0, 0
            if((99 < mouseX && mouseX < 199) && (174 < mouseY && mouseY < 274) && (boardAll[0][0][radius] != null)) {
              drawCircle(149, 224, radius-0.5, "#0000FF");
            } 
        //square 1, 0
            if(199 <= mouseX && mouseX <= 299 && 174 <= mouseY && mouseY < 274 && boardAll[1][0][radius] != null){
              drawCircle(249, 224, radius-0.5, "#0000FF");
            }
        //square 2, 0
            if(299 < mouseX && mouseX < 399 && 174 < mouseY && mouseY < 274 && boardAll[2][0][radius] != null){
              drawCircle(349,224,radius-0.5, "#0000FF");
            }
        //square 3, 0
            if(399 < mouseX && mouseX < 499 && 174 < mouseY && mouseY < 274 && boardAll[3][0][radius] != null){
              drawCircle(449,224,radius-0.5, "#0000FF");
            }
        //square 0, 1
            if(99 < mouseX && mouseX < 199 && 274 < mouseY && mouseY < 374 && boardAll[0][1][radius] != null){
              drawCircle(149,324,radius-0.5, "#0000FF");
            }
        //square 1, 1
            if(199 < mouseX && mouseX < 299 && 274 < mouseY && mouseY < 374 && boardAll[1][1][radius] != null){
              drawCircle(249,324,radius-0.5, "#0000FF");
            }
        //square 2, 1
            if(299 < mouseX && mouseX < 399 && 274 < mouseY && mouseY < 374 && boardAll[2][1][radius] != null){
              drawCircle(349,324,radius-0.5, "#0000FF");
            }
        //square 3, 1
            if(399 < mouseX && mouseX < 499 && 274 < mouseY && mouseY < 374 && boardAll[3][1][radius] != null){
              drawCircle(449,324,radius-0.5, "#0000FF");
            }
        //square 0, 2
            if(99 < mouseX && mouseX < 199 && 374 < mouseY && mouseY < 474 && boardAll[0][2][radius] != null){
              drawCircle(149,424,radius-0.5, "#0000FF");
            }
        //square 1, 2
            if(199 < mouseX && mouseX < 299 && 374 < mouseY && mouseY < 474 && boardAll[1][2][radius] != null){
              drawCircle(249,424,radius-0.5, "#0000FF");
            }
        //square 2, 2
            if(299 < mouseX && mouseX < 399 && 374 < mouseY && mouseY < 474 && boardAll[2][2][radius] != null){
              drawCircle(349,424,radius-0.5, "#0000FF");
            }
        //square 3, 2
            //if(399 < mouseX && mouseX < 499 && 374 < mouseY && mouseY < 474 && boardAll[3][2][radius] != null){
              //drawCircle(449,424,radius-0.5, "#0000FF";
            //}
        //square 0, 3
            if(99 < mouseX  && mouseX< 199 && 474 < mouseY  && mouseY< 574 && boardAll[0][3][radius] != null){
              //drawCircle(149,524,radius-0.5, "#0000FF");
            }
        //square 1, 3
            if(199 < mouseX && mouseX < 299 && 474 < mouseY && mouseY < 574 && boardAll[1][3][radius] != null){
               //drawCircle(249,524,radius-0.5, "#0000FF");
            }
        //square 2, 3
            if(299 < mouseX && mouseX < 399 && 474 < mouseY && mouseY < 574 && boardAll[2][3][radius] != null){
              //drawCircle(349,524,radius-0.5, "#0000FF");
            }
        //square 3, 3
            if(399 < mouseX && mouseX < 499 && 474 < mouseY  && mouseY< 574 && boardAll[3][3][radius] != null){
              //drawCircle(449,524,radius-0.5, "#0000FF");
            }
      }
    }

  }

  function findOffset(obj){
    var curX = curY = 0;
    if (obj.offsetParent) {
        do {
            curX += obj.offsetLeft;
            curY += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return {x:curX,y:curY};
    }  
  }

  function checkForCup(x, y){

  }





  //context.arc(x,y,r,sAngle,eAngle,counterclockwise);
  //ctx.arc(225,150,50,0,Math.PI*2,true);

  // for(var x= 0; x<= 3; x++){
  //   for(var y =0 ; y<= 3; y++){
  //   }
  // }

}

