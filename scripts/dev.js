const chalk = require('chalk')
const { exec, execSync } = require('child_process')

console.log(`[${chalk.bold.blue('SUNI DEV')}]`)
console.log('[********************]')
console.log()

exec('npm run watch', { cwd: 'suni-ui' })

execSync('npm run dev', { cwd: 'suni-website', stdio: 'inherit' })
