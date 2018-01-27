import gucciGang from '.'

test('renders ASCII art image of Lil Pump', async () => {
  const lilPump = await gucciGang()
  expect(typeof lilPump).toBe('string')
})
