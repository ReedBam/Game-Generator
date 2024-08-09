const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
const button = document.getElementById("button")


button.addEventListener("click", () => {generateRandom(box1, box2)})


function generateRandom(box1,  box2) {
    let genre = Math.floor(Math.random() * 11)
    let adjective = Math.floor(Math.random() * 21)


    /* i know i didnt use switch statements sorry guys*/
    if (adjective === 1) {
        box1.innerHTML = "Funny-"
    }
    if (adjective === 2) {
        box1.innerHTML = "Realistic-"
    }
    if (adjective === 3) {
        box1.innerHTML = "Cartoony-"
    }
    if (adjective === 4) {
        box1.innerHTML = "Text-Based-"
    }
    if (adjective === 5) {
        box1.innerHTML = "Tactical-"
    }
    if (adjective === 6) {
        box1.innerHTML = "Futuristic-"
    }
    if (adjective === 7) {
        box1.innerHTML = "Arcade-"
    }
    if (adjective === 8) {
        box1.innerHTML = "Cinematic-"
    }
    if (adjective === 9) {
        box1.innerHTML = "Fantasy-"
    }
    if (adjective === 10) {
        box1.innerHTML = " Dystopian-"
    }
    if (adjective === 11) {
        box1.innerHTML = " Industrial-"
    }
    if (adjective === 12) {
        box1.innerHTML = " Chaotic-"
    }
    if (adjective === 13) {
        box1.innerHTML = " Cyberpunk-"
    }
    if (adjective === 14) {
        box1.innerHTML = " Steampunk-"
    }
    if (adjective === 15) {
        box1.innerHTML = " Immersive-"
    }
    if (adjective === 16) {
        box1.innerHTML = " Magical-"
    }
    if (adjective === 17) {
        box1.innerHTML = " Post-Apocalyptic-"
    }
    if (adjective === 18) {
        box1.innerHTML = " Space-"
    }
    if (adjective === 19) {
        box1.innerHTML = " Non-traditional-"
    }
    if (adjective === 20) {
        box1.innerHTML = " Historical-"
    }
    if (genre === 1) {
        box2.innerHTML = " Horror Game"
    }
    if (genre === 2) {
        box2.innerHTML = " First Person Shooter Game"
    }
    if (genre === 3) {
        box2.innerHTML = " RTS Game"
    }
    if (genre === 4) {
        box2.innerHTML = " TBS Game"
    }
    if (genre === 5) {
        box2.innerHTML = " RPG Game"
    }
    if (genre === 6) {
        box2.innerHTML = " Sandbox Game"
    }
    if (genre === 7) {
        box2.innerHTML = " Platformer Game"
    }
    if (genre === 8) {
        box2.innerHTML = " Survival Game"
    }
    if (genre === 9) {
        box2.innerHTML = " Adventure Game"
    }
    if (genre === 10) {
        box2.innerHTML = " Management and/or Construction Game"
    }
    if (genre === adjective) {
        generateRandom(box1, box2)
    }
}