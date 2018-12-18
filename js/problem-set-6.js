/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */


function sayHello() {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 1024, 128 );
  ctx.font = "48px sans-serif";
  ctx.strokeText("Hello, World!", 10, 50);
  }
    
    /*
     * Rectangle. 3 points.
     *
     * Write a function that draws a rectangle on the canvas. You should prompt
     * the user for the height and width. You should also prompt the user for the
     * X- and Y-coordinates of the topleft corner of the rectangle.
     *
     * You'll need to use the appropriate Canvas API methods to do this. If you're
     * unsure what your code should do, click the "Example" button to see. When you
     * click the "Rectangle" button, your output should match that of the example.
     *
     * Certain values, such as heights and widths that are logically too small or
     * practically too large, should be prohibited. Check the example to see what
     * your code should do in these instances.
     *
     * Here is a list of prohibited values:
     *     - Width values less than 1
     *     - Height values less than 1
     *     - X- or Y- coordinates less than 5
     *     - Combinations of heights/widths and X-/Y-coordinates that would make
     *       it impossible to draw the rectangle within the bounds of the canvas
     * <canvas width="1024px" height="512px" id="canvas2">
     */
    
    function drawRectangle() {
    const canvas = document.getElementById("canvas2");
    const ctx = canvas.getContext("2d");
    let height = 1100;
    let width = 1100;
    let xcoord = 1100;
    let ycoord = 1100;
    height = Number(prompt("Height:"));
    width = Number(prompt("Width:"));
    xcoord = Number(prompt("X:"));
    ycoord = Number(prompt("Y:"));
    if (width < 1){
      alert("Your width is too small.");
    }
    else if (height < 1) {
      alert("Your height is too small.");
    }
    else if (xcoord < 5) {
      alert("Your x-coordinate is too small.");
    }
    else if (ycoord < 5) {
      alert("Your y-coordinate is too small.");
    }
    else if (height+xcoord > 512 || width + ycoord > 1024) {
      alert("The rectangle will not fit on the canvas.");
    }
    else if (!(width < 1 && height < 1 && xcoord < 5 && ycoord < 5 && height+xcoord > 512 && width + ycoord > 1024)){
      ctx.clearRect(0, 0, 1024, 512);
      ctx.beginPath();
      ctx.rect(xcoord,ycoord,width,height);
      ctx.stroke();
      ctx.closePath();
      
    }
    }
    
    /*
     * Color. 3 points.
     *
     * Write a function that draws a rectangle on the canvas. By default, the
     * rectangle will have a height and width of 50px and 100px, respectively. It
     * will be positioned at [10, 10] on the canvas. You'll need to prompt the
     * user to enter a color for the rectangle.
     *
     * Support the following colors:
     *     - black
     *     - blue
     *     - green
     *     - orange
     *     - purple
     *     - red
     *     - yellow
     *
     * You'll need to use the appropriate Canvas API methods to do this. If you're
     * unsure what your code should do, click the "Example" button to see. When you
     * click the "Color" button, your output should match that of the example.
     *
     * Check the example to see what your code should do if the user enters an
     * unsupported color.
     */
    
    function drawColoredRectangle() {
      const canvas = document.getElementById("canvas3");
      const ctx = canvas.getContext("2d");
      let color = prompt("Color:");
      let accepted = ["black", "blue", "green", "orange", "purple", "red", "yellow"]
      if (accepted.includes(color) == true) {
  //       ctx.font = "48px sans-serif";
  // ctx.strokeText("Hssssssssssssello, World!", 100, 100);
  //       alert("1st");
        ctx.clearRect(0, 0, 1024, 128);
        ctx.fillStyle = color;
        ctx.fillRect(10, 10, 100, 50);
           }
    else {
      prompt( color + " is not a unsupported color.");
    }
    }
    
    
    /*
     * Triangle. 5 points.
     *
     * Write a function that draws a right triangle on the canvas. The triangle
     * should be outlined only, not filled. You'll need to prompt the user for the
     * lengths of each of the sides. By default, position your triangle so that
     * its leftmost and topmost points have X- and Y-coordinates of 10.
     *
     * When drawing your right triangles, the left side shall be designated as the
     * first side and will be smallest of the three side lengths. The bottom side
     * shall be designated as the second side and will be second smallest of the
     * three side lengths. The hypotenuse shall be designated as the third side
     * and will be the largest of the three side lengths.
     *
     * You'll need to use the appropriate Canvas API methods to do this. If you're
     * unsure what your code should do, click the "Example" button to see. When you
     * click the "Triangle" button, your output should match that of the example.
     *
     * Certain values, such as side lengths that make it impossible to create a
     * valid right triangle, should be prohibited. Check the example to see what
     * your code should do in these instances.
     *
     * Here is a list of prohibited values:
     *     - Combinations of side lengths that would make it impossible to draw
     *       a valid triangle
     *     - Combinations of side lengths that would make it impossible to draw
     *       the triangle within the bounds of the canvas
     */
    
    
    function drawTriangle() {
      const canvas = document.getElementById("canvas4");
      const ctx = canvas.getContext("2d");
      sides = []
      let side1 = Number(prompt("Side 1:"));
      let side2 = Number(prompt("Side 2:"));
      let side3 = Number(prompt("Side 3:"));
      sides.push(side1);
      sides.push(side2);
      sides.push(side3);
      sides.sort(function(a, b){return a-b});
      let a = sides[0] + 10;
      let b = sides[1] + 10;
      if((sides[0]**2 + sides[1]**2) == sides[2]**2 && a <= 512 && b <= 1024){
        ctx.clearRect(0, 0, 1024, 512);
          ctx.beginPath();          
          ctx.moveTo(10,10);
          ctx.lineTo(10, a);
          ctx.lineTo(b, a);
          ctx.lineTo(10, 10)
          ctx.stroke();
          ctx.closePath();
      }
      else {
        alert("This is not a valid right triangle.");
      }
    }
    
    
    /*
     * Smile. 7 points.
     *
     * Write a function that draws a smiley face on the canvas. The head should
     * be a perfect circle with a radius specified by the user. The eyes should
     * also be perfect circles with radii that are 10% of that of the head. The
     * radius of the mouth should be 70% of that of the head. A nose is not
     * required, and the position of the eyes and mouth are up to you (provided)
     * they are on the face.
     *
     * You'll need to use the appropriate Canvas API methods to do this. If you're
     * unsure what your code should do, click the "Example" button to see. When you
     * click the "Smile" button, your output should match that of the example.
     *
     * Certain values, such as radii that are logically too small or practically
     * too large, should be prohibited. Check the example to see what your code
     * should do in these instances.
     */
    function drawSmileyFace() {
      const canvas = document.getElementById("canvas5");
      const ctx = canvas.getContext("2d");
      let face = prompt("Radius:");
      let eyeradius = face*0.1
      let smile = face*0.7;
 if(isNaN(face)){
   alert("Your input is not a number.");
 }
else if(face < 1){
   alert("Your radius is too small.")
 }
else if(face > ((canvas.height-24)/2)){
   alert("The smiley face will not fit on the canvas.");
 }
 else{
   face =Number(face);
  //  alert(face);
  ctx.clearRect(0, 0, 1024, 512);
  ctx.beginPath();
  let facecenterx=face+12;
  let facecentery=face+12;
  ctx.arc(facecenterx, facecentery, face , 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  let eyeleftx=facecenterx - face*0.35;
  let eyelefty=facecentery - face*0.35;
  ctx.arc(eyeleftx, eyelefty, eyeradius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  let eyerightx=facecenterx + face*0.35;
  let eyerighty=facecentery - face*0.35;
  ctx.arc(eyerightx, eyerighty, eyeradius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(facecenterx, facecentery, smile , 1*Math.PI, 2 * Math.PI, true);
  ctx.stroke();
  ctx.closePath();
 }
     
    }
    
    
    /*
     * Star. 9 points.
     *
     * Write a function that draws a five-point star on the canvas. Prompt the
     * user for the outer radius (i.e., a circle that would connect each of the
     * star's outer points) and inner radius (i.e., a circle that would connect
     * each of the star's inner points). The center of the star should be placed
     * at [125, 125].
     *
     * You'll need to use the appropriate Canvas API methods to do this. If you're
     * unsure what your code should do, click the "Example" button to see. When you
     * click the "Star" button, your output should match that of the example.
     *
     * Certain values, such as radii that are logically too small or practically
     * too large, should be prohibited. Check the example to see what your code
     * should do in these instances.
     */
    
    
    function drawStar() {
      const canvas = document.getElementById("canvas6");
      const canvasCtx = canvas.getContext("2d");
      let alpha = (2 * Math.PI) / 10; 
      let radiusout = prompt("Outer Radius:");
      let radiusin = prompt("Inner Radius:");
      let starXY = [125,125]
      let r;
      canvasCtx.clearRect(0, 0, 1024, 512);
      if(isNaN(radiusout)){
        alert("One of your inputs is not a number.");
      }
     else if(radiusout < 1){
        alert("Your star is too small.")
      }
     else if(radiusout > ((canvas.height-24)/2)){
        alert("The star will not fit on the canvas.");
        
      }
      else{
        if(isNaN(radiusin)){
          alert("One of your inputs is not a number.");
        }
       else if(radiusin < 1){
          alert("Your star is too small.")
        }
       else if(radiusin > ((canvas.height-24)/2)){
          alert("The star will not fit on the canvas.");
        }
        else if (radiusin >= radiusout){
          alert("Your outer radius must be larger than your inner radius.");
        }
        else {

      canvasCtx.beginPath();
      
      for(let i = 11; i != 0; i--)
      {
        
          if(i%2 == 1){
            r= radiusout;
          }
          else{
            r= radiusin;
          }
          let omega = alpha * i;
          canvasCtx.lineTo((r * Math.sin(omega)) + starXY[0], (r * Math.cos(omega)) + starXY[1]);
      }
      canvasCtx.closePath();
      canvasCtx.stroke();
    }
      }
    }
    
    
    /*
     * Stop Sign. 7 points.
     *
     * Write a function that draws a stop sign. The stop sign should be outlined
     * in black, but filled red. At the center of the stop sign, the same height
     * as the length of the sides, should be the word STOP (all capitals, white).
     * Each side length should be 80px.
     *
     * You'll need to use the appropriate Canvas API methods to do this. If you're
     * unsure what your code should do, click the "Example" button to see. When you
     * click the "Stop Sign" button, your output should match that of the example.
     *
     * The leftmost and topmost sides should have X- and Y-coordinates of 10.
     */
    
    
    function drawStopSign() {
      const canvas = document.getElementById("canvas7");
      const ctx = canvas.getContext("2d");
      let numberOfSides = 8;
      let size = 80;
     let Xcenter = 100;
     let Ycenter = 100;
     let offset= 1 / 16 * 2 * Math.PI;
  
  ctx.beginPath();
  ctx.moveTo (Xcenter +  size * Math.cos(offset), Ycenter +  size *  Math.sin(offset));          
  
  for (var i = 1; i <= numberOfSides; i += 1) 
  {
      ctx.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides + offset), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides + offset));
  }
  
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 1;
  ctx.stroke();
  }
    
    
    
    /*
     * Pyramid. 7 points.
     *
     * Write a function that draws a block pyramid, where the user specifies the
     * side length of each block. By default, we'll draw a pyramid with a base
     * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
     * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
     * height of the canvas.
     *
     * You'll need to use the appropriate Canvas API methods to do this. If you're
     * unsure what your code should do, click the "Example" button to see. When you
     * click the "Pyramid" button, your output should match that of the example.
     *
     * Certain values, such as lengths that are logically too small or practically
     * too large, should be prohibited. Check the example to see what your code
     * should do in these instances.
     */
    
    
    function drawPyramid() {
    let sidelength= prompt("Length:");
    ctx.clearRect(0, 0, 1024, 512);
    ctx.beginPath();
    ctx.rect(xcoord,ycoord,width,height);
    }
    
    
    /*
     * House. 7 points.
     *
     * Write a function that draws a two-story house. The house should have a
     * rectangular frame, a front door, two square windows on the first floor,
     * two square windows on the second floor, and a triangular roof. Your house
     * and front door should be painted a solid color of the user's choice (these
     * colors should be different). The windows should be light blue, and the roof
     * should be gray. Give the leftmost point of your house an X-coordinate of
     * 150, and the bottom of your house a Y-coordinate of 10 less than the
     * height of the canvas.
     *
     * Support the following front door and/or house colors:
     *     - blue
     *     - brown
     *     - green
     *     - orange
     *     - purple
     *     - red
     *     - yellow
     *
     * You'll need to use the appropriate Canvas API methods to do this. If you're
     * unsure what your code should do, click the "Example" button to see. When you
     * click the "House" button, your output should match that of the example.
     *
     * Check the example to see what your code should do if the user enters an
     * unsupported color.
     */
    
    
    function drawHouse() {
    alert("s")
    }