var s = function(p){
  const counts = 5000;
  const round = 200;
  const dpf = 100;
  const total = 0;
  let i = 0;
  const dots = [];
  let insides = 0;

  class Dot {
    constructor(x, y) {
      colorMode(HSB, 100);
      this.x = x;
      this.y = y;
      if (1 >= pow(abs(this.x), 2) + pow(abs(this.y), 2)) {
        this.c = color(0, 36+random(50), 100);
        insides++;
      } else {
        this.c = color(50+random(20), 100+random(50), 100);
      }
    }
    show() {
      noStroke();
      let c = this.c;
      fill(c);
      circle(this.x * round, this.y * round, 3);
    }


  }

  p.setup = function {
    createCanvas(round * 2, round * 2 + round * 2 / 5);
    background(255);
    smooth();
    // push();
    // fill(255);
    // noStroke();
    // arc(0, 0, width * 2, height * 2, 0, HALF_PI, PIE);
    // stroke(15);
    // // line(0, 0, round * cos(QUARTER_PI), round * sin(QUARTER_PI));
    // pop();
    frameRate(30);
  }

  p.draw = function() {
    // noStroke();
    // fill(255,10);
    // rect(0, 0, width, width);
    translate(round, round);
    if (dots.length < counts) {
      for (i = 0; i < dpf; i++) {
        if (dots.length > counts) {
          break;
        }
        c = new Dot(random(-1, 1), random(-1, 1));
        dots.push(c);
        c.show();
        i++;
      }
    }
    dots.forEach((c)=>{
      c.show();
    });
    resetMatrix();
    noStroke();
    fill(255);
    rect(0, width, width, height);
    fill(55);
    textSize(20);
    var ratio = 4 * insides / dots.length;
    text(insides + "/" + dots.length + "=" + ratio, 0, height - 30);
    }
  }

  var p5inSlide = new p5(s);
