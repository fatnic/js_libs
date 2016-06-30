function Game(winX, winY) {
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    this.canvas.width = winX || 800;
    this.canvas.height = winY || 600;

    this.now = null;
    this.delta = 0;
    this.then = Tools.timestamp();

    this.gameStates = [];
}

Game.prototype.pushState = function(state) {
    this.gameStates.push(state);
};

Game.prototype.popState = function() {
    return this.gameStates.pop();
};

Game.prototype.changeState = function(state) {
    if(this.gameStates.length !== 0) { this.popState(); }
    this.pushState(state);
};

Game.prototype.peekState = function () {
    if(this.gameStates.length === 0) { return null; }
    return this.gameStates[this.gameStates.length-1];
};

Game.prototype.gameLoop = function () {
    if(this.peekState() === null) { return; }
    this.now = Tools.timestamp();
    this.delta = (this.now - this.then) / 1000;
    this.peekState().update(this.delta);
    this.then = this.now;
    this.peekState().draw(this.ctx);
};
