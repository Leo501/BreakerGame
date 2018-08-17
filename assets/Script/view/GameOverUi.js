cc.Class({
    extends: cc.Component,

    properties: {
        labelTitle: cc.Label
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

    },

    init(isWin) {
        this.showResult(isWin);
    },

    showResult(isWin) {
        if (isWin) {
            this.labelTitle.string = 'you win'
        } else {
            this.labelTitle.string = 'you lose'
        }
    },

    onEventClicked_reStart() {
        this.node.destroy();
        my.emitter.emit('game_play_push');
    }

    // update (dt) {},
});