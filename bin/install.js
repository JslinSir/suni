const chalk = require('chalk')
const { execSync } = require('child_process')

console.log(`[${chalk.bold.black('SUNI INSTALL')}]`)
console.log('[********************]')

console.log()
console.log(`[${chalk.yellow('install ui')}]`)

execSync('npm install', { cwd: 'suni-ui', stdio: 'inherit' })

console.log()
console.log(`[${chalk.yellow('install website')}]`)

execSync('npm install', { cwd: 'suni-website', stdio: 'inherit' })

console.log('[********************]')
console.log(`[${chalk.bold.green('SUCCESSED')}]`)
