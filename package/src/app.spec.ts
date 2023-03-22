import { expect, it, test } from 'vitest'
import Application from './app'

const makeSut = () => {
  const sut = new Application()
  return { sut }
}

test('Application class', () => {
  it('should run', () => {
    const { sut } = makeSut()
    expect(sut.run()).resolves.toBeUndefined()
  })
})
