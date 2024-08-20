/* 
    -> Multiplos testes:
        - Podemos criar múltiplos testes dentro de um describe para saber se temos funcionalidades ou valores verídicos funcionando corretamente de um certo elemento. 
*/

import { actual } from "../root/multiple-tests";

describe('test product created', () => {

    it('should return name valid', () => {
        const nameActual = actual.name
        
        // assert
        expect(nameActual).not.toBe('')
    })

    it('should return price', () => {
        const priceActual = actual.price

        // assert
        expect(priceActual).toBe(1000)
    })

    it('Should return discount', () => {
        const discountActual = actual.discount

        // assert
        expect(discountActual).toBe(20)
    })

    it('Should return rating', () => {
        const ratingActual = actual.rating

        // assert
        expect(ratingActual).toBe(5)
    })

    it('Should return image url', () => {
        const imgUrlActual = actual.image

        // assert
        expect(imgUrlActual).toBe('https://www.imagem.com.br')
    })
})