class BreakerModel {
    constructor() {
        this.brickTotal = 2;
        this.init();
    }

    init() {
        this.score = 0;
        this.brickCount = 2;
    }

    setScore(score) {
        this.score = score;
    }

    addScore() {
        this.score += 10;
    }

    getScore() {
        return this.score;
    }

    setBrickCount(count) {
        this.brickCount = count;
    }

    getBrickCount() {
        return this.brickCount;
    }

    getBrickTotal() {
        return this.brickTotal;
    }

    isWin() {
        return 0 == this.brickCount;
    }
}

module.exports = new BreakerModel();