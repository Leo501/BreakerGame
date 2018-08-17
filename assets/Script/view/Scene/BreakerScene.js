cc.Class({
    extends: cc.Component,

    properties: {
        labelScore: cc.Label,
        nodeContent: cc.Node,
        prefabPhysicsLayout: cc.Prefab,
        prefabGameOver: cc.Prefab
    },

    // LIFE-CYCLE CALLBACKS:
    onLoad() {
        this.registerEvent();
        my.model.breaker.setScore(0);
        this.setScore(0);
    },

    start() {
        this.createPhysicsLayout();
    },

    registerEvent() {
        my.emitter.on('break_brick_push', this.onBreakBrick, this);
        my.emitter.on('touched_ground_push', this.onTouchedGroud, this);
        my.emitter.on('game_play_push', this.createPhysicsLayout, this);
    },

    createPhysicsLayout() {
        let target = this.nodeContent.getChildByName('PhysicalLayer');
        if (target) {
            target.destroy();
        }
        let node = cc.instantiate(this.prefabPhysicsLayout);
        node.name = 'PhysicalLayer';
        this.nodeContent.addChild(node);
        node.script = node.getComponent('PhysicalLayoutUi');
        node.script.init();
        my.model.breaker.init();
        this.setScore(0);

    },

    createGameOver(isWin) {
        let target = this.nodeContent.getChildByName('GameOver');
        if (target) {
            target.destroy();
        }
        let node = cc.instantiate(this.prefabGameOver);
        node.name = 'GameOver';
        this.nodeContent.addChild(node);
        node.script = node.getComponent('GameOverUi');
        node.script.init(isWin);
    },

    onBreakBrick(brick) {
        console.log(brick);
        my.model.breaker.addScore();
        this.setScore(my.model.breaker.getScore());
        brick.node.destroy();
        let count = my.model.breaker.getBrickCount() - 1;
        my.model.breaker.setBrickCount(count);
        console.log(count);
        if (count == 0) {
            this.onTouchedGroud();
        }
    },

    onTouchedGroud() {
        // my.emitter.emit('physics_close_push');
        my.emitter.emit('game_over_push');
        let isWin = my.model.breaker.isWin();
        console.log('get brick count=', isWin);
        this.createGameOver(isWin);
    },

    setScore(score) {
        this.labelScore.string = 'score ' + score;
    },

    onDestroy() {
        my.emitter.off('break_brick_push', this.onBreakBrick);
        my.emitter.off('touched_ground_push', this.onTouchedGroud);
        my.emitter.off('game_play_push', this.createPhysicsLayout);
    }

    // update (dt) {},
});