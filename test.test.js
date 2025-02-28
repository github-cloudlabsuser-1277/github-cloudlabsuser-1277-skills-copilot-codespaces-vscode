const Calculator = require('./test.js');
const assert = require('assert');

describe('Calculator', function() {
    describe('#add()', function() {
        it('should return 5 when adding 2 and 3', function() {
            const calculator = new Calculator();
            assert.strictEqual(calculator.add(2, 3), 5);
        });

        it('should return 0 when adding -1 and 1', function() {
            const calculator = new Calculator();
            assert.strictEqual(calculator.add(-1, 1), 0);
        });

        it('should return -5 when adding -2 and -3', function() {
            const calculator = new Calculator();
            assert.strictEqual(calculator.add(-2, -3), -5);
        });

        it('should return 2.5 when adding 1.5 and 1', function() {
            const calculator = new Calculator();
            assert.strictEqual(calculator.add(1.5, 1), 2.5);
        });

        it('should return 0 when adding 0 and 0', function() {
            const calculator = new Calculator();
            assert.strictEqual(calculator.add(0, 0), 0);
        });
    });
});