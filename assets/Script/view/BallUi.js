cc.Class({
    extends: cc.Component,

    properties: {
        startVelocity: cc.v2(800, 800),
        startPos: cc.v2(0, -420)
    },

    init() {
        console.log('init BallUi');
        this.node.position = this.startPos;
        this.node.getComponent(cc.RigidBody).linearVelocity = this.startVelocity;
    },

    stop() {
        // this.node.position = this.startPos;
        this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
    },

    //碰撞体开始接触时被调用一次
    onBeginContact(contact, self, other) {
        // console.log(contact, self, other);
        switch (other.tag) {
            case 1: //砖块
                {
                    console.log('brick id=', other.name);
                    my.emitter.emit('break_brick_push', other);
                    break;
                }
            case 2: //地面
                {
                    console.log('game over ');
                    my.emitter.emit('touched_ground_push');
                    break;
                }
        }
    },

    // update (dt) {},
});