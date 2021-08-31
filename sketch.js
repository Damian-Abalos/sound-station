//drums
var drums = function(p) {
    p.setup = function(){
        p.createCanvas(625, 425).parent('drums');
        p.background(0);
    }
    p.draw = function(){
        p.fill(255, 0, 200, 25)
        p.stroke(1)
        p.strokeWeight(2)
        p.stroke('blue')
        p.fill(250, 50, 100)
        
        p.rect(25, 25 , 125, 100)
        p.rect(175, 25 , 125, 100)
        p.rect(325, 25 , 125, 100)
        p.rect(475, 25 , 125, 100)    
        
        p.rect(25, 215 , 125, 100)
        p.rect(175, 215 , 125, 100)
        p.rect(325, 215 , 125, 100)
        p.rect(475, 215 , 125, 100)
    }
}
//agregar addEventListener y 4 chekbox para formas de onda   
//synths
var synths = function(p){
    p.setup = function(){
        p.canvas = p.createCanvas(625, 425);
        p.canvas.parent('synths');
        // p.createCheckbox();
    }
   
    p.draw = function(){
        p.background(0);  

        // circulo de fondo
        p.fill(125, 80, 255)
        p.stroke(255)
        p.circle(p.mouseX, p.mouseY, 50)

        //Borde
        p.strokeWeight(4);
    
        if(p.mouseIsPressed == true){
            p.fill(p.mouseX/2.5, p.mouseY/1.6, 125)
            p.stroke(p.mouseX/2.5, p.mouseY/1.6, 125)
        } else {
            p.fill(255)
            p.stroke(255)
        }
        
        // sinusoide
        p.sineBox = document.querySelector('sineBox')
        // if(p.keyCode === 49)
        if(sineBox.checked){                     
            p.noFill()
            p.arc(p.mouseX + 10, p.mouseY, 20, 20, 0, p.PI )
            p.arc(p.mouseX - 10, p.mouseY, 20, 20, p.PI, 0 )
            if(p.mouseIsPressed == true && p.mouseX > 0 && p.mouseX < 625 && p.mouseY > 0 && p.mouseY < 425){
                p.playSine()
            }  
            //sine
            p.playSine = function(){
            p.oscilador = new p5.Oscillator('sine')           
            p.oscilador.start() 
            p.oscilador.freq(p.mouseX*6) 
            p.oscilador.amp(p.mouseY/2125)
            p.oscilador.stop(0.1)          
            }
        }
         
        
        // triangular    
        p.triBox = document.querySelector('striBox')
        if(triBox.checked){
            p.line(p.mouseX - 20, p.mouseY, p.mouseX -10, p.mouseY - 10)
            p.line(p.mouseX -10, p.mouseY - 10, p.mouseX + 10, p.mouseY + 10)
            p.line(p.mouseX + 10, p.mouseY + 10, p.mouseX + 20, p.mouseY)
            if(p.mouseIsPressed == true && p.mouseX > 0 && p.mouseX < 625 && p.mouseY > 0 && p.mouseY < 425){
                p.playTri() 
            } 
            //triangle
            p.playTri = function(){
            p.oscilador = new p5.Oscillator('triangle')
            p.oscilador.start()        
            p.oscilador.freq(p.mouseX*6)
            p.oscilador.amp(p.mouseY/2125)
            p.oscilador.stop(0.1)              
            }           
        }
    
        // cuadrada  
        p.squareBox = document.querySelector('squareBox')
        if(squareBox.checked){
            p.line(p.mouseX -20, p.mouseY, p.mouseX -20, p.mouseY - 10)
            p.line(p.mouseX -20, p.mouseY - 10, p.mouseX, p.mouseY - 10)
            p.line(p.mouseX, p.mouseY - 10, p.mouseX, p.mouseY + 10)
            p.line(p.mouseX, p.mouseY + 10, p.mouseX + 20, p.mouseY + 10)
            p.line(p.mouseX + 20, p.mouseY + 10, p.mouseX + 20, p.mouseY)
            if(p.mouseIsPressed == true && p.mouseX > 0 && p.mouseX < 625 && p.mouseY > 0 && p.mouseY < 425){
                p.playSquare() 
            }            
            //square
            p.playSquare = function(){
            p.oscilador = new p5.Oscillator('square')
            p.oscilador.start()        
            p.oscilador.freq(p.mouseX*6)
            p.oscilador.amp(p.mouseY/2125)
            p.oscilador.stop(0.1)          
            }
        }

        // diente de cierra 
        p.sawBox = document.querySelector('sawBox')
        if(sawBox.checked){
            p.line(p.mouseX - 20, p.mouseY, p.mouseX - 10, p.mouseY - 10)
            p.line(p.mouseX - 10, p.mouseY -10, p.mouseX - 10, p.mouseY + 10)
            p.line(p.mouseX - 10, p.mouseY + 10, p.mouseX + 10, p.mouseY - 10)
            p.line(p.mouseX + 10, p.mouseY - 10, p.mouseX + 10, p.mouseY + 10)
            p.line(p.mouseX + 10, p.mouseY + 10, p.mouseX + 20, p.mouseY)   
            if(p.mouseIsPressed  && p.mouseX > 0 && p.mouseX < 625 && p.mouseY > 0 && p.mouseY < 425){
                p.playSaw() 
            }            
            //saw
            p.playSaw = function(){
            p.oscilador = new p5.Oscillator('sawtooth')
            p.oscilador.start()        
            p.oscilador.freq(p.mouseX*6)
            p.oscilador.amp(p.mouseY/2125)
            p.oscilador.stop(0.1)            
            }
        }        
    }
}

    //fxs
var fxs = function(p){
    p.setup = function(){
        p.createCanvas(625, 425).parent('fxs');
        p.background(0);
    }
    p.draw = function(){
        
    }
}

var myp5_drums = new p5(drums);
var myp5_synths = new p5(synths);
var myp5_fxs = new p5(fxs);







// function setup(){
//     let canv1 = createCanvas(800, 800)
//     canv1.parent('canv1')
//     let canv2 = createCanvas(800, 800)
//     canv2.parent('canv2')
//     // let oscilador = new p5.Oscillator(random(270, 1000), 'triangle')
// }
// function draw(){
//     background(1)   
//     strokeWeight(1) 

// }
