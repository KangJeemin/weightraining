let a = document.getElementsByClassName('middle-left-box');
a[0].addEventListener('click',()=>{
  console.log(a[0]);
  a[0].style.backgroundColor="blue";  
})


function getTime(){
  const date = new Date();
  let hour = date.getHours();
  let mintues = date.getMinutes();
  let second = date.getSeconds();
  let time = document.getElementById('time');  
  time.innerHTML=`${hour} : ${mintues} : ${second} `;
  // setInterval(timeSet,1000);
}

function timeSet() {
  getTime()
  setInterval(getTime,1000)
}

window.onload = timeSet();


