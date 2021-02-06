/**
 * Obter usuário
 * Obter numero de telefone do usuário a partir de seu ID
 * Obter o endereço do usuário pelo ID
 * 
 */

function obterUsuario(callback){
    setTimeout(function(){
        return callback (null,  {
            id:1,
            nome:'Luiz',
            dataNascimento : new Date(),
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback) { // por padrão o callback eh sempre o ultimo parâmetro.
    setTimeout(() => {
       return callback (null, {  //primeiro parâmetro do callback eh erro e o segundo sucesso.
           telefone: '999990000',
           ddd: 67
       })
    }, 2000);
}

function obterEndereco(idUsuario, callback) {
    setTimeout(()=>{
        return callback (null,  {
            rua: 'Olando City',
            numero: '007'
        })
    },2000)
}

function resolverUsuario(erro, usuario) {
    console.log('usuario: ', usuario)

}





// const usuario = obterUsuario() 
// obterUsuario(resolverUsuario) // function chamando function = callback
//  const telefone = obterTelefone(usuario.id)

obterUsuario( function resolverUsuario(error, usuario){
    // No JS  NULL|| "" || 0 ==== false o que for diferente disso eh true; 
    if(error) {
        console.error('Erro ao retornar Usuario!', error)
        return; //parar execução
    }
    obterTelefone(function resolverTelefone(error1, telefone){
        if(error1) {
            console.error('Erro ao retornar Telefone do Usuario!', error)
        }
        obterTelefone(usuario.id, function resolverEndereco(error2, endereco){
            if(error2) {
                console.error('Erro ao retornar Endereço do Usuario!', error)
            }


            console.log(`
                Nome Usuario: ${usuario.nome},
                Endereço: ${endereco.rua},${endereco.numero},
                Telefone: (${telefone.ddd})${telefone.telefone}
            `)
        })
    })
})


// console.log('usuario: ', usuario) // passando para dentro da function no callback
//  console.log('telefone', telefone)