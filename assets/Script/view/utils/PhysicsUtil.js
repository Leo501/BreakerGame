cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.registerEvent();
        this.physicsManager = cc.director.getPhysicsManager();
        this.setPhysics(true);
    },

    registerEvent() {
        my.emitter.on('physics_open_push', () => {
            console.log('open');
            this.setPhysics(true);
        });
        my.emitter.on('physics_close_push', () => {
            this.setPhysics(false);
        });
    },

    setPhysics(isEnable) {
        this.physicsManager.enabled = isEnable;
    },

    start() {

    },

    onDestroy() {
        my.emitter.off('physics_open_push');
        my.emitter.off('physics_close_push');
    }

    // update (dt) {},
});