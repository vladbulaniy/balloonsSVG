var svg   = document.createElementNS("http://www.w3.org/2000/svg", "svg");
var svgNS = svg.namespaceURI;
var svgArea = document.getElementById('svgArea');
var count = 10,
    ballons = [],
    opts = {
        radius: 20,
        defaultSpeed: 5
    };
var svgWidth = svgRect.width.baseVal.value;
var svgHeight = svgRect.height.baseVal.value;
console.log(svgWidth);
console.log(svgHeight);
var test = svgRect.getBoundingClientRect()
console.log(svgRect.getBoundingClientRect().width);





var getBall = function(x,y){
    this.radius = 30;
    this.speed = 5;
    this.x = x;
    this.y = y;
    this.directionAngle = Math.round(Math.random());
    this.direction = {
        x: Math.cos(this.directionAngle) * this.speed,
        y: Math.sin(this.directionAngle) * this.speed
    };

    var ballColor = "rgb("+ Math.floor(Math.random() * (226))+","+ Math.floor(Math.random() * (226)) +","+ Math.floor(Math.random() * (226))+")";
    var circle = document.createElementNS(svgNS,'circle');
    circle.setAttribute('cx', this.x);
    circle.setAttribute('cy', this.y);
    circle.setAttribute('r',this.radius);
    circle.setAttribute('fill',ballColor);
    svgArea.appendChild(circle);

    this.update = function(){
        this.border();
        this.x += this.direction.x;
        this.y += this.direction.y;
    };
    this.border = function(){
        if (this.x >= svgWidth - this.radius || this.x <= this.radius) {
            this.direction.x *= -1;
        }
        if (this.y >= svgHeight - this.radius || this.y <= this.radius) {
            this.direction.y *= -1;

        }
        if (this.x > svgWidth - this.radius) this.x = svgWidth - this.radius;
        if (this.y > svgHeight - this.radius) this.y = svgHeight - this.radius;
        if (this.x < this.radius) this.x = this.radius;
        if (this.y < this.radius) this.y = this.radius;
    };
    this.draw = function(){
        circle.setAttribute('cx', this.x);
        circle.setAttribute('cy', this.y);
        svgArea.appendChild(circle);
    };
};

function loop(){
    window.requestAnimationFrame(loop);

    for (var i = 0; i < ballons.length; i++){
        // drawArea.clearRect(0,0,canvasWidth,canvasHeight);
        ballons[i].update();
        ballons[i].draw();
    }
}

function getCircle(e) {
    console.log('test worked');
    if (count > 0){
        ballons.push(new getBall( e.offsetX, e.offsetY ) );
    }
     if (count === 10) window.requestAnimationFrame(loop);
    count--;
}


svgArea.addEventListener("click", getCircle);

/*
function getBall(x, y) {
    var ballColor = "rgb("+ Math.floor(Math.random() * (226))+","+ Math.floor(Math.random() * (226)) +","+ Math.floor(Math.random() * (226))+")";
    var circle = document.createElementNS(svgNS,'circle');
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r',20);
    circle.setAttribute('fill',ballColor);
    svgArea.appendChild(circle);
}
    */