const canvas = document.getElementById("draw");

if (canvas.getContext) {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = document.documentElement.clientHeight;

  let isDrawing = false;
  let xPosition = 0;
  let yPosition = 0;
  let hue = 0;

  const ctx = canvas.getContext("2d");
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.lineWidth = 20;

  function draw(e) {
    if (!isDrawing) return;

    ctx.beginPath();
    ctx.moveTo(xPosition, yPosition);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.stroke();

    xPosition = e.offsetX;
    yPosition = e.offsetY;

    hue++;
    if (hue >= 360) {
      hue = 0;
    }
  }

  canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    xPosition = e.offsetX;
    yPosition = e.offsetY;
  });

  canvas.addEventListener("mousemove", draw);

  canvas.addEventListener("mouseup", () => (isDrawing = false));
  canvas.addEventListener("mouseout", () => (isDrawing = false));
} else {
  console.log("Canvas not suppported");
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
