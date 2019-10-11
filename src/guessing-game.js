class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.left = {min, max};
        this.right = {min, max};
        this.medium = 0;
    }

    guess() {
        this.medium = parseInt(this.right.max / 2 + 1, 10);
        return this.medium;
    }

    lower() {
        this.right.max = this.medium;
        this.medium = parseInt(this.right.max / 2 + 1, 10);
        this.right.min = this.medium + 1;

        this.left.max = this.medium - 1;

        return this.medium;
    }

    greater() {
        this.left.min = this.medium;
        this.medium = parseInt(this.right.max / 2 + 1, 10);
        this.left.max = this.medium - 1;

        this.right.min = this.medium + 1;

        return this.medium;
    }
}

module.exports = GuessingGame;
