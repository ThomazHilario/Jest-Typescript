/*
    -> Test Driven Development
    - Desenvolvimento orientado a testes, no qual o intuito é primeiro desenvolver os casos de testes e depois desenvolver a implementação do código.
    - TDD cycle: O ciclo do TDD passa por:
        - Failing Test: Os casos de testes desenvolvidos.
        - Passing test: A implementação do código que passará no teste.
        - Change/Add logic: Adição de lógica ou modificação de uma lógica que pode ou não passar em um teste.
    - Vale destacar que este ciclo se repete até que todos os bugs ou sejam resolvidos e a imlpementação do código esteja completa.    
*/

import { passwordCheck } from "../root/07.test-driven"

describe('Check password validity', () => {

    it('Should password word not 8 length', () => {
        // act
        const act = passwordCheck('1234567')

        // assert
        expect(act.valid).toBe(false)
        expect(act.message).toBe('Password length invalid')
    })

    it('Should password word more 8 length', () => {
        // act
        const act = passwordCheck('12345@aA')

        // assert
        expect(act.valid).toBe(true)
        expect(act.message).toBe('This password is valid!')
    })

    it('Should password not letter upperCase', () => {
        // actual
        const act = passwordCheck('abcdefgh')

        // assert
        expect(act.valid).toBe(false)
    })

    it('Should password letter upperCase', () => {
        // actual
        const act = passwordCheck('abcdef!H')

        // assert
        expect(act.valid).toBe(true)
    })

    it('Should password not letter lowerCase', () => {
        // actual
        const act = passwordCheck('ABCDEFGH')

        // assert
        expect(act.valid).toBe(false)
    })

    it('Should password letter lowerCase', () => {
        // actual
        const act = passwordCheck('abcdef%H')

        // assert
        expect(act.valid).toBe(true)
    })

    it('Should return the password not a special character', () => {
        // actual
        const act = passwordCheck('abcdef4H')

        // assert
        expect(act.valid).toBe(false)
    })

    it('Should return the password with a special character', () => {
        // actual
        const act = passwordCheck('bra@Zilx')

        // assert
        expect(act.valid).toBe(true)
    })
})