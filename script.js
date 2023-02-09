// // PRATICA GUIADA 1 , 2 e 3
// // versao concatenacao
// function imprimiString(nome, corFavorita, citacao){
//   const fraseString = `A cor favore de ` + nome + ` eh ` + corFavorita + `. A citacao favorita eh "` + citacao + `".`
//   console.log(fraseString)  
// }

// const nomeUser = prompt(`qual eh o seu nome?`)
// const favoriteColorUser = prompt('Qual eh a sua cor favorita?')
// const citacaoUser = prompt(`Qual eh a sua citacao predileta?`)
// imprimiString(nomeUser, favoriteColorUser, citacaoUser)

// // versao template strings
// function imprimiStringTemplateCor(nome,corFavorita,){
// //const frase = `A cor favorite de ${nomeUser} eh ${favoriteColorUser}`


// const nomeMaiusculo = nome.toUpperCase()
// const incluiA = nomeMaiusculo.includes('A')
// const frase = `
// Nome: ${nomeMaiusculo}
// Cor favorita: ${corFavorita}`

// console.log('Versao com template strings:')
// console.log(frase)
// console.log(nome.length)
// console.log('O nome tem o caractere A?', incluiA)


// }
// imprimiStringTemplateCor(nomeUser,favoriteColorUser)
//EXERCICIO AULA GUIADA
const perguntaNomeEmail = (nome,email) => {
    const tamanhoNome = nome.length
    const mensagem = `O email ${email} foi cadastrado com sucesso. Boas vindas,${nome}!,
    Quantidade de caracteres eh de ${tamanhoNome}`
    
    const mensagemComX = mensagem.replaceAll('R','X').replaceAll('r','x')
    const temArroba = email.includes('@')


    console.log(mensagem)
    console.log(mensagemComX)
    console.log('O email enviado inclui @?', temArroba)


}
const nomeUser = prompt('Qual eh seu nome?')
const emailUser = prompt('Qual seu email?')

perguntaNomeEmail(nomeUser,emailUser)

