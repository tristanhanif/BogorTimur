window.onload = function() {
    canv = document.getElementById("gc");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000 / 15);
}

// Start the snake in the middle of the canvas
px = py = 10; // Position of snake
gs = tc = 20; // Grid size and tile count
ax = ay = 15; // Apple position
xv = yv = 0; // Velocity
trail = [];
tail = 5;

function game() {
    // Update snake position
    px += xv;
    py += yv;

    // Wrap around the canvas
    if (px < 0) {
        px = tc - 1;
    }
    if (px > tc - 1) {
        px = 0;
    }
    if (py < 0) {
        py = tc - 1;
    }
    if (py > tc - 1) {
        py = 0;
    }

    // Draw the background with a red effect
    ctx.fillStyle = "black"; // Set background color to black
    ctx.fillRect(0, 0, canv.width, canv.height);

    // Create a red overlay
    ctx.fillStyle = "rgba(255, 0, 0, 0.1)"; // Red color with transparency
    ctx.fillRect(0, 0, canv.width, canv.height);

    // Draw the snake
    for (var i = 0; i < trail.length; i++) {
        // Distinguish head and tail colors
        ctx.fillStyle = (i === trail.length - 1) ? "lime" : "green"; // Head is lime, body is green
        ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);

        // Check for collision with itself
        if (trail[i].x == px && trail[i].y == py) {
            tail = 5;
        }
    }

    // Add current position to the trail
    trail.push({ x: px, y: py });
    while (trail.length > tail) {
        trail.shift();
    }

    // Check if the snake eats the apple
    if (ax == px && ay == py) {
        tail++;
        ax = Math.floor(Math.random() * tc);
        ay = Math.floor(Math.random() * tc);
    }

    // Draw the apple
    ctx.fillStyle = "white";
    ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
}

function keyPush(evt) {
    switch (evt.keyCode) {
        case 37: // Left arrow
            xv = -1; yv = 0;
            break;
        case 38: // Up arrow
            xv = 0; yv = -1;
            break;
        case 39: // Right arrow
            xv = 1; yv = 0;
            break;
        case 40: // Down arrow
            xv = 0; yv = 1;
            break;
    }
}