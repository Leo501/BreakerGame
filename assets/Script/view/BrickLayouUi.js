cc.Class({
    extends: cc.Component,

    properties: {
        row: 5,
        count: 20,
        prefabItem: cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.removeAllChildren();
        this.count = my.model.breaker.getBrickTotal() || this.count;
        for (let i = 0; i < this.count; i++) {
            this.createItem(i);
        }
        this.node.removeComponent(cc.Layout);
    },

    createItem(idx) {
        let node = cc.instantiate(this.prefabItem);
        this.node.addChild(node);
        node.name = '' + idx;
        node.script = node.getComponent('BrickItem');
        node.script.init(parseInt(idx / this.row));
    },

    updateBrickCount() {
        my.model.breaker.setBrickCount(this.node.childrenCount);
    },

    update(dt) {
        // this.updateBrickCount();
    },
});