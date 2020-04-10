/* eslint-disable no-undef */
const assert = require("assert").strict;
const ClosedRange = require("./closed_range")

describe("整数閉区間クラスの上端点と下端点は整数である", () => {
    test("コンストラクタの引数に数値以外を渡すとTypeErrorを返す", () => {
        assert.throws(() => {
            return new ClosedRange('1', 8)
        }, TypeError)
    })

    test("コンストラクタの引数に整数以外を渡すとErrorを返す", () => {
        assert.throws(() => {
            return new ClosedRange(8, 1.2)
        }, Error)
    })
})

describe("整数閉区間クラスの上端点は下端点より大きい", () => {
    test("コンストラクタの引数に3と8を引数に渡したときに下端点が3、上端点が8となる", () => {
        const closedRange = new ClosedRange(3, 8)
        assert.equal(closedRange.lower < closedRange.upper, true)
    })
    test("コンストラクタの引数に8と3を引数に渡したときに下端点が3、上端点が8となる", () => {
        const closedRange = new ClosedRange(8, 3)
        assert.equal(closedRange.lower < closedRange.upper, true)
    })
})

describe("整数閉区間を文字列表現にして返す", () => {
    test("下端点 3, 上端点 8の整数閉区間クラスが '[3,8]'の文字列を返す", () => {
        const closedRange = new ClosedRange(3, 8)
        assert.equal(closedRange.toString(), "[3,8]")
    })
})

describe("整数が整数閉区間に含まれるかどうかを判定する", () => {
    describe("下端点 3, 上端点 8の整数閉区間クラスに整数を渡す", () => {
        const closedRange = new ClosedRange(3, 8)
        test("境界値8を渡してtrueが返る", () => {
            assert.equal(closedRange.has(8), true)
        })
        test("境界値3を渡してtrueが返る", () => {
            assert.equal(closedRange.has(3), true)
        })
        test("境界値の一つ内側7を渡してtrueが返る", () => {
            assert.equal(closedRange.has(7), true)
        })
        test("境界値のひとつ外側2を渡してfalseが返る", () => {
            assert.equal(closedRange.has(2), false)
        })
        test("数値以外を渡してTypeErrorが返る", () => {
            assert.throws(() => {
                return closedRange.has('1')
            }, TypeError)
        })
        test("整数以外を渡してErrorが返る", () => {
            assert.throws(() => {
                return closedRange.has(1.2)
            }, Error)
        })
    })
})

describe("別の整数閉区間クラスと等価かどうかを判定する", () => {
    describe("下端点 3, 上端点 8の整数閉区間クラスとの等価を判定する", () => {
        const closedRange = new ClosedRange(3, 8)
        test("下端点3, 上端点8の整数閉区間クラスと等価判定し、trueが返る", () => {
            const targetClosedRange = new ClosedRange(3, 8)
            assert.equal(closedRange.equal(targetClosedRange), true)
        })
        test("下端点2, 上端点8の整数閉区間クラスと等価判定し、falseが返る", () => {
            const targetClosedRange = new ClosedRange(2, 8)
            assert.equal(closedRange.equal(targetClosedRange), false)
        })
        test("下端点3, 上端点7の整数閉区間クラスと等価判定し、falseが返る", () => {
            const targetClosedRange = new ClosedRange(3, 7)
            assert.equal(closedRange.equal(targetClosedRange), false)
        })
    })
})

describe("別の整数閉区間クラスが完全に含まれるかどうかを判定する", () => {
    describe("下端点3, 上端点8の整数閉区間クラスに完全に含まれるかを判定する", () => {
        const closedRange = new ClosedRange(3, 8)
        test("下端点3, 上端点8の整数閉区間クラスは完全に含まれ、trueが返る", () => {
            const targetClosedRange = new ClosedRange(3, 8)
            assert.equal(closedRange.includes(targetClosedRange), true)
        })
        test("下端点4, 上端点7の整数閉区間クラスは完全に含まれ、trueが返る", () => {
            const targetClosedRange = new ClosedRange(4, 7)
            assert.equal(closedRange.includes(targetClosedRange), true)
        })
        test("下端点2, 上端点8の整数閉区間クラスは完全に含まれず、falseが返る", () => {
            const targetClosedRange = new ClosedRange(2, 8)
            assert.equal(closedRange.includes(targetClosedRange), false)
        })
    })
})
