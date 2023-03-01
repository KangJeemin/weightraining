const root=document.getElementById('root');
root.style.width=`390px`;
root.style.height=`844px`;
root.style.display="flex";
root.style.flexDirection="column";


for(let i=0;i<3;i++){
const div=document.createElement('div');
root.appendChild(div);
}

root.children[0].style.flex=1.5;
root.children[1].style.flex=5;
root.children[2].style.flex=1;

