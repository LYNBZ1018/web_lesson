import { SupGameObject } from "../sup_game_object/base.js";

export class GameMap extends SupGameObject {
    constructor(root) {
        super();

        this.root = root;
        this.$canvas = $('<canvas width="1120" height="630" tabindex=0></canvas>')
        this.ctx = this.$canvas[0].getContext('2d');
        this.root.$kof.append(this.$canvas);
        this.$canvas.focus();

    }

    start() {

    }

    update() {
        this.render();
    }

    render() {  // 渲染
        //this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.$canvas.width(), this.$canvas.height());
    }
}