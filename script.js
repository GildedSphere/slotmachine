const symbols = ['♣', '♦', '♥', '♠', '0', '7'];

function spin() {
    const reel1 = document.getElementById('reel1');
    const reel2 = document.getElementById('reel2');
    const reel3 = document.getElementById('reel3');

    reel1.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    reel2.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    reel3.textContent = symbols[Math.floor(Math.random() * symbols.length)];
}
