import React, { useRef, useEffect } from "react";
import style from "./GoldenRuleSpiral.module.css";

const GoldenRuleSpiral = ({ width, height }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const colors = [
      "#f1801820",
      "#6a91cf20",
      "#ed319620",
      "#fae53a20",
      "#5d086520",
      "#f1801820",
      "#6a91cf20",
      "#ed319620",
    ];
    // Utility function to draw the spiral
    const drawSpiral = (ctx, startX, startY, size, size2) => {
      console.log(`size at the start ${size}`);
      let sizeX = size / 1.618;
      let x = startX;
      let y = startY;
      let startAngle = Math.PI;
      let sweepAngle = Math.PI / 2;

      // Loop to draw spiral and squares
      for (let i = 0; i < 9; i++) {
        // Draw the current square
        ctx.beginPath();
        ctx.rect(x, y, sizeX, sizeX);
        ctx.stroke();
        ctx.closePath();
        ctx.fillStyle = colors[i];
        ctx.fill();

        console.log(ctx.fillStyle);

        // Update current direction and update the current coordinates
        if (i === 0) {
          ctx.beginPath();
          let radius = sizeX; // Radius of the arc
          ctx.arc(size2, sizeX, radius, startAngle, startAngle + sweepAngle);
          ctx.stroke();
          ctx.closePath();
          x += sizeX;
        } else if (i === 1) {
          ctx.beginPath();
          let radius = sizeX; // Radius of the arc
          ctx.arc(x, y + sizeX, radius, startAngle, startAngle + sweepAngle);
          ctx.stroke();
          ctx.closePath();
          y += sizeX;
          x = size - sizeX / 1.618;
        } else if (i === 2) {
          ctx.beginPath();
          let radius = sizeX; // Radius of the arc
          ctx.arc(x, y, radius, startAngle, startAngle + sweepAngle);
          ctx.stroke();
          ctx.closePath();
          y = size2 - sizeX / 1.618;
          x -= sizeX / 1.618;
        } else if (i === 3) {
          ctx.beginPath();
          let radius = sizeX; // Radius of the arc
          ctx.arc(x + sizeX, y, radius, startAngle, startAngle + sweepAngle);
          ctx.stroke();
          ctx.closePath();
          y -= sizeX / 1.618;
        } else if (i === 4) {
          ctx.beginPath();
          let radius = sizeX; // Radius of the arc
          ctx.arc(
            x + sizeX,
            y + sizeX,
            radius,
            startAngle,
            startAngle + sweepAngle
          );
          ctx.stroke();
          ctx.closePath();
          x += sizeX;
        } else if (i === 5) {
          ctx.beginPath();
          let radius = sizeX; // Radius of the arc
          ctx.arc(x, y + sizeX, radius, startAngle, startAngle + sweepAngle);
          ctx.stroke();
          ctx.closePath();
          y += sizeX;
          x += sizeX - sizeX / 1.618;
        } else if (i === 6) {
          ctx.beginPath();
          let radius = sizeX; // Radius of the arc
          ctx.arc(x, y, radius, startAngle, startAngle + sweepAngle);
          ctx.stroke();
          ctx.closePath();
          y += sizeX - sizeX / 1.618;
          x -= sizeX / 1.618;
        } else if (i === 7) {
          ctx.beginPath();
          let radius = sizeX; // Radius of the arc
          ctx.arc(x + sizeX, y, radius, startAngle, startAngle + sweepAngle);
          ctx.stroke();
          ctx.closePath();
          y -= sizeX / 1.618;
        } else {
          ctx.beginPath();
          let radius = sizeX; // Radius of the arc
          ctx.arc(
            x + sizeX,
            y + sizeX,
            radius,
            startAngle,
            startAngle + sweepAngle
          );
          ctx.stroke();
          ctx.closePath();
        }

        startAngle += sweepAngle;
        sizeX = sizeX / 1.618;
      }
    };

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Canvas context is not available");
    } else {
      console.log("Canvas is ready!");
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas for fresh draw
    const startX = 0;
    const startY = 0;
    // Call the function to draw the spiral
    drawSpiral(ctx, startX, startY, canvas.width, canvas.height);
  }, []);

  return (
    <canvas
      className={style.myCanvas}
      ref={canvasRef}
      width={width}
      height={height}
    />
  );
};

export default GoldenRuleSpiral;
