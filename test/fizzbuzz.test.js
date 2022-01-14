const fizzBuzz = require("../src/fizzbuzz")

test('Scénario fizz', () => {
	const expectResult = "Fizz"
	
    const result = fizzBuzz(3)
	
	expect(result).toBe(expectResult)
})

test("Scénario buzz", () =>{
	const expectResult = "Buzz"

	const result = fizzBuzz(5)

	expect(result).toBe(expectResult)
})
