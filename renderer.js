// include the ipc module to communicate with main process.
const ipcRenderer = require('electron').ipcRenderer; 
 
const loopInput = document.getElementById('loopInput');
loopInput.addEventListener('input', function () {
    console.log(loopInput.files)
 
   //send the info to main process . we can pass any arguments as second param.
    ipcRenderer.send("loopInput", arg); // ipcRender.send will pass the information to main process
});
