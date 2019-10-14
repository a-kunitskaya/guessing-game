class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.medium = 0;
    }

    guess() {
        this.medium = Math.round((this.min + this.max) / 2);
        return this.medium;
    }

    lower() {
        this.max = this.medium;
    }

    greater() {
        this.min = this.medium;
    }
}

module.exports = GuessingGame;
