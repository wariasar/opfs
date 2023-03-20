const worker = new Worker("worker.js");

writeButton.addEventListener("click", (event) => {
   var fileName = document.getElementById("fname").value; 	
   var addText = document.getElementById("text").value; 	
   //location.reload();
   worker.postMessage(["w", addText, fileName]);
});

loadButton.addEventListener("click", (event) => {
   //location.reload();
   var fileName = document.getElementById("fname").value; 	
   worker.postMessage(["r","", fileName]);
});

worker.onmessage = function (message) {
   if(message.data[0] == "w")	
      document.getElementById("fstatus").innerHTML = "File written (" + message.data[2] + " Bytes)";
   if (message.data[0] == "r") {
      document.getElementById("fstatus").innerHTML = "File reloaded (" + message.data[2] + " Bytes)";
      document.getElementById("text").value = message.data[1];
   }
}

