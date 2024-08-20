/*
    -> Jest hooks
    - O jest possui hooks que facilitam a construção de um elemento antes dele realizar o teste, e depois que o teste for realizado.
    -> beforeEach(): Responsável por preparar um setup antes de executar cada teste.
    -> afterEach(): Responsável por fazer algo com após cada teste feito.
*/

describe('return cout variable value', () => {

    let cont:number | null = null

    beforeEach(() => {
        cont = 0
    })

    afterEach(() => {
        console.log(`Teste executado`)
    })

    it('Should return cont', () => {
        // actual
        let act = cont as number
        act += 1

        // assert
        expect(act).toBe(1)
    })

    it('Should return cont', () => {
        // actual
        let act = cont as number
        act -= 1

        // assert
        expect(act).toBe(-1)
    })
})