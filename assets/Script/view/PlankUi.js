cc.Class({
    extends: cc.Component,

    properties: {
        nodePlank: cc.Node
    },

    // use this for initialization
    onLoad: function () {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
            let pos = this.node.convertToNodeSpaceAR(event.getLocation());
            let radius = parseInt(this.nodePlank.width / 2);
            let designSize = cc.view.getDesignResolutionSize();
            let halfWidth = parseInt(designSize.width / 2);
            if (pos.x + radius > halfWidth) {
                pos.x = halfWidth - radius;
            } else if (pos.x - radius < -halfWidth) {
                pos.x = -halfWidth + radius;
            }
            // console.log('pos', pos.x, halfWidth, radius);
            this.nodePlank.x = pos.x;
        });
    },

    // called every frame
    update: function (dt) {

    },
});