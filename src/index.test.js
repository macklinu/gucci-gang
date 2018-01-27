import gucciGang from '.'

test('does the thing', async () => {
  expect(await gucciGang()).toMatchSnapshot()
})
