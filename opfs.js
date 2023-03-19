const worker = new Worker("worker.js");

writeButton.addEventListener("click", (event) => {
   var addText = document.getElementById("text").value; 	
   //location.reload();
   worker.postMessage(["w", addText]);
});

loadButton.addEventListener("click", (event) => {
   //location.reload();
   worker.postMessage(["r",""]);
});

worker.onmessage = function (message) {
   if(message.data[0] == "w")	
      alert (message.data[1]);
   if (message.data[0] == "r")
      document.getElementById("text").value = message.data[1];
}

