/**
 *  File: candy.ts
 *  Author: Haden Hiles
 *  Last Modified By: Haden Hiles
 *  Date Last Modified: November 14th
 *  Description:
 *  This class is responsible for randomly continuing to add candies from
 *  the candy spritesheet to the screen
 */
var objects;
(function (objects) {
    // Candy Class
    var Candy = (function () {
        function Candy(stage, game) {
            var _this = this;
            //Define the x coordinate
            Object.defineProperty(this, "x", {
                get: function () {
                    return _this.image.x;
                }
            });
            //Define the y coordinate
            Object.defineProperty(this, "y", {
                get: function () {
                    return _this.image.y;
                }
            });
            //Define the width of the image
            Object.defineProperty(this, "height", {
                get: function () {
                    return _this.image.getTransformedBounds().height;
                }
            });
            //Define the height of the image
            Object.defineProperty(this, "width", {
                get: function () {
                    return _this.image.getTransformedBounds().width;
                }
            });
            this.stage = stage;
            this.game = game;
            this.reset();
            this.dx = 4;
        }
        //Move the candy on the x axis and reset when it goes off screen
        Candy.prototype.update = function () {
            this.image.x -= this.dx;
            this.randomAnimationIdx = Math.floor(Math.random() * (managers.Assets.candy._animations.length + 1));
            if (this.image.x <= 0) {
                this.reset();
            }
        };
        //Set the candy back to the right of the canvas
        Candy.prototype.reset = function () {
            game.removeChild(this.image);
            this.image = new createjs.Sprite(managers.Assets.candy, managers.Assets.candy._animations[this.randomAnimationIdx]);
            this.image.scaleX = .7;
            this.image.scaleY = .7;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.image.y = Math.floor(Math.random() * this.stage.canvas.height);
            this.image.x = this.stage.canvas.width;
            game.addChild(this.image);
        };
        //Remove the candy from the game
        Candy.prototype.destroy = function () {
            game.removeChild(this.image);
        };
        return Candy;
    })();
    objects.Candy = Candy;
})(objects || (objects = {}));
//# sourceMappingURL=candy.js.map