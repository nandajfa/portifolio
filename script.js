function escrevendoLetra() {
  function ativaLetra(elemento) {
    const arrTexto = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    arrTexto.forEach((letra, i) => {
      setTimeout(() => {
        elemento.innerHTML += letra
      }, 75 * i)
    })
  }

  const titulo = document.querySelector('.digitando')
  ativaLetra(titulo)
}
escrevendoLetra()

function menuMobile() {
  const ativaMenu = document.querySelector('.fa-bars')
  const navMenu = document.querySelector('header .navegacao-primaria')

  ativaMenu.addEventListener('click', () => {
    ativaMenu.classList.toggle('fa-x')
    navMenu.classList.toggle('ativado')
  })
}

menuMobile()

function sobreMim() {
  const divExperiencia = document.querySelectorAll('.experiencia-conteudo div')
  const divLi = document.querySelectorAll('.experiencia-conteudo ul li')
  const divEducacao = document.querySelectorAll('.educacao-conteudo div')
  const divEducacaoLi = document.querySelectorAll('.educacao-conteudo ul li')

  divExperiencia[0].classList.add('ativo')
  divLi[0].classList.add('ativo')
  divEducacao[0].classList.add('ativo')
  divEducacaoLi[0].classList.add('ativo')

  function slideShow(index) {
    divExperiencia.forEach(div => {
      div.classList.remove('ativo')
    })
    divLi.forEach(botao => {
      botao.classList.remove('ativo')
    })
    divExperiencia[index].classList.add('ativo')
    divLi[index].classList.add('ativo')
  }

  function slideShow2(index) {
    divEducacao.forEach(div => {
      div.classList.remove('ativo')
    })
    divEducacaoLi.forEach(botao => {
      botao.classList.remove('ativo')
    })
    divEducacao[index].classList.add('ativo')
    divEducacaoLi[index].classList.add('ativo')
  }

  divLi.forEach((event, index) => {
    event.addEventListener('click', () => {
      slideShow(index)
    })
  })

  divEducacaoLi.forEach((event, index) => {
    event.addEventListener('click', () => {
      slideShow2(index)
    })
  })
}

sobreMim()

function toggleMode() {
  const themeStyle = document.getElementById('theme-style')

  if (themeStyle.getAttribute('href') === './style.css') {
    themeStyle.setAttribute('href', './style-light.css')
  } else {
    themeStyle.setAttribute('href', './style.css')
  }
}
