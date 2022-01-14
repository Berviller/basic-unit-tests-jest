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

test("Scénario fizzbuzz", () =>{
	const expectResult = "FizzBuzz"

	const result = fizzBuzz(15)

	expect(result).toBe(expectResult)
})

test("Scénario n non divisible par 3 ou 5", () =>{
	const expectResult = ""

	const result = fizzBuzz(1)

	expect(result).toBe(expectResult)
})
