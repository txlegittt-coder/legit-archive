// MUSIC PLAYER

const playButtons = document.querySelectorAll(".play-btn");

let audio = new Audio();
let currentButton = null;

playButtons.forEach(button => {

    button.addEventListener("click", () => {

        const song = button.dataset.song;

        if (currentButton === button && !audio.paused) {
            audio.pause();
            button.classList.remove("is-playing");
            currentButton = null;
            return;
        }

        if (currentButton) {
            currentButton.classList.remove("is-playing");
        }

        audio.src = song;
        audio.play();

        button.classList.add("is-playing");
        currentButton = button;

    });

});

audio.addEventListener("ended", () => {

    if (currentButton) {
        currentButton.classList.remove("is-playing");
        currentButton = null;
    }

});


// SHOW WATCH PANELS

document.querySelectorAll(".show-title").forEach(title => {

    title.addEventListener("click", () => {

        const panel = title
            .closest(".show-info")
            .querySelector(".watch-panel");

        if (panel) {
            panel.classList.toggle("open");
        }

    });

});

function updateDebutTimer() {
    const start = new Date(2018, 6, 15, 0, 0, 0);
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    let anniversary = new Date(
        start.getFullYear() + years,
        start.getMonth(),
        start.getDate(),
        0, 0, 0
    );

    if (anniversary > now) {
        years--;
        anniversary = new Date(
            start.getFullYear() + years,
            start.getMonth(),
            start.getDate(),
            0, 0, 0
        );
    }

    const diff = now - anniversary;

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff / 3600000) % 24);
    const minutes = Math.floor((diff / 60000) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("debut-timer").textContent =
        `${String(years).padStart(2, "0")}Y ` +
        `${String(days).padStart(2, "0")}D ` +
        `${String(hours).padStart(2, "0")}:` +
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}`;
}

updateDebutTimer();
setInterval(updateDebutTimer, 1000);