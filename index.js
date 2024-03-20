const diceBtn = document.getElementById("diceBtn");
function dice() {
    const diceInput = Number(document.getElementById("diceInput").value);
    if(isNaN(diceInput)) {
        document.getElementById("alert").textContent = "Please enter a valid number!";
        diceContainer.innerHTML = "";
    }
    else {
    document.getElementById("alert").textContent = "";
    const diceContainer = document.getElementById("diceContainer");
    const images = [];
    for(let i = 0;i < diceInput;i++) {
        const value = Math.floor(Math.random() * 6)+1;
        switch(value) {
            case 1:
                images.push("⚀");
                break;
            case 2:
                images.push("⚁");
                break;
            case 3:
                images.push("⚂");
                break;
            case 4:
                images.push("⚃");
                break;
            case 5:
                images.push("⚄");
                break;
            case 6:
                images.push("⚅");
                break;
        }
    }
    diceContainer.innerHTML = images.join(` `);
}
}