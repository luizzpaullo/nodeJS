/**
 * Obter usuário
 * Obter numero de telefone do usuário a partir de seu ID
 * Obter o endereço do usuário pelo ID
 * 
 */

function obterUsuario(){
    setTimeout(function(){
        return {
            id:1,
            nome:'Luiz',
            dataNascimento : new Date(),
        } 
    }, 1000)
}

function obterTelefone(idUsuario) {
    setTimeout(()=>{
       return {
           telefone: '999990000',
           ddd: 67
       }
    },2000)
}

function obterEndereco(idUsuario) {
    
}





const usuario = obterUsuario()
//  const telefone = obterTelefone(usuario.id)


console.log('usuario: ', usuario)
//  console.log('telefone', telefone)