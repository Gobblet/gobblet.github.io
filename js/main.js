

window.onload = function draw(){

  //window is 601,750


  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

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
  drawCircle(150,100,45,p1Col);
  drawCircle(300,100,45,p1Col);
  drawCircle(450,100,45,p1Col);
   //#A30000 p2 red
  drawCircle(150,650,45,p2Col);
  drawCircle(300,650,45,p2Col);
  drawCircle(450,650,45,p2Col);

  function drawCircle(x,y,r,hexColor){
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2,true);
    ctx.fillStyle = "" + hexColor;
    ctx.fill();
  }






  //context.arc(x,y,r,sAngle,eAngle,counterclockwise);
  //ctx.arc(225,150,50,0,Math.PI*2,true);

  // for(var x= 0; x<= 3; x++){
  //   for(var y =0 ; y<= 3; y++){
  //   }
  // }

}

// function WebSocketTest()
// {
//   if("webSocket" in window){
//     url = "a url"
//     protocal = "tcp"
//     ws = new webSocket(url, protocal);
//     ws.onopen = onSocketConnected();
//     ws.onclose = onSocketDisconnect();
//     ws.onmessage = onSocketMessage();
//     ws.onerror = onSocketError();


//     ws.send("hi i work");


//        // Socket message
//       function onSocketMessage(message) {
//           console.log('Message: ' + message.data);
//       };

//       // Socket error
//       function onSocketError(error) {
//           console.log('Error: ' + error.data);
//       };

//       // Socket connected
//       function onSocketConnected() {
//           console.log("Connected to socket server");
//       };

//       // Socket disconnected
//       function onSocketDisconnect() {
//           console.log("Disconnected from socket server");
//       };

   //  ws.onopen = function()
   // {
   //    ws.send("Message to send");
   //    alert("package sent")
   //  };

   //  ws.onmessage = function (evt)
   //  {
   //    var received_msg = evt.data;
   //    alert("package is received...");
   //  };

   //  ws.onclose = function()
   //  {
   //    // websocket is closed.
   //    alert("Connection is closed...");
   //  };
  // }

//}
