function darkMode(){
    document.body.classList.toggle("dkm");
}

function mudar_integrantes(integrante) {
    if(integrante == i1){
        document.getElementById("i1").style.display = "none";
        document.getElementById("i2").style.display = "block";
        document.getElementById("i3").style.display = "none";
    }
    if(integrante == i2){
        document.getElementById("i1").style.display = "none";
        document.getElementById("i2").style.display = "none";
        document.getElementById("i3").style.display = "block";
    }if(integrante == i3){
        document.getElementById("i1").style.display = "block";
        document.getElementById("i2").style.display = "none";
        document.getElementById("i3").style.display = "none";
    }
}

function subscribe() {
    alert("Obrigado por se inscrever!");
}

function subscribe1() {
    alert("Opinião enviada com sucesso!");
}


 document.addEventListener("DOMContentLoaded", () => {
    const characterContainer = document.getElementById('character-container');
    const apiUrl = 'https://api.disneyapi.dev/character?page=1&pageSize=7438';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const characters = data.data;
            const randomCharacters = getRandomCharacters(characters, 12); // Seleciona 12 personagens aleatórios

            randomCharacters.forEach(character => {
                if (character.imageUrl && character.name) {
                    const characterDiv = document.createElement('div');
                    characterDiv.classList.add('character');

                    const img = document.createElement('img');
                    img.src = character.imageUrl;

                    const name = document.createElement('div');
                    name.classList.add('name');
                    name.textContent = character.name;

                    characterDiv.appendChild(img);
                    characterDiv.appendChild(name);
                    characterContainer.appendChild(characterDiv);
                }
            });
        })
        .catch(error => console.error('Erro ao buscar dados da API:', error));
});

function getRandomCharacters(characters, count) {
    const shuffled = characters.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}


function letra_minuscula() {
  const x = document.getElementById("email");
  x.value = x.value.toLowerCase();
}
function butao1() {
      location.href = "https://github.com/Josafa-Lima/Josafa-Lima.github.io";
}
    function butao2() {
          location.href = "https://github.com/Josafa-Lima/Josafa-Lima.github.io";
}
        function butao3() {
              location.href = "https://github.com/Josafa-Lima/Josafa-Lima.github.io";
        }
