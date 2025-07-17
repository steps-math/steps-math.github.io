---
layout: base.njk
title: Trigonometric functions and the unit circle
category: limits
description: Lecture 17
date: 2025-07-22
---

# Trigonometric functions and the unit circle

## The unit circle

The unit circle is a circle with radius 1 centered at the origin (0,0) in the coordinate plane. It's fundamental to understanding trigonometric functions $sin(x)$ and $cos(x)$.

### Interactive Unit Circle Visualization

<div style="text-align:center; margin:2em 0;">
  <canvas id="unitCircle" width="400" height="400"
          style="border:1px solid #ccc; background:#fafafa;"></canvas>
  <br>
  <input type="range" id="thetaSlider" min="0" max="6.283" step="0.01" value="0.52"
         style="width:400px;">
  <div>θ = <span id="thetaVal">0.52</span> rad = <span id="thetaPi">π/6</span></div>
</div>

<script>
(function(){
  const canvas = document.getElementById('unitCircle');
  const ctx    = canvas.getContext('2d');
  const slider = document.getElementById('thetaSlider');
  const display= document.getElementById('thetaVal');
  const displayPi = document.getElementById('thetaPi');
  const cx = canvas.width/2, cy = canvas.height/2, r = 150;

  function toPiFraction(theta) {
    const pi = Math.PI;
    const tolerance = 0.01;
    
    // Check for common fractions
    const fractions = [
      { value: 0, text: "0" },
      { value: pi/6, text: "π/6" },
      { value: pi/4, text: "π/4" },
      { value: pi/3, text: "π/3" },
      { value: pi/2, text: "π/2" },
      { value: 2*pi/3, text: "2π/3" },
      { value: 3*pi/4, text: "3π/4" },
      { value: 5*pi/6, text: "5π/6" },
      { value: pi, text: "π" },
      { value: 7*pi/6, text: "7π/6" },
      { value: 5*pi/4, text: "5π/4" },
      { value: 4*pi/3, text: "4π/3" },
      { value: 3*pi/2, text: "3π/2" },
      { value: 5*pi/3, text: "5π/3" },
      { value: 7*pi/4, text: "7π/4" },
      { value: 11*pi/6, text: "11π/6" },
      { value: 2*pi, text: "2π" }
    ];
    
    for (let fraction of fractions) {
      if (Math.abs(theta - fraction.value) < tolerance) {
        return fraction.text;
      }
    }
    
    // If no exact match, show as decimal fraction of π
    const piFraction = theta / pi;
    if (Math.abs(piFraction - Math.round(piFraction)) < tolerance) {
      return Math.round(piFraction) + "π";
    }
    return (theta / pi).toFixed(2) + "π";
  }

  function draw(theta) {
    // clear
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    // draw axes
    ctx.strokeStyle = "#ccc";
    ctx.lineWidth = 1;
    // x-axis
    ctx.beginPath();
    ctx.moveTo(0, cy);
    ctx.lineTo(canvas.width, cy);
    ctx.stroke();
    // y-axis
    ctx.beginPath();
    ctx.moveTo(cx, 0);
    ctx.lineTo(cx, canvas.height);
    ctx.stroke();
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    
    // circle
    ctx.beginPath();
    ctx.arc(cx,cy,r,0,Math.PI*2);
    ctx.stroke();

    // point on circle
    const x = cx + r*Math.cos(theta);
    const y = cy - r*Math.sin(theta);

    // angle arc
    ctx.strokeStyle = "#fa8d07";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx, cy, 30, 0, -theta, true);
    ctx.stroke();
    
    // radius line
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx,cy);
    ctx.lineTo(x,y);
    ctx.stroke();

    // projection lines
    ctx.setLineDash([5,5]);
    ctx.lineWidth = 3;
    
    // sin projection (vertical) - color based on sign
    ctx.strokeStyle = Math.sin(theta) >= 0 ? "#0066cc" : "#cc0000";
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x,cy);
    ctx.stroke();
    
    // cos projection (horizontal) - color based on sign
    ctx.strokeStyle = Math.cos(theta) >= 0 ? "#0066cc" : "#cc0000";
    ctx.beginPath();
    ctx.moveTo(x,cy);
    ctx.lineTo(cx,cy);
    ctx.stroke();
    
    ctx.setLineDash([]);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000";

    // labels
    ctx.fillStyle = "#000";
    ctx.font = "14px sans-serif";
    // cosθ label - positioned right next to the horizontal projection line
    ctx.fillText("cos θ", (x + cx - 35) / 2, cy + 15);
    // sinθ label - positioned right next to the vertical projection line
    ctx.fillText("sin θ", x + 10, (y + cy + 10)/2);

    // draw point
    ctx.beginPath();
    ctx.arc(x,y,6,0,2*Math.PI);
    ctx.fill();
    
    // label axes
    ctx.fillStyle = "#111";
    ctx.font = "16px sans-serif";
    ctx.fillText("x", canvas.width - 10, cy - 5);
    ctx.fillText("y", cx + 5, 15);
    
    // mark key points on unit circle
    ctx.fillStyle = "#222";
    ctx.font = "12px sans-serif";
    const keyPoints = [
      { angle: Math.PI/2, label: "π/2", xOffset: -15, yOffset: -5 },
      { angle: Math.PI, label: "π", xOffset: -25, yOffset: -5 },
      { angle: 3*Math.PI/2, label: "3π/2", xOffset: -25, yOffset: 15 }
    ];
    
    keyPoints.forEach(point => {
      const px = cx + r * Math.cos(point.angle);
      const py = cy - r * Math.sin(point.angle);
      ctx.fillText(point.label, px + point.xOffset, py + point.yOffset);
    });
  }

  slider.addEventListener('input', e => {
    const θ = parseFloat(e.target.value);
    display.textContent = θ.toFixed(2);
    displayPi.textContent = toPiFraction(θ);
    draw(θ);
  });

  displayPi.textContent = toPiFraction(0.52);
  draw(0.52);
})();
</script>

### ASTC rule

The ASTC rule is an acronym for remembering the **positive** signs of the trigonometric functions in each quadrant of the unit circle.

- A: All
- S: Sine
- T: Tangent
- C: Cosine

<div style="text-align:center; margin:2em 0;">
  <canvas id="astcQuadrants" width="300" height="300"
          style="border:1px solid #ccc; background:#fafafa;"></canvas>
</div>

<script>
(function(){
  const canvas = document.getElementById('astcQuadrants');
  const ctx = canvas.getContext('2d');
  const cx = canvas.width/2, cy = canvas.height/2, r = 100;

  // Draw axes
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, cy);
  ctx.lineTo(canvas.width, cy);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx, 0);
  ctx.lineTo(cx, canvas.height);
  ctx.stroke();

  // Draw unit circle
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI*2);
  ctx.stroke();

  // Quadrant labels with colors
  ctx.font = "bold 18px sans-serif";
  
  // Q1: All positive (green)
  ctx.fillStyle = "#006600";
  ctx.fillText("A", cx + 35, cy - 35);
  ctx.font = "12px sans-serif";
  ctx.fillText("All", cx + 25, cy - 15);
  
  // Q2: Sine positive (blue)
  ctx.fillStyle = "#0066cc";
  ctx.font = "bold 18px sans-serif";
  ctx.fillText("S", cx - 35, cy - 35);
  ctx.font = "12px sans-serif";
  ctx.fillText("Sin", cx - 45, cy - 15);
  
  // Q3: Tangent positive (orange)
  ctx.fillStyle = "#ff6600";
  ctx.font = "bold 18px sans-serif";
  ctx.fillText("T", cx - 35, cy + 35);
  ctx.font = "12px sans-serif";
  ctx.fillText("Tan", cx - 45, cy + 15);
  
  // Q4: Cosine positive (red)
  ctx.fillStyle = "#cc0000";
  ctx.font = "bold 18px sans-serif";
  ctx.fillText("C", cx + 35, cy + 35);
  ctx.font = "12px sans-serif";
  ctx.fillText("Cos", cx + 25, cy + 15);

  // Add quadrant numbers
  ctx.fillStyle = "#666";
  ctx.font = "11px sans-serif";
  ctx.fillText("Q1", cx + 40, cy - 70);
  ctx.fillText("Q2", cx - 40, cy - 70);
  ctx.fillText("Q3", cx - 40, cy + 70);
  ctx.fillText("Q4", cx + 40, cy + 70);
})();
</script>


## Sine and cosine

> Trigonometry cheat sheet: [link](https://www.math.net/trigonometry-cheat-sheet)

The sine and cosine functions are defined as the y and x coordinates of a point on the unit circle, respectively.

### Properties

1. They are periodic with period $2\pi$. ($sin(x + 2\pi) = sin(x)$ and $cos(x + 2\pi) = cos(x)$)
2. They are bounded between -1 and 1.
3. They are continuous.
4. $\sin(x) = \cos(\frac{\pi}{2} - x)$
5. $\cos(x) = \sin(\frac{\pi}{2} - x)$



### Graphs

The graphs of the sine and cosine functions are shown below.

<div style="text-align:center; margin:2em 0;">
  <canvas id="trigGraphs" width="600" height="400"
          style="border:1px solid #ccc; background:#fafafa;"></canvas>
  <br>
  <input type="range" id="xSlider" min="-2" max="2" step="0.01" value="0"
         style="width:400px;">
  <div>x = <span id="xVal">0.00</span>π rad</div>
</div>

<script>
(function(){
  const canvas = document.getElementById('trigGraphs');
  const ctx = canvas.getContext('2d');
  const slider = document.getElementById('xSlider');
  const display = document.getElementById('xVal');
  const width = canvas.width, height = canvas.height;
  const margin = 50;
  const graphWidth = width - 2*margin;
  const graphHeight = height - 2*margin;

  function drawGraphs(xValue) {
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw axes
    ctx.strokeStyle = "#ccc";
    ctx.lineWidth = 1;
    // x-axis
    ctx.beginPath();
    ctx.moveTo(margin, height/2);
    ctx.lineTo(width - margin, height/2);
    ctx.stroke();
    // y-axis
    ctx.beginPath();
    ctx.moveTo(width/2, margin);
    ctx.lineTo(width/2, height - margin);
    ctx.stroke();
    
    // Draw grid lines
    ctx.strokeStyle = "#eee";
    for (let i = -6; i <= 6; i++) {
      const x = width/2 + i * graphWidth/12;
      ctx.beginPath();
      ctx.moveTo(x, margin);
      ctx.lineTo(x, height - margin);
      ctx.stroke();
    }
    
    // Draw π/2 grid lines (dashed)
    ctx.strokeStyle = "#f0f0f0";
    ctx.setLineDash([3,3]);
    for (let i = -5; i <= 5; i += 2) {
      const x = width/2 + i * graphWidth/12;
      ctx.beginPath();
      ctx.moveTo(x, margin);
      ctx.lineTo(x, height - margin);
      ctx.stroke();
    }
    ctx.setLineDash([]);
    for (let i = -2; i <= 2; i++) {
      const y = height/2 - i * graphHeight/4;
      ctx.beginPath();
      ctx.moveTo(margin, y);
      ctx.lineTo(width - margin, y);
      ctx.stroke();
    }
    
    // Draw sine function (blue)
    ctx.strokeStyle = "#0066cc";
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i <= graphWidth; i++) {
      const x = margin + i;
      const xRad = (i - graphWidth/2) * 12 / graphWidth; // Scale to show 2π
      const y = height/2 - Math.sin(xRad) * graphHeight/4;
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
    
    // Draw cosine function (red)
    ctx.strokeStyle = "#cc0000";
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i <= graphWidth; i++) {
      const x = margin + i;
      const xRad = (i - graphWidth/2) * 12 / graphWidth;
      const y = height/2 - Math.cos(xRad) * graphHeight/4;
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
    
    // Draw current point
    const xPos = width/2 + xValue * graphWidth/12;
    const sinY = height/2 - Math.sin(xValue) * graphHeight/4;
    const cosY = height/2 - Math.cos(xValue) * graphHeight/4;
    
    // Vertical line at current x
    ctx.strokeStyle = "#666";
    ctx.setLineDash([5,5]);
    ctx.beginPath();
    ctx.moveTo(xPos, margin);
    ctx.lineTo(xPos, height - margin);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Points on curves
    ctx.fillStyle = "#0066cc";
    ctx.beginPath();
    ctx.arc(xPos, sinY, 4, 0, 2*Math.PI);
    ctx.fill();
    
    ctx.fillStyle = "#cc0000";
    ctx.beginPath();
    ctx.arc(xPos, cosY, 4, 0, 2*Math.PI);
    ctx.fill();
    
    // Labels
    ctx.font = "14px sans-serif";
    ctx.fillStyle = "#0066cc";
    ctx.fillText("sin(x)", margin + 10, margin + 20);
    ctx.fillStyle = "#cc0000";
    ctx.fillText("cos(x)", margin + 10, margin + 40);
    
    // x-axis labels
    ctx.fillStyle = "#666";
    ctx.font = "12px sans-serif";
    // for (let i = -6; i <= 6; i += 2) {
    //   const x = width/2 + i * graphWidth/12;
    //   let label;
    //   if (i === 0) label = "0";
    //   else if (i === 2) label = "π";
    //   else if (i === -2) label = "-π";
    //   else if (i === 4) label = "2π";
    //   else if (i === -4) label = "-2π";
    //   else if (i === 6) label = "3π";
    //   else if (i === -6) label = "-3π";
    //   else label = i + "π";
    //   ctx.fillText(label, x - 10, height/2 + 20);
    // }
    
    // y-axis labels
    for (let i = -2; i <= 2; i++) {
      const y = height/2 - i * graphHeight/4;
      ctx.fillText(i.toString(), width/2 - 25, y + 5);
    }
  }

  slider.addEventListener('input', e => {
    const xPi = parseFloat(e.target.value);
    const x = xPi * Math.PI;
    display.textContent = xPi.toFixed(2);
    drawGraphs(x);
  });

  drawGraphs(0);
})();
</script>


