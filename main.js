const $arenas = document.querySelector('.arenas');
const $randomBtn = document.querySelector('.button');

const player1 = {
    player: 1,
    name: "Kitana",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    weapon: ["qqq", "www", "eee"],
    attack() {console.log(`${this.name} Fight...`);}
}

const player2 = {
    player: 2,
    name: "Zubzero",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ["qqq", "www", "eee"],
    attack() {console.log(`${this.name} Fight...`);}
}

const createElement = (tag, className) => {
    const $el = document.createElement(tag);
    if (className) {
    $el.classList.add(className);
    };
    return $el;
};

const createPlayer = ({player, name, hp, img}) => {
  const $player1 = createElement('div', `player${player}`);
  const $progressBar = createElement('div', 'progressbar');
  const $character = createElement('div', 'character');
  const $life = createElement('div', 'life');
  const $name = createElement('div', 'name');
  const $image = createElement('img');

   $life.style.width = `${hp}%`;
   $name.innerText = name;
   $image.src = img;

   $progressBar.append($life, $name);
   $character.appendChild($image);
   $player1.append($progressBar, $character);

   return $player1;
};

const changeHp = (player) => {
  const $playerLife = document.querySelector(`.player${player.player} .life`);
  console.log(player);
  console.log($playerLife);
  if (player.hp >= 0 )
  player.hp -= 10 
  console.log(player.hp);
  $playerLife.style.width = `${player.hp}%`
}

$randomBtn.addEventListener('click', ()=> {
    changeHp(player1)
    changeHp(player2)
})


$arenas.appendChild(createPlayer( player1));
$arenas.appendChild(createPlayer( player2));