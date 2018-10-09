import {fatorial} from './fatorial'
import * as yargs from "yargs"

console.log('n-fatorial')

/*console.log(`Executando o script a partir do diretório ${process.cwd()}`)

process.on('exit', ()=>{
  console.log('script está prestes a terminar')
})*/

const argv = yargs.demandOption('num').argv
const num = argv.num

console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`)
