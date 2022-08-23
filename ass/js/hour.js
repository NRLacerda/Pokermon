/*
Isso aqui serve para dar bom dia para a pesssoa, baseado no horário atual da máquina
*/

var time = new Date()
var hour = time.getHours()

if(hour < 12) {
    document.querySelector(`h1#hour`).innerText = "Bom dia! Bora jogar uma ?"
}
else if(hour <= 18){
    document.querySelector(`h1#hour`).innerText = "Boa tarde! Bora jogar uma ?"

} else {
    document.querySelector(`h1#hour`).innerText = "Boa noite! Bora jogar uma ?"
}
