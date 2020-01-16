const argv = require('yargs')
    .command('listar', 'Lista la tabla de multiplicar', {
        base: {
            demand: true
        }
    }).argv;