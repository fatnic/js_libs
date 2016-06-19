function Rect(position, size) {
    this.position = position;
    this.size = size;

    Object.defineProperty(this, "x", {
        get: function() { return this.position.x; },
        set: function(x) { this.position.x = x; }
    });

    Object.defineProperty(this, "y", {
        get: function() { return this.position.y; },
        set: function(y) { this.position.y = y; }
    });

    Object.defineProperty(this, "width", {
        get: function() { return this.size.x; },
        set: function(width) { this.size.x = width; }
    });

    Object.defineProperty(this, "height", {
        get: function() { return this.size.y; },
        set: function(height) { this.size.y = height; }
    });
}


Rect.prototype.collision = function () {

};

Rect.prototype.draw = function (context) {
    Draw.rect(context, this.position, this.size);
};
