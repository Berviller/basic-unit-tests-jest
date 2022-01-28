const mergeSortedArrays = require("../src/mergeSortedArrays")
test('test cas tableau pair/impair', () => {
    const expectResult = [1, 2, 3, 4, 5]
    const result = mergeSortedArrays([1, 3, 5], [2, 4])
    expect(result).toBe(expectResult)
})
