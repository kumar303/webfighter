define(function(require) {
    var Obj = require('./object');

    return Obj.extend({
        init: function(pos, size, sprite) {
            this.pos = vec2.create(pos || [0, 0]);
            this.size = vec2.create(size || [1, 1]);
            this.sprite = sprite;
        },

        update: function(dt) {
            if(this.sprite) {
                this.sprite.update(dt);
            }
        },

        render: function(ctx) {
            if(this.sprite) {
                this.sprite.render(ctx);
            }
            else if(this.color) {
                ctx.fillStyle = this.color;
                ctx.fillRect(0, 0, this.size[0], this.size[1]);
            }
        },

        remove: function() {
            if(this._scene) {
                this._scene.removeObject(this);
            }
        },

        isRemoved: function() {
            // TODO: leaky abstraction
            return this._sceneRemove;
        }
    });
});