const player1 = {
    name: "Kitana",
    hp: 40,
    img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    weapon: ["qqq", "www", "eee"],
    attack() {console.log(`${this.name} Fight...`);}
}

const player2 = {
    name: "Zubzero",
    hp: 80,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ["qqq", "www", "eee"],
    attack() {console.log(`${this.name} Fight...`);}
}

const createPlayer = (playerName, {name, hp, img}) => {
  const $arenas = document.querySelector('.arenas')
  const $player1 = document.createElement('div');
  const $progressBar = document.createElement('div');
  const $character = document.createElement('div');
  const $life = document.createElement('div');
  const $name = document.createElement('div');
  const $image = document.createElement('img');
  
   $player1.classList.add(playerName);
   $progressBar.classList.add('progressbar');
   $character.classList.add('character');
   $life.classList.add('life');
   $name.classList.add('name');

   $life.style.width = '100%';
   $name.innerText = name;
   $life.innerText = hp;
   $image.src = img;

   $progressBar.append($life, $name);
   $character.appendChild($image);
   $player1.append($progressBar, $character);
   $arenas.appendChild($player1);

   return $arenas;

}

createPlayer('player1', player1);
createPlayer('player2', player2);