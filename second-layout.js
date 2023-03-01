const root=document.getElementById('root');

root.style.width=`390px`;
root.style.height=`844px`;
root.style.display="flex";
root.style.flexDirection="column";


for(let i=0;i<3;i++){
const div =document.createElement('div');
root.appendChild(div);
}

root.children[0].style.flex=1.5;
root.children[1].style.flex=5;
root.children[2].style.flex=1;

// 두번째 화면 첫번째 레이아웃-------------------------------


for(let i =0; i<2;i++){
    const div = document.createElement('div');
    root.children[0].appendChild(div);
    root.children[0].children[i].style.width=`100%`;
}
root.children[0].children[0].style.justifyContent="center"
root.children[0].children[0].style.display="flex";
root.children[0].children[0].style.flex=1;
root.children[0].children[1].style.flex=5;

function getTime(){
    const date = new Date();
    let hour = date.getHours();
    let mintues = date.getMinutes();
    let second = date.getSeconds();
    let time = document.getElementById('time');  
    root.children[0].children[0].innerHTML=`${hour} : ${mintues} : ${second} `;
}
function timeSet() {
    getTime()
    setInterval(getTime,1000)
}
  
window.onload = timeSet();

// 두번째 화면 두번째 레이아웃--------------------------------------------------
// 리스트 부분
for(let i=0;i<2;i++){
    const div = document.createElement('div');
    root.children[1].appendChild(div);
}

root.children[1].style.display="flex";
root.children[1].style.flexDirection="column"

root.children[1].children[0].style.flex=1;
root.children[1].children[1].style.flex=7;

const workoutList =["chest","back","shoulder","leg","arm","else"];

for(let i=0;i<6;i++){
    const div = document.createElement('div');
    root.children[1].children[0].appendChild(div);
    root.children[1].children[0].children[i].innerHTML=workoutList[i];
}
root.children[1].children[0].style.display="flex";
root.children[1].children[0].style.justifyContent="space-between";

// 항목 부분-----------------------------------
for(let i=0;i<5;i++){
    const div = document.createElement('div');
    root.children[1].children[1].appendChild(div);
}
root.children[1].children[1].style.display="flex";
root.children[1].children[1].style.flexDirection="column";
root.children[1].children[1].style.justifyContent="space-between";










