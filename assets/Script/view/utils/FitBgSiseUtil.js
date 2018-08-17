cc.Class({
    extends: cc.Component,

    properties: {

    },

    onLoad() {
        //获取运行场景的可见大小。
        let winSize = cc.director.getWinSize();
        console.log('designsize=', winSize);
        this.node.width = winSize.width;
        this.node.height = winSize.height
    },

    start() {

    },

    // update (dt) {},
});