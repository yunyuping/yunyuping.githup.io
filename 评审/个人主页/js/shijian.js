var inner=document.querySelector(".inner");
for (let i=0;i<60;i++) {
    let height=5;
    if(i%5===0){
        height=10;
    }
    let kd = document.createElement("div");
    kd.style.cssText = "width:2px;height:"+height+"px;background:#000;" +
        "position:absolute;left:99px;top:0;transform-origin:1px 100px";
    kd.style.transform=`rotate(${i*6}deg)`;
    inner.appendChild(kd);
}
let r=80;
for(let i=1;i<=12;i++){
    let newdiv=document.createElement("div");
    newdiv.style.cssText="width:10px;height:10px;fontSize:16px;color:#000;" +
        "position:absolute;left:95px;top:95px";
    let x=r*Math.cos(i*30*Math.PI/180);
    let y=r*Math.sin(i*30*Math.PI/180);
    newdiv.style.transform=`translate(${x}px,${y}px)`;
    newdiv.innerHTML=i+3>12?(i+3)%12:i+3;
    inner.appendChild(newdiv);
}
let hPointer=document.createElement("div");
hPointer.style.cssText="width:6px;height:60px;" +
    "background:#000;position:absolute;left:97px;top:40px;transform-origin:bottom center";
inner.appendChild(hPointer);

let mPointer=document.createElement("div");
mPointer.style.cssText="width:4px;height:70px;" +
    "background:blue;position:absolute;left:98px;top:30px;transform-origin:bottom center";
inner.appendChild(mPointer);

let sPointer=document.createElement("div");
sPointer.style.cssText="width:2px;height:90px;background:red;" +
    "position:absolute;left:99px;top:10px;transform-origin:bottom center";
inner.appendChild(sPointer);

let circle=document.createElement("div");
circle.style.cssText="width:10px;height:10px;border-radius:50%;" +
    "background:yellow;position:absolute;left:95px;top:95px";
inner.appendChild(circle);
function time() {
    let date = new Date();
    let seconds=date.getSeconds();
    sPointer.style.transform=`rotate(${seconds*6}deg)`;
    let minutes=date.getMinutes();
    mPointer.style.transform=`rotate(${minutes*6}deg)`;
    let hours=date.getHours();
    hPointer.style.transform=`rotate(${hours*30+minutes*0.5}deg)`;
}
time();
setInterval(time,1000);