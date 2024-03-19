const diceBtn = document.getElementById("diceBtn");
function dice() {
    const diceInput = Number(document.getElementById("diceInput").value);
    const diceContainer = document.getElementById("diceContainer");
    const values = [];
    const images = [];
    for(let i = 0;i < diceInput;i++) {
        const value = Math.floor(Math.random() * 6)+1;
        values.push(value);
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