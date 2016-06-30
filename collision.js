var Collision = {

    rectContains: function(rect, point) {
        if (rect.position.x <= point.x && point.x <= rect.position.x + rect.size.x &&
            rect.position.y <= point.y && point.y <= rect.position.y + rect.size.y) {
                return true;
            }
        return false;
    },

    rectIntersects: function(rect1, rect2) {
        return false;
    }

};
