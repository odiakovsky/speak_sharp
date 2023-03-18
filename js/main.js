const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Set canvas dimensions
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

// Create an array of 100 random points within the rectangle
let points = [];
for (let i = 0; i < 5000; i++) {
    points.push({
        x: Math.floor(Math.random() * (canvas.width - 3)),
        y: Math.floor(Math.random() * (canvas.height - 3)),
        dx: (Math.random() - 0.5) * 2 / 4, // Random horizontal velocity
        dy: (Math.random() - 0.5) * 2 / 4, // Random vertical velocity
    });
}

// Draw the points on the canvas and move them
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    points.forEach(point => {
        // Draw the point
        ctx.fillStyle = "#000000";
        ctx.fillRect(point.x, point.y, 1, 1);

        // Move the point
        point.x += point.dx;
        point.y += point.dy;

        // Bounce the point off the edges of the rectangle
        if (point.x < 0 || point.x > canvas.width - 3) {
            point.dx = -point.dx;
        }
        if (point.y < 0 || point.y > canvas.height - 3) {
            point.dy = -point.dy;
        }
    });
    requestAnimationFrame(draw);
}

// Start the animation loop
draw();
