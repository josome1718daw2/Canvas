// https://code.tutsplus.com/es/tutorials/how-to-draw-a-pie-chart-and-doughnut-chart-using-javascript-and-html5-canvas--cms-27197



window.addEventListener('load', iniciar);

function iniciar(){
    var myCanvas = document.getElementById("myCanvas");
    myCanvas.width = 300;
    myCanvas.height = 300;
    var ctx = myCanvas.getContext("2d");
    
        document.getElementById('enviar').addEventListener('click', nombresyvalores, true);
}








function drawLine(ctx, startX, startY, endX, endY){
    
       ctx.beginPath();
    
       ctx.moveTo(startX,startY);
    
       ctx.lineTo(endX,endY);
    
       ctx.stroke();
    
   }


   function drawArc(ctx, centerX, centerY, radius, startAngle, endAngle){
    
       ctx.beginPath();
    
       ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    
       ctx.stroke();
    
   }


   function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
    
       ctx.fillStyle = color;
    
       ctx.beginPath();
    
       ctx.moveTo(centerX,centerY);
    
       ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    
       ctx.closePath();
    
       ctx.fill();
    
   }


   function drawArc(ctx, centerX, centerY, radius, startAngle, endAngle){
    
       ctx.beginPath();
    
       ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    
       ctx.stroke();
    
   }


   function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
    
       ctx.fillStyle = color;
    
       ctx.beginPath();
    
       ctx.moveTo(centerX,centerY);
    
       ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    
       ctx.closePath();
    
       ctx.fill();
    
   }


    var nombresyvalores = function numyval(){

        console.log('0');
        
  

        // Nombres 
         nombre1 = document.getElementsByName("nombre1")[0].value;
         nombre2 = document.getElementsByName("nombre2")[0].value;
         nombre3 = document.getElementsByName("nombre3")[0].value;
         nombre4 = document.getElementsByName("nombre4")[0].value;      

         // Valores
        
         valor1 = document.getElementsByName("valor1")[0].value;
         valor2 = document.getElementsByName("valor2")[0].value;
         valor3 = document.getElementsByName("valor3")[0].value;
         valor4 = document.getElementsByName("valor4")[0].value;

    }
        
   var myVinyls = {


    "Classical music": valor1,
    
       "Alternative rock": valor2,
    
       "Pop": valor3,
    
       "Jazz": valor4
   };
     /*


    nombre1 : valor1,
    
    nombre2 : valor2,
    
    nombre3 : valor3,
    
    nombre4 : valor4
    
 */
   


   var Piechart = function(options){
    
       this.options = options;
    
       this.canvas = options.canvas;
    
       this.ctx = this.canvas.getContext("2d");
    
       this.colors = options.colors;
    
    
    
       this.draw = function(){
    
           var total_value = 0;
    
           var color_index = 0;
    
           for (var categ in this.options.data){
    
               var val = this.options.data[categ];
    
               total_value += val;
    
           }
    
    
    
           var start_angle = 0;
    
           for (categ in this.options.data){
    
               val = this.options.data[categ];
    
               var slice_angle = 2 * Math.PI * val / total_value;
    
    
    
               drawPieSlice(
    
                   this.ctx,
    
                   this.canvas.width/2,
    
                   this.canvas.height/2,
    
                   Math.min(this.canvas.width/2,this.canvas.height/2),
    
                   start_angle,
    
                   start_angle+slice_angle,
    
                   this.colors[color_index%this.colors.length]
    
               );
    
    
    
               start_angle += slice_angle;
    
               color_index++;
    
           }
    
    
    
       }
    
   }


   var myPiechart = new Piechart(
    
       {
    
           canvas:myCanvas,
    
           data:myVinyls,
    
           colors:["#fde23e","#f16e23", "#57d9ff","#937e88"]
    
       }
    
   );
    
   myPiechart.draw();
    
    
   /*
        // Nombres 
        var nombre1 = document.formu.nombre1.value;
        var nombre2 = document.formu.nombre2.value; 
        var nombre3 = document.formu.nombre3.value; 
        var nombre4 = document.formu.nombre4.value; 
         // Valores
   function nombresyvalores(){

         var valor1 = document.formu.valor1.value;
         var valor2 = document.formu.valor2.value;
         var valor3 = document.formu.valor3.value;
         var valor4 = document.formu.valor4.value;

        return true;
   }


   */
 /*
   var myVinyls = {
    
    "nombre1" : 44,
    
    "nombre2" : 66,
    
    "nombre3" : 77,
    
    "nombre4" : 88
    
   };

 */  
