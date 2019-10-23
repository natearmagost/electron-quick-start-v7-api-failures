// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
fetch('http://localhost:8000/api', {

})
.then(response => response.json())
.then(data => {
  console.log(data.response)
  document.getElementById('response').innerHTML = data.response;
})
.catch(error => {
  console.error(error)
  document.getElementById('response').innerHTML = 'Error';
})