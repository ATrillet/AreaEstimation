
var points = [];
let slider;
var num;

function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(3, 100, 3);
  slider.position(175, 320);
}


function polygon(num_points) {
  stroke('purple');
  strokeWeight(10);
  var i;
  var j = num_points;
  var x;
  var y;
  
  for (i = 0 ; i < j ; i++) {
      angle = TWO_PI/j*i;
      x = cos(angle)*100; 
      y = sin(angle)*100;
      point(x, y);
      var p = createVector(x, y);
      points.push(p);
  }
  if (points.length > j) {
    points.pop();
  }
}



function draw() {
  num = slider.value();
  clear();
  points = [];
  translate(250,200);
  polygon(num);
  stroke('black');
  strokeWeight(5);
  for (var i = 0 ; i < num ; i++) {
    line(points[i].x, points[i].y, points[(i+1)%num].x, points[(i+1)%num].y);
  }
  num++;
  num%=100;
}
