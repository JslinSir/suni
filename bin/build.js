const chalk = require('chalk')
const { execSync } = require('child_process')

console.log(`[${chalk.bold.black('SUNI BUILD')}]`)
console.log('[********************]')
console.log()

console.log()
console.log(`[${chalk.yellow('building ui')}]`)

execSync('npm run build', { cwd: 'suni-ui', stdio: 'inherit' })

console.log()
console.log(`[${chalk.yellow('building website')}]`)

execSync('npm run build', { cwd: 'suni-website', stdio: 'inherit' })

console.log()
console.log('[********************]')
console.log(`[${chalk.bold.green('SUCCESSED')}]`)
