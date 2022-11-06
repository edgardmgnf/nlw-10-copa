function createGamer(player1, hour, player2){
    return`
        <li>
            <img src="./extras/icon-${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${hour}</strong>
            <img src="./extras/icon-${player2}.svg" alt="Bandeira da ${player2}">
        </li>
    `
}

function createCard(data, dayWeek, games){
    return`
        <div class="card">
            <h2>${data}<span>${dayWeek}</span></h2>
            <ul>
            ${games}   
            </ul>
        </div>
    `
}

document.querySelector("#app").innerHTML = `
    <header>
        <img src="./extras/logo.svg" alt="Logo NLW">
    </header>
    <main id="cards">
    ${createCard('21/11', 'segunda', createGamer("brazil", "08:00", "cameroon"))}  
    ${createCard('24/11', 'quinta', createGamer("brazil", "16:00", "serbia" ))}  
    ${createCard('28/11', 'segunda', createGamer("brazil", "13:00", "switzerland"))}
    </main>
`
