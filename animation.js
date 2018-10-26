/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var sketch = function (p) {
        
        

  var system;
  var radius = 40;

  p.setup = function () {

    p.colorMode(p.HSB, 360, 100, 100);
    p.noStroke();
    p.createCanvas(800 + radius, 100);
    p.frameRate(10);
    system = new ParticleSystem(p.createVector(p.width / 2, 50));

    var i = 0
    for (; i < 10; i++) {
      system.addParticle(radius * i + radius, p.height / 2, 255);
    }
    for (; i < 20; i++) {
      system.addParticle(radius * i + radius, p.height / 2, 0);
    }
  }

  p.draw = function () {
    p.background(255);
    //system.addParticle();
    system.run();
  }





  // A simple Particle class
  var Particle = function (position, color) {
    this.acceleration = p.createVector(0, 0);
    //this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.velocity = p.createVector(0, 0);
    this.position = position.copy();
    this.lifespan = 255;
    this.color = color;
    this.colorIni = color;
    this.rr = 0;
    this.ll = 0;
  };

  Particle.prototype.run = function () {
    this.heat();
    this.update();
    this.display();
  };
  Particle.prototype.run2 = function () {
    this.update();
    this.display();
  };

  // Method to update position
  Particle.prototype.update = function () {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    //this.lifespan -= 25;

  };

    // Method to display
  Particle.prototype.display = function () {
    p.fill(this.color, 90, 90);
    //fill(this.lifespan, 90, 90);
    p.ellipse(this.position.x, this.position.y, radius, radius);
  };
  // Method to update collition
  Particle.prototype.heat = function () {
    var v = system.particles;
    var c = this.color;
    var fac = 1;
    if (this.ll >= 0) {
      c += v[this.ll].color;
      fac++;
    }
    if (this.rr < system.particles.length) {
      c += v[this.rr].color;
      fac++;
    }

    this.color = c / fac;
  };

  // Is the particle still useful?
  Particle.prototype.isDead = function () {
    return this.lifespan < 0;
  };

  var ParticleSystem = function (position) {
    this.origin = position.copy();
    this.particles = [];
  };

  ParticleSystem.prototype.addParticle = function (x, y, color) {
    var par = new Particle(p.createVector(x, y), color);

    //*
    if (this.particles.length == 0) {
      par.ll = -1;
      par.rr = 1;
    } else {
      par.ll = this.particles.length - 1;
      par.rr = this.particles.length + 1;
    }//*/
    this.particles.push(par);

  };
  var iter = 0;
  ParticleSystem.prototype.run = function () {

    if (iter > 70) {
      for (var i = this.particles.length - 1; i >= 0; i--) {
        var par = this.particles[i];
        par.color = par.colorIni;
      }
      iter = 0;
    }

    if(iter > 5 ){
      for (var i = this.particles.length - 1; i >= 0; i--) {
        var par = this.particles[i];
        par.run();
      }
    }
    else
      for (var i = this.particles.length - 1; i >= 0; i--) {
        var par = this.particles[i];
        par.run2();
      }
    iter++;
  };

};



new p5(sketch, window.document.getElementById('heat'));
new p5(sketch, window.document.getElementById('heat2'));

//////////////////////////////////////////////
var ctx = document.getElementById("myFunction");//.getContext("2d");
var xLabel = [];
var lim = 20;
var aum = .25;
for (var i = 0; i <= lim; i += aum) {
  xLabel.push(i);
}
function createDataFunction() {
  var data = {
    labels: xLabel,
    datasets: [
      {
        label: "Density",
        function: function (x) {
          return 1 - 1 / (1 + Math.pow((1 + (1 + 12 / lim)), lim / 2 - x));
        },
        fillColor: "black",
        strokeColor: "rgba(255,235,59,0.8)",
        //highlightFill: "rgba(255,235,59,0.75)",
        //highlightStroke: "rgba(255,235,59,1)",
        radius: 0,
        data: [],
      },
      {
        label: "Gravity",
        function: function (x) {
          return 10.8 / Math.log((lim + 0.02) / 0.02) * Math.log((lim + 0.02) / (lim + 0.02 - x)) - 9.8;
          //return x * Math.log(x);
        },
        "borderColor": "#0ff",
        data: [],
      }]
  };

  for (var i = 0; i < data.datasets.length; i++) {
    for (var j = 0; j < data.labels.length; j++) {
      var fct = data.datasets[i].function;
      var x = data.labels[j];
      var y = fct(x);
      data.datasets[i].data.push(y);
    }
  }
  return data;
}
function createOptionFunction(){
  var options = {
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }],
      xAxes: [{
          display: false
        }]
    },
    legend: {
      display: true,
      position: "bottom",
      labels: {
        fontColor: "#fff",
        fontSize: 34
      }
    },
    title: {
      display: true,
      position: "top",
      text: "Functions",
      fontSize: 24,
      fontColor: "#fff"
    },
    grid:true,
  };
  return options;
}
/*
var v = createDataFunction();
console.log(v.labels);
console.log(v.datasets[0].data);
console.log(v.datasets[1].data);
*/