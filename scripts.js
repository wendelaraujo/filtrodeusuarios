const resultado = document.querySelector('#resultado')
const filtro = document.querySelector('#filtro')
const usuarios = []

async function getUsuarios() {
    const response = await fetch ('https://www.randomuser.me/api?results=100')
    const { results } = await response.json()
    
    // Limpando a <ul>
    resultado.innerHTML = ''
    for (user of results) {
        const li = document.createElement('li')
        usuarios.push(li)

        li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.firts}">
        <div class="user-info">
        <h4>${user.name.firts} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.name.country}</p>
        </div>
        `

        resultado.append(li)
    }
}

getUsuarios()


filtro.addEventListener('input', () => filtrarDados(filtro.value))

function filtrarDados(termo) {
    for (const user of usuarios) {
        if (user.innerText.toLowerCase().includes(termo.toLowerCase())) {
            user.classList.remove('hide')
        }
        else {
            user.classList.add('hide')
        }
    }
}