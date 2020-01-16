// Requireds
// const argv = require('yargs').argv;
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Genera un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help().argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base || argv.b, argv.limite).then((archivo) => console.log(`Archivo creado: ${archivo}`)).catch(err => console.log(err));
        break;
    default:
        console.log('Comando');
}
console.log(argv.base || argv.b);
// let argv2 = process.argv;
// console.log(argv2);
// console.log(argv);
// let parametro = argv[2];
// let base = parametro.split('=')[1];

//