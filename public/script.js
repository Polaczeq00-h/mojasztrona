function playAudio() {
    const audio = document.getElementById("audio");
    audio.play();

    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
}
function lobo() {
    const audio = document.getElementById("lobo");
    audio.play();

    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });
}