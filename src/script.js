document.addEventListener("DOMContentLoaded", function() {
    const lockScreen = document.getElementById("lock-screen");
    const unlockButton = document.getElementById("unlock-button");
    const invitationPage = document.getElementById("invitation-page");

    unlockButton.addEventListener("click", function() {
        lockScreen.classList.add("slide-out");
        invitationPage.classList.remove("hidden");
        invitationPage.classList.add("slide-in");

        // Menghilangkan lock-screen setelah efek slide-out selesai
        setTimeout(function() {
            lockScreen.classList.add("hidden");
            lockScreen.classList.remove("slide-out");
        }, 500); // Sesuaikan dengan durasi efek slide-out (0.5 detik)
    });
});
