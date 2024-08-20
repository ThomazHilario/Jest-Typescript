/*
    -> Testando parametros:
        - Podemos reaalizar testes de varios parametros usando o it.each
*/

import { percentCalc } from "../root/03.parametrized-testes";

describe('return percent value', () => {
    it.each([
        {
            args:{
            percent: 40,
            number:4000
            }, 
            expected: 1600
        },
        {
            args:{
            percent: 75,
            number:500
            }, 
            expected: 375
        },
        {
            args:{
            percent: 15,
            number:2000
            }, 
            expected: 300
        }
    ])('Should return parameters value', ({args, expected}) => {
        // actual
        const act = percentCalc(args.percent, args.number)

        // assert
        expect(act).toBe(expected)
    })
})