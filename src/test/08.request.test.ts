import { getPokemon } from "../root/08.request-test";

describe('Request PokeApi', () => {
    it('should return pokemon data', () => {
        // arrange
        const sut = getPokemon

        // act
        const act = sut('bulbasaur')

        // assert
        expect(act).not.toBeNull()
        expect(act).not.toBeUndefined()
    })

    it('Should return throw error', () => {
        try {
            // arrange
            const sut = getPokemon

            // actual
            sut('bulbasa')
        } catch (error) {
            
            // assert
            expect(error).toThrow()
        }
    })
})