const audio = document.getElementById("audioPlayer");
const playButton = document.getElementById("playButton");
const progressBar = document.getElementById("progressBar");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");
const progressTrack = document.querySelector(".progress-track");

function formatTime(seconds) {
    if (!Number.isFinite(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
}

playButton.addEventListener("click", async () => {
    try {
        if (audio.paused) {
            await audio.play();
        } else {
            audio.pause();
        }
    } catch (err) {
        console.error("Audio playback failed:", err);
    }
});

audio.addEventListener("play", () => {
    playButton.textContent = "❚❚";
});

audio.addEventListener("pause", () => {
    playButton.textContent = "▶";
});

audio.addEventListener("loadedmetadata", () => {
    durationEl.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", () => {
    currentTimeEl.textContent = formatTime(audio.currentTime);
    const percent = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
    progressBar.style.width = `${percent}%`;
});

audio.addEventListener("ended", () => {
    playButton.textContent = "▶";
    progressBar.style.width = "0%";
    currentTimeEl.textContent = "0:00";
});

progressTrack.addEventListener("click", (event) => {
    if (!audio.duration) return;
    const rect = progressTrack.getBoundingClientRect();
    const percent = (event.clientX - rect.left) / rect.width;
    audio.currentTime = percent * audio.duration;
});
