cc.Class({
    extends: cc.Component,

    properties: {
        scriptBall: require('BallUi'),
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.registerEvent();
    },

    registerEvent() {
        my.emitter.on('game_over_push', this.onStopBall, this);
    },

    init() {
        console.log('PhysicalLayout');
        this.scriptBall.init();
    },

    onStopBall() {
        this.scriptBall.stop();
    },

    onDestroy() {
        my.emitter.off('game_over_push', this.onStopBall);
    }
});