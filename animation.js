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
          p.createCanvas(800 + radius, 200);
          p.frameRate(5);
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
          p.background(0);
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

//////////////////////////////////////////////////////////////
//*

      var mydata = [
        [
          [1.9367, 2.3652, 2.4827, 1.8166],
          [3.9038, 1.8409, 2.2036, 3.1511],
          [0.2552, 0.1490, 0.1990, 0.2157],
          [0.07739, 0.00055, 0.00056, 0.01476]

        ],
        [
          [3.2762, 3.5416, 3.9975, 3.4188],
          [13.6197, 8.2917, 8.3531, 13.3360],
          [0.9262, 0.6457, 0.6900, 0.8973],
          [0.2360, 0.0014, 0.0014, 0.2303]

        ],
        [
          [13.2644, 14.9052, 15.0216, 14.2499],
          [91.1846, 71.3265, 43.4039, 72.5909],
          [5.0538, 5.6497, 3.6568, 5.6683],
          [3.5358, 0.0053, 0.0054, 0.5562]

        ],
        [
          [22.5851, 27.4730, 27.4945, 26.2476],
          [160.4200, 131.8100, 74.7942, 129.8190],
          [8.6890, 10.7297, 6.2146, 10.4018],
          [6.6513, 0.0088, 0.0088, 0.3174]

        ]
      ];

      function createData(index) {
        //bar chart data
        var data2 = {
          labels: ["vaporization", "condensation", "melting", "solidification"],
          datasets: [
            {
              label: "Neighborhood search",
              data: mydata[index][0],
              backgroundColor: ["#FFEB3B", "#FFEB3B", "#FFEB3B", "#FFEB3B"
              ],
              borderColor: [
                "#FFFF00", "#FFFF00", "#FFFF00", "#FFFF00"
              ],
              borderWidth: 1
            },
            {
              label: "Constraint projection",
              data: [20, 35, 40, 60],
              data: mydata[index][1],
              backgroundColor: [
                "rgba(50,150,200,0.3)", "rgba(50,150,200,0.3)", "rgba(50,150,200,0.3)", "rgba(50,150,200,0.3)"
              ],
              borderColor: [
                "rgba(50,150,200,1)", "rgba(50,150,200,1)", "rgba(50,150,200,1)", "rgba(50,150,200,1)"
              ],
              borderWidth: 1
            },
            {
              label: "Heat transfer",
              data: mydata[index][2],
              backgroundColor: ["#F06292", "#F06292", "#F06292", "#F06292",
              ],
              borderColor: [
                "#880E4F",
                "#880E4F",
                "#880E4F",
                "#880E4F"
              ],
              borderWidth: 1
            },
            {
              label: "Constraint manager",
              data: mydata[index][3],
              backgroundColor: [
                "#FF9100",
                "#FF9100",
                "#FF9100",
                "#FF9100"
              ],
              borderColor: [
                "#FF9100",
                "#FF9100",
                "#FF9100",
                "#FF9100"
              ],
              borderWidth: 1
            }
          ]
        };
        return data2;
      }

      //options
      function createOption(mytitle){
        var options2 = {
          responsive: true,
          title: {
            display: true,
            position: "top",
            text: mytitle,
            fontSize: 24,
            fontColor: "#fff"
          },
          legend: {
            display: true,
            position: "bottom",
            labels: {
              fontColor: "fff",
              fontSize: 18
            }
          },
          scales: {
            yAxes: [{
                ticks: {
                  min: 0
                }
              }]
          }
        };
        return options2;
      };

      var ctx2 = document.getElementById("myBar1").getContext("2d");
      var ctx3 = document.getElementById("myBar2").getContext("2d");
      var ctx4 = document.getElementById("myBar3").getContext("2d");
      var ctx5 = document.getElementById("myBar4").getContext("2d");

      //create Chart class object
      var chart = new Chart(ctx2, {
        type: "bar",
        data: createData(0),
        options: createOption("8K particles")
      });

      //create Chart class object
      new Chart(ctx3, {
        type: "bar",
        data: createData(1),
        options: createOption("16K particles")
      });
      //create Chart class object
      new Chart(ctx4, {
        type: "bar",
        data: createData(2),
        options: createOption("64K particles")
      });
      //create Chart class object
      new Chart(ctx5, {
        type: "bar",
        data: createData(3),
        options: createOption("128K particles")
      });




///////////////////////////////////////////////
      var ctx = document.getElementById("myFunction");//.getContext("2d");
      var xLabel = [];
      var lim = 50;
      for (var i = 0; i <= lim; i += 0.2) {
        xLabel.push(i);
      }
      var data = {
        labels: xLabel,
        datasets: [
          {
            label: "Density",
            function: function (x) {
              return 1 - 1 / (1 + Math.pow((1 + (1 + 12 / lim)), lim / 2 - x));
            },
            borderColor: "rgba(153, 102, 255, 1)",
            data: [],
            fill: false,
            pointRadius: 0
          },
          {
            label: "Gravity",
            function: function (x) {
              return 10.8 / Math.log((lim + 0.02) / 0.02) * Math.log((lim + 0.02) / (lim + 0.02 - x)) - 9.8;
              //return x * Math.log(x);
            },
            borderColor: "rgba(255, 206, 86, 1)",
            data: [],
            fill: false,
            pointRadius: 0
          }]
      };

      Chart.pluginService.register({
        beforeInit: function (chart) {
          var data = chart.config.data;
          for (var i = 0; i < data.datasets.length; i++) {
            for (var j = 0; j < data.labels.length; j++) {
              var fct = data.datasets[i].function,
                      x = data.labels[j],
                      y = fct(x);
              data.datasets[i].data.push(y);
            }
          }
        }
      });

      var myBarChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
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
          /*legend: {
            display: true,
            position: "bottom",
            labels: {
              fontColor: "#fff",
              fontSize: 20
            }
          },*/
          title: {
            display: true,
            position: "top",
            text: "Functions",
            fontSize: 24,
            fontColor: "#fff"
          },
        }
      });

//*/
