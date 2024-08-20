/*

    -> Testando caso de erros.
    - Podemos realizar testes que verifica se um erro foi lançado por meio do throw.
    - toThrow(): Verifica se a função ou valor lançou um error.
    - toThrowError(value): Verifica o valor do error.
 */

import { calcImc } from "../root/06.testing-for-errors";

describe('function Imc', () => {
    it('Should return error value', () => {
    
        // actual
        const act = calcImc
    
        // assert
        expect(() => {
            act(50, '1.5')
        }).toThrow()
        
    })

    it('Should return instance error', () => {
        try {
            calcImc(50,'1.5')
        } catch (error) {
            expect(error).toBeInstanceOf(Error)
        }
    })

    it('Should imc value', () => {
        // actual
        const imc = calcImc(50, 1.5)
        const act = Math.floor(imc)

        // assert
        expect(act).toBe(22)
    })
}) 