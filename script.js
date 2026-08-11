/* =========================================
   OPEN INVITATION
========================================= */

function openInvitation() {

    const invitation = document.getElementById("invitation");

    invitation.scrollIntoView({
        behavior: "smooth"
    });

    startMusic();

}


/* =========================================
   BACKGROUND MUSIC
========================================= */

const music =
    document.getElementById("backgroundMusic");

const musicButton =
    document.getElementById("musicButton");

const musicIcon =
    document.getElementById("musicIcon");


function startMusic() {

    music.play()
        .then(() => {

            musicButton.classList.add(
                "music-playing"
            );

            musicIcon.textContent = "❚❚";

        })
        .catch(() => {

            console.log(
                "Browser membutuhkan interaksi pengguna untuk memutar musik."
            );

        });

}


musicButton.addEventListener(
    "click",
    function () {

        if (music.paused) {

            music.play();

            musicButton.classList.add(
                "music-playing"
            );

            musicIcon.textContent = "❚❚";

        } else {

            music.pause();

            musicButton.classList.remove(
                "music-playing"
            );

            musicIcon.textContent = "♫";

        }

    }
);


/* =========================================
   COUNTDOWN
========================================= */

/*
   GANTI tanggal di bawah ini
   sesuai tanggal acara kamu.
*/

const eventDate =
    new Date("December 6, 2026 09:00:00")
        .getTime();


const countdown =
    setInterval(function () {

        const now =
            new Date().getTime();

        const distance =
            eventDate - now;


        if (distance < 0) {

            clearInterval(countdown);

            document.getElementById("days")
                .textContent = "00";

            document.getElementById("hours")
                .textContent = "00";

            document.getElementById("minutes")
                .textContent = "00";

            document.getElementById("seconds")
                .textContent = "00";

            return;

        }


        const days =
            Math.floor(
                distance /
                (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (distance %
                    (1000 * 60 * 60 * 24))
                /
                (1000 * 60 * 60)
            );


        const minutes =
            Math.floor(
                (distance %
                    (1000 * 60 * 60))
                /
                (1000 * 60)
            );


        const seconds =
            Math.floor(
                (distance %
                    (1000 * 60))
                /
                1000
            );


        document.getElementById("days")
            .textContent =
            String(days).padStart(2, "0");


        document.getElementById("hours")
            .textContent =
            String(hours).padStart(2, "0");


        document.getElementById("minutes")
            .textContent =
            String(minutes).padStart(2, "0");


        document.getElementById("seconds")
            .textContent =
            String(seconds).padStart(2, "0");


    }, 1000);


/* =========================================
   SCROLL REVEAL
========================================= */

const reveals =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "active"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


reveals.forEach(
    function (element) {

        revealObserver.observe(element);

    }
);


/* =========================================
   PREVENT MUSIC ERROR
========================================= */

music.addEventListener(
    "error",
    function () {

        console.log(
            "File lagu.mp3 belum ditemukan."
        );

    }
);