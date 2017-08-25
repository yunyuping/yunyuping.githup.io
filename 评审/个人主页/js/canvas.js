let canvas1=document.querySelector("#canvas1");
let canvas2=document.querySelector("#canvas2");
let canvas3=document.querySelector("#canvas3");
let canvas4=document.querySelector("#canvas4");
console.log(canvas1);
console.log(canvas2);
console.log(canvas3);
function percent(canvas,percent,color) {
    let cobj=canvas.getContext("2d");
    let [width,height]=[canvas.width,canvas.height];
    cobj.translate(width/2,height/2);
//    cobj.rotate(-Math.PI/2);
    let maxAngle=360*percent/100;
    cobj.strokeStyle=color;
    cobj.lineWidth=10;
    let angle=0;
    cobj.font="20px 微软雅黑";
    cobj.textAlign="center";
    cobj.textBaseline="middle";
    function fn() {
        angle++;
        cobj.clearRect(-width/2,-height/2,width,height);
        cobj.beginPath();
        cobj.arc(0,0,width*0.4,-Math.PI/2,(angle*Math.PI/180-Math.PI/2));
        cobj.fillText(Math.round(angle/360*100)+"%",0,0)
        cobj.stroke();
        if(angle>=maxAngle){
            return;
        }
        requestAnimationFrame(fn);
    }
    fn();
}
percent(canvas1,92,"red");
percent(canvas2,92,"blue");
percent(canvas3,60,"yellow");
percent(canvas4,80,"green");