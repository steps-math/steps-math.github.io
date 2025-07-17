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
    ctx.strokeStyle = "#ff6b6b";
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
    // cos projection (horizontal)
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x,cy);
    ctx.stroke();
    // sin projection (vertical)
    ctx.beginPath();
    ctx.moveTo(x,cy);
    ctx.lineTo(cx,cy);
    ctx.stroke();
    ctx.setLineDash([]);

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


