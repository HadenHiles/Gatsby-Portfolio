/**
 *  File: character.ts
 *  Author: Haden Hiles
 *  Last Modified By: Haden Hiles
 *  Date Last Modified: November 14th
 *  Description:
 *  This class is where the main character is created and moved
 *  around the screen according to the user's mouse position
 *  on the canvas
 */
var objects;
(function (objects) {
    // Character Class
    var Character = (function () {
        function Character(stage, game) {
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
            this.image = new createjs.Sprite(managers.Assets.atlas, "candy-craver");
            this.image.scaleX = .5;
            this.image.scaleY = .5;
            this.image.regX = 30;
            this.image.regY = 53;
            game.addChild(this.image);
            this.soundTrack = createjs.Sound.play('candypump', createjs.Sound.INTERRUPT_NONE, 0, 0, -1, 1, 0);
        }
        //Update the position of the character according to the mouse position
        Character.prototype.update = function () {
            this.image.x = this.stage.mouseX;
            this.image.y = this.stage.mouseY;
        };
        //remove the character
        Character.prototype.destroy = function () {
            this.soundTrack.stop();
            game.removeChild(this.image);
        };
        return Character;
    })();
    objects.Character = Character;
})(objects || (objects = {}));
//# sourceMappingURL=character.js.map