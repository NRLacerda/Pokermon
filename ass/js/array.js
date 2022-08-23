function shuffle(array) {
let currentIndex = array.length, randomIndex;
let players = undefined

// Enquanto o index atual não for igual a zero
// ele continua mixando os index
while (currentIndex != 0) 
{
// Pega elementos restantes
randomIndex = Math.floor(Math.random() * currentIndex);
currentIndex--;

// E troca de lugar com outro elemento aleatório 
//(btw mt legal essa função, não é nem muito complexa).
[array[currentIndex], array[randomIndex]] = [
array[randomIndex], array[currentIndex]];
}

return array;
}
// Declaração das cartas
const cards = 
(
[1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0,
  1.1, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1, 8.1, 9.1, 10.1, 11.1, 12.1, 13.1,
  1.2, 2.2, 3.2, 4.2, 5.2, 6.2, 7.2, 8.2, 9.2, 10.2, 11.2, 12.2, 13.2,
  1.3, 2.3, 3.3, 4.3, 5.3, 6.3, 7.3, 8.3, 9.3, 10.3, 11.3, 12.3, 13.3,]
)

// Mixa a posição das cartas em um array, usando a função anterior
let sh_card = shuffle(cards);    
console.log(sh_card);

// Declara players para ser usado na função seguinte
let numberPlayers = undefined

// Essa função pega o número de players, escreve na tela, cria as roles e diz
// quais as primeiras 3 cartas da mesa
function getvalue(){
  numberPlayers = document.querySelector(`input#numplay`).value; 
  document.writeln(`<p class="j-center font"><br> Número de Jogadores é ${numberPlayers}</p>`)
    let dealer = parseInt(Math.random() * (numberPlayers));
    let smallblind=dealer+1
    let bigblind=smallblind+1
    if (bigblind>numberPlayers)
    {
    bigblind=bigblind-numberPlayers
    }
    document.writeln(`<p class="j-center font"><br>O Dealer é o ${dealer}</p>`)
    document.writeln(`<p class="j-center font"><br>O Small Blind é o ${smallblind}</p>`)
    document.writeln(`<p class="j-center font"><br>O Big Blind é o ${bigblind}</p>`);
    document.writeln(`<p class="j-center font"><br>Primeiras cartas da mesa ${mesa_3}</p>`)
console.log(mesa_4)
console.log(mesa_5)
  return
}

mesa = numberPlayers * 2 //define onde no deck começara a pegar cartas da mesa, considerando que ha 1 carta de descarte

let mesa_3 = sh_card.splice(mesa+1,3) //separa em uma array as 3 cartas iniciais da mesa
let mesa_4 = sh_card.splice(mesa+2,1) //separa a 4ª carta da mesa, considerando 1 descarte
let mesa_5 = sh_card.splice(mesa+3,1) //separa a 5ª carta da mesa, considerando 1 descarte

/*
---------------------------------------------

Adicionar imagem a um certo item do array 

---------------------------------------------
Teremos que criar objetos.
Ainda não sei como fazer em js, só em c#

/*function makeCard(someNumber, image) {
return {
  someNumber,
  image
}
}

const card1 = makeCard(1, "./cool.png")
card1.someNumber*?
---------------------------------------------

         Como faremos o backend

---------------------------------------------
any backend. If you're working with JS already, 
anything Node, like Express is normally the starting point 
for your very "first" backend
---------------------------------------------
  
            Login hash de senha

---------------------------------------------
> Do not ever store non-encrypted passwords in a 
database, even as a test, because it is 
absolutely not a thing that you should ever write.
> choose your http server (express or fastify)
> bd postgresql 
> bcrypt or argon2 , and yes it's hashing (not enscrypt)
---------------------------------------------

             Anotações do Nicolas

---------------------------------------------
- build a personal management app, build a e-commerce app, 
build a payment/budget management app, Real Time Communication app
these are some of the best project for job
- EJS (backend)
---------------------------------------------
*/
