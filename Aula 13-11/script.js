
let container = document.getElementById("container")

for (let i = 0; i < 50; i++) {
    let card = 
    `
    <div class="card">
        <div class="top">

        </div>
        <div class="botton">

        </div>
    </div>
    `
    container.innerHTML += card
}
