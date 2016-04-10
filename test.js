mocha.setup('bdd');

var assert = chai.assert;
var expect = chai.expect;
chai.should();

/*
 * Описание: Создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
 *
 * Параметры: (arr, callback);
 *   arr - массив,
 *   callback - функция обратного вызова, применяемая к каждому элементу массива
 *
 * Параметры: callback функции: (currentValue, index, array);
 *   currentValue - очередной элемент массива
 *   index - индекс этого элемента
 *   array - сам массив
 *
 * Условия:
 * 1. Создаёт массив с результатом вызова указанной функции для каждого элемента массива.
 * 2. Должна возвращать массив
 * 3. Исходный массив не должен изменяться
 * 4. Если arr - не массив, выбрасывается исключения с сообщением "Передан не массив"
 * 5. Если callback - не функция, выбрасывается исключение с сообщением "callback - не функция"
 * 6. В callback должны приходить все параметры
 * */

describe('map()', function() {

    it('Создаёт массив с результатом вызова указанной функции для каждого элемента массива', function() {
        var arr = [1, 2, 3];
        var expectedArr = [2, 3, 4];

        var result = map(arr, increment);

        // Assert
        assert.deepEqual(result, expectedArr, 'Массивы не совпадают');

        // Expect
        //expect(result).to.be.deep.equal(expectedArr);

        // Should
        //result.should.to.deep.equal(expectedArr);

        function increment(n) {
            return n + 1;
        }
    });

    it('Должна возвращать массив', function() {
        var arr = [1];

        //map(arr, Math.sqrt).should.to.be.a('array');
        expect(map(arr, Math.sqrt)).to.be.an('array');
    });

    it('Исходный массив не должен изменяться', function() {
        var arr = [1,2,3];
        var arrCopy = [1,2,3];

        map(arr, Math.sqrt);

        arr.should.be.deep.equal(arrCopy);
    });

    it('Если arr - не массив, выбрасывается исключения с сообщением "Передан не массив"', function() {
        var newMap = map.bind(null, 'string', Math.sqrt);

        //expect(newMap).to.throw('Передан не массив');
        newMap.should.to.Throw('Передан не массив');

    });

    it('Если callback - не функция, выбрасывается исключение с сообщением "callback - не функция"', function() {
        var newMap = map.bind(null, [1,2,3], 3);

        expect(newMap).to.throw('callback - не функция');
    });

    it('В callback должны приходить все параметры', function() {
        function callback(currentValue, index, arr) {
            expect(currentValue).to.exist;
            expect(index).to.exist;
            expect(arr).to.exist;
        }

        map([1], callback);

    });

    it('Асинхронный тест', function() {

        this.timeout(5000);

        setTimeout(function() {

            done();

        }, 6000);

    });

});

mocha.run();