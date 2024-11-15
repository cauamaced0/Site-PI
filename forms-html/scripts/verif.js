var alunos = [
          
]

function validar()
{
    event.preventDefault()
  let nome = document.getElementById('nome').value
  let email = document.getElementById('email').value
  let tell = document.getElementById('telefone').value
  let data = document.getElementById('data').value
  let genero = document.getElementById('genero').value
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
  if (!data) {
    let mensagem = document.getElementById('erro-data');
    mensagem.style.display = 'Flex';
    mensagem.innerText = 'Informe uma data de nascimento';
    mensagem.style.color = 'red';
    correto = false;
} else {
    let dataSel = new Date(data);

    // Definir os limites fixos
    let dataMin = new Date(2000, 0, 1); // 1º de janeiro de 2000
    let dataMax = new Date(2020, 11, 31); // 31 de dezembro de 2020

    let mensagem = document.getElementById('erro-data');
    mensagem.style.display = 'none';

    if (dataSel > dataMax || dataSel < dataMin) {
        let mensagem = document.getElementById('erro-data');
        let mensagem2 = document.getElementById('erro-data2');
        mensagem.style.display = 'Flex';
        mensagem2.style.display = 'Flex';
        mensagem.innerText = 'A data está fora do intervalo permitido.';
        mensagem2.innerText = 'A data deve estar entre 01/01/2000 e 31/12/2020.';
        mensagem.style.color = 'red';
        mensagem2.style.color = 'red';
        correto = false;
    }
    else
    {
      let mensagem = document.getElementById('erro-data');
        let mensagem2 = document.getElementById('erro-data2');
        mensagem.style.display = 'none';
        mensagem2.style.display = 'none';
    }
}

  //verifica o genero

  if(genero != 'Masculino' && genero != 'masculino' && genero != 'Feminino' && genero != 'feminino')
  {
    let mensagem = document.getElementById('erro-genero')
    mensagem.style.display = 'Flex'
    mensagem.innerText = 'O genero deve ser Feminino ou Masculino'
    mensagem.style.color = 'red'
    correto = false
  }
  else
  {
    let mensagem = document.getElementById('erro-genero')
    mensagem.style.display = 'none'
  }
  //deu tudo certo? exibir a tabela com os alunos cadastrados!

  //descomentar a linha abaixo para caso de testes!
  //correto = true

  if(correto == true)
  {
    let sucesso = document.getElementById('sucesso')
    sucesso.style.display = 'flex'
    sucesso.style.fontSize = '16px'
    sucesso.innerText = 'Os dados de seu filho foram enviados para a escola com sucesso!, por favor aguarde'

    //tabela com alunos (Sql fake)

    

      let Vnome = document.getElementById('nome').value
      let Vemail = document.getElementById('email').value
      let Vtell = document.getElementById('telefone').value
      let Vdata = document.getElementById('data').value
      let Vgenero = document.getElementById('genero').value

      //adicionando no veto(alunos) de objetos
      alunos.push({nome:Vnome, email:Vemail, tell:Vtell ,data:Vdata, genero:Vgenero})
      
      //vinculamos a tabela em uma variavel

      let tab = document.getElementById('tabela')
      
      //cria o cabeçalho
      let html = `<tr>
                      <th>Nome:</th>
                      <th>Email:</th>
                      <th>Telefone:</th>
                      <th>Data:</th>
                      <th>Genero:</th>
                  </tr>`
    //percorre o vetor de objetos e gera as linhas
    for(let objAluno of alunos)
    {
      html+=`<tr>
                <td>${objAluno.nome}</td>
                <td>${objAluno.email}</td>
                <td>${objAluno.tell}</td>
                <td>${objAluno.data}</td>
                <td>${objAluno.genero}</td>
            </tr>`
    }

    //coloca os dados na tabela
    tab.innerHTML = html
  
  }
}

function limpar()
{
  //substiui os campos por uma string vazia
  document.getElementById('nome').value = ' '
  document.getElementById('email').value = ' '
  document.getElementById('telefone').value = ' '
  document.getElementById('data').value = ' '
  document.getElementById('genero').value = ' '

  //reinicia o vetotr
  alunos = []

  let tab = document.getElementById('tabela')

  //limpa a tabela
  tab.innerHTML = `<tr>
                      <th>Nome:</th>
                      <th>Email:</th>
                      <th>Telefone:</th>
                      <th>Data:</th>
                      <th>Genero:</th>
                  </tr>`
}

function limparF(event)
{
  event.preventDefault()
  document.getElementById('nome').value = ''
  document.getElementById('email').value = ''
  document.getElementById('telefone').value = ''
  document.getElementById('data').value = ''
  document.getElementById('genero').value = ''
}