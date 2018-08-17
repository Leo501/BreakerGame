
cc.Class({
    extends: cc.Component,

    properties: {
        spriteFrameColors: [cc.SpriteFrame],

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    init(colorCode) {
        let spriteFrame = this.spriteFrameColors[colorCode] || this.spriteFrameColors[0];
        this.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
    },

    start() {

    },

    // update (dt) {},
});