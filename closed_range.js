class ClosedRange {
    constructor(lower, upper) {
        if (typeof lower !== 'number' || typeof upper !== 'number') throw new TypeError('上端点と下端点は数値である必要があります')
        if (!Number.isInteger(lower) || !Number.isInteger(upper)) throw new Error("上端点と下端点は整数である必要があります")
        if (lower < upper) {
            this.lower = lower
            this.upper = upper
        } else {
            this.lower = upper
            this.upper = lower
        }
    }

    toString() {
        return `[${this.lower},${this.upper}]`
    }

    has(number) {
        if (typeof number !== 'number') throw new TypeError('引数は数値である必要があります')
        if (!Number.isInteger(number)) throw new Error('引数は整数である必要があります')
        return this.lower <= number && number <= this.upper
    }

    equal(target) {
        return this.lower === target.lower && this.upper === target.upper
    }

    includes(target) {
        return this.lower <= target.lower && target.lower <= this.upper &&
               this.lower <= target.upper && target.upper <= this.upper
    }
}

module.exports = ClosedRange
