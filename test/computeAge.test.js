const computeAge = require("../src/computeAge")

test('Scénario anniversaire passé', () => {
    const expectResult = "Age = 22"
    const bday = new Date(1999, 9, 19)
    const result = computeAge(bday, new Date())
    expect(result).toBe(expectResult)
})

test('Scénario anniversaire à passé ce mois ci', () => {
    const expectResult = "Age = 23"
    const bday = new Date(1999, 1, 1)
    const result = computeAge(bday, new Date())
    expect(result).toBe(expectResult)
})

test('Scénario anniversaire à venir ce mois ci', () => {
    const expectResult = "Age = 22"
    const bday = new Date(1999, 1, 28)
    const result = computeAge(bday, new Date())
    expect(result).toBe(expectResult)
})

test('Scénario année future', () => {
    const expectResult = "Année de naissance impossible"
    const bday = new Date(5000, 0, 1)
    const result = computeAge(bday, new Date())
    expect(result).toBe(expectResult)
})

test('Scénario mois future', () => {
    const expectResult = "Mois de naissance impossible"
    const bday = new Date(2022, 5, 1)
    const result = computeAge(bday, new Date())
    expect(result).toBe(expectResult)
})

test('Scénario jour future', () => {
    const expectResult = "Jour de naissance impossible"
    const bday = new Date(2022, 1, 28)
    const result = computeAge(bday, new Date())
    expect(result).toBe(expectResult)
})