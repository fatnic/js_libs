function Game() {
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');

    this.now = null;
    this.delta = 0;
    this.last = Tools.timestamp();
    this.fps = 60;
    this.step = 1/this.fps;

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
    this.delta = this.delta + Math.min(1, (this.now - this.last) / 1000);
    while (this.delta > this.step) {
        this.delta = this.delta - this.step;
        this.peekState().update(this.step);
    }
    this.peekState().draw();
};
