// Import sumValues
import { sumValues } from "../root/01.first-test";

// describe => Agrupa teste relacionados a um componente. 
describe('My first test', () => {

    // test / it => Define um teste que será executado dentro das chaves.
    it('should return sum values for params', () => {
        // arrange
        const expected = 4

        // actual
        const act = sumValues(2, 2)

        // assert
        expect(act).toBe(expected)
    })
})


/* 
    A estrutura de um teste é composto por princípios triple AAA
        ->arrange - Onde está o valor da expectativa do teste
        ->actual - O teste que será feito
        ->assert - Afirma que o teste (actual) terá o valor esperado do (arrange) 

    describe('My first test', () => {

        it('should return sum values for params', () => {
            <-- arrange -->
            const expected = 4

            <-- actual -->
            const actual = sumValues(2,2)

            <-- Expectativa do teste -->
            expect(actual).toBe(expected)
        })
    })

*/


/* 
    -> Métodos de teste expect:
    
    toBe(value) -> Testes em valores primitivos: string, number, boolean, null, undefined and symbol.

    toEqual(value) -> Testes em valores não primitivos: Array, Objetos...

    toHaveLength(value) -> Testes para saber o tamanho de alguma string o o total de elementos de uma array.

    toContain(value) -> Verifica se algum valor está incluso em algo.

    toBeUndefined -> Verifica se o valor atual é undefined.

    toBeTruthy -> Verifica se o valor atual é truthy.
*/