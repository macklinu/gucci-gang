import gucciGang from '.'

test('renders ASCII art image of Lil Pump', async () => {
  expect(await gucciGang({ width: 120, height: 40 })).toMatchSnapshot()
})
