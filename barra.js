class Barra {
  constructor(ctx, maxWidth, maxHeight) {
    this.ctx = ctx;
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
  }

  draw(ctx, color = "#77dc1f", width, moveLeft = 0, moveUp = 0) {
    ctx.fillStyle = color;
    ctx.fillRect(moveLeft, this.maxHeight - moveUp, width, this.maxHeight);
  }
}

export default Barra;
