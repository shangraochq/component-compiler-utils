import { compileStyle } from '../lib/compileStyle'

// vue-loader/#1370
test('spaces after selector', () => {
  const { code } = compileStyle({
    source: `.foo , .bar { color: red; }`,
    filename: 'test.css',
    id: 'test'
  })

  expect(code).toMatch(`.foo[test], .bar[test] { color: red;`)
})
