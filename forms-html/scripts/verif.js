function validar()
{
    event.preventDefault()
  let nome = document.getElementById('nome').value
  let email = document.getElementById('email').value
  let tell = document.getElementById('telefone').value
  let data = document.getElementById('data').value
  let correto = true;
  
  //valida nome
  if(nome.trim() == '' || nome.length < 10)
  {
    let mensagem = document.getElementById('erro-nome')
    mensagem.style.display = 'Flex'
    mensagem.innerText = 'Seu nome está vazio ou possui menos que 10 caracteres'
    mensagem.style.color = 'red'
    correto = false
  }
  else
  {
    let mensagem = document.getElementById('erro-nome')
    mensagem.style.display = 'none'
  }

  //valida email
  if(email == ' ' || !email.includes('@') || !email.includes('.'))
  {
    let mensagem = document.getElementById('erro-email')
    mensagem.style.display = 'Flex'
    mensagem.innerText = 'Seu email está vazio, ou deve possuir um @ e um .'
    mensagem.style.color = 'red'
    correto = false
  }
  else
  {
    let mensagem = document.getElementById('erro-email')
    mensagem.style.display = 'none'
  }

  //valida telefone
  var regex = /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/
  if(!regex.test(tell))
  {
    let mensagem = document.getElementById('erro-telefone')
    mensagem.style.display = 'Flex'
    mensagem.innerText = 'Seu telefone deve estar como no exemplo, +55 (55) 23321-5454 '
    mensagem.style.color = 'red'
    correto = false
  }
  else
  {
    let mensagem = document.getElementById('erro-telefone')
    mensagem.style.display = 'none'
  }

  //valida data
  if(!data)
  {
    let mensagem = document.getElementById('erro-data')
    mensagem.style.display = 'Flex'
    mensagem.innerText = 'Informe uma data de nascimento '
    mensagem.style.color = 'red'
    correto = false
  }
  else{
      let dataSel = new Date(data)
      let dataAtual = new Date()

      let idadeMin = 12
      let idadeMax = 19

      let dataMin = new Date();
      dataMin.setFullYear(dataAtual.getFullYear() - idadeMax);
      
      let dataMax = new Date();
      dataMax.setFullYear(dataAtual.getFullYear() - idadeMin)

      let mensagem = document.getElementById('erro-data')
      mensagem.style.display = 'none'
      if(dataSel > dataMax || dataSel < dataMin)
      {
        let mensagem = document.getElementById('erro-data')
        let mensagem2 = document.getElementById('erro-data2')
        mensagem.style.display = 'Flex'
        mensagem2.style.display = 'Flex'
        mensagem.innerText = 'A data não pode estar no futuro'
        mensagem2.innerText = `A data deve corresponder a uma idade entre ${idadeMin} e ${idadeMax} anos.`
        mensagem.style.color = 'red'
        mensagem2.style.color = 'red'
        correto = false
      }
  }

  //deu tudo certo? exibir a tabela com os alunos cadastrados!
  if(correto == true)
  {
    alert('teste')
  }
}