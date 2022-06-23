let xbola = 300;
let ybola = 200;
let diametro = 30
let velocidadex = 7
let velocidadey = 7
let raio = diametro /2
let xrt1 = 5
let yrt1 = 150
let alturart=100
let largurart=15
let speedyrt1 = 7
let xrt2 =580
let yrt2 = 150
let pontos1=0
let pontos2=0


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
    mostrarbola() 
   xbola += velocidadex
   ybola += velocidadey
  
  if (xbola + raio>width || xbola - raio<0)
   velocidadex *= -1
   
  if (ybola + raio>400 || ybola -raio<0) 
    velocidadey *=-1

  rect(xrt1,yrt1,largurart,alturart)
  if (keyIsDown(UP_ARROW)){
    yrt1 -= speedyrt1
  }
  if (keyIsDown(DOWN_ARROW))
  yrt1 += speedyrt1
  
  if (xbola-raio<xrt1 +largurart && ybola -raio<yrt1+ alturart && ybola + raio> yrt1 ){
    velocidadex *= -1
  }
  
  rect(xrt2,yrt2,largurart,alturart)
  speedrt2 =ybola-yrt2-alturart /2 
  yrt2 += speedrt2 
  
  if (xbola+raio>xrt2+largurart-5 && ybola -raio<yrt2+ alturart && ybola + raio> yrt2 ){
    velocidadex *= -1
  }
  
  fill(255)
  text(pontos1, 278,26)
  text(pontos2, 321,26)
  
  
  if (xbola>580){
  pontos1 += 1}
  if (xbola<20){
    pontos2 +=1}

}
    function mostrarbola() {
      circle(xbola, ybola, diametro);}
    

    
     