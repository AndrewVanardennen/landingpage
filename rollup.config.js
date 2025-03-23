import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import { copyFile, cp } from 'fs/promises'

try {
  await copyFile('src/index.html', 'www/index.html')
} catch (error) {
  await mkdir('www')
  await copyFile('src/index.html', 'www/index.html')
}

try {
  await cp('node_modules/@vandeurenglenn/lite-elements/exports/themes', 'www/themes', { recursive: true })
} catch (error) {}



export default {
  input: ['./src/shell.ts'],
  output: {
    dir: 'www',
    format: 'es'
  },
  plugins: [typescript(), resolve()]
}
