function createGame (player1, hour, player2) {
  return `
      <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}"/>
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}"/>
      </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
  <div class="card" style= "animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
      </div>
  `
}

document.querySelector("#cards").innerHTML = 
     createCard("20/11", "domingo", 
     createGame("qatar", "13:00", "ecuador")
    ) +

     createCard( "24/11", "quinta",
      createGame("portugal", "13:00", "ghana")+
      createGame("serbia", "16:00", "brazil")
     ) +

     createCard("28/11", "sexta", 
      createGame("cameroon", "07:00", "serbia") +
      createGame("brazil", "13:00", "switzerland")
     ) +

     createCard("01/12", "quinta", 
      createGame("croatia", "12:00", "belgium") +
      createGame("canada", "12:00", "morocco")
     )