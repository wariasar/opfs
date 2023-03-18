const worker = new Worker("worker.js");

writeButton.addEventListener("click", (event) => {
   var addText = document.getElementById("text").value; 	
   //location.reload();
   worker.postMessage(addText);
});

loadButton.addEventListener("click", (event) => {
   //location.reload();
   worker.postMessage("");
});

worker.onmessage = function (message) {
   var ret = message.data.split("|");
   if(ret[0] == "w")	
      alert (ret[1]);
   if (ret[0] == "r")
      document.getElementById("text").value = ret[1];
}

