const root = document.getElementById('root');
root.style.display="flex";
root.style.flexDirection="column";

const MainLayoutHeightFlex = [1,2,1];


for(let i=0;i<3;i++){
const a = document.createElement('div');
root.appendChild(a);
root.children[i].style.width = `100%`;
root.children[i].style.flex = MainLayoutHeightFlex[i];
}
// 첫번쨰 화면 시간과 로고 있는 컨테이너
root.children[0].style.display="flex";
root.children[0].style.flexDirection="column";

for(let i =0; i<2;i++){
const div = document.createElement('div');
root.children[0].appendChild(div);
root.children[0].children[i].style.width=`100%`;
}
root.children[0].children[0].style.flex=1;
root.children[0].children[1].style.flex=5;




function rootSize(width,height) {
    root.style.width = `${width}px`;
    root.style.height = `${height}px`;
}

rootSize(390,844);
console.dir(root);

