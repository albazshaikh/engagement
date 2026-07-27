// Engagement Invitation Interactive Effects

document.addEventListener("DOMContentLoaded", () => {

  // Create floating hearts animation

  const heartContainer = document.createElement("div");
  heartContainer.className = "heart-container";

  document.body.appendChild(heartContainer);


  function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "♥";

    heart.className = "heart";


    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
      (Math.random() * 3 + 3) + "s";


    heart.style.fontSize =
      (Math.random() * 20 + 15) + "px";


    heartContainer.appendChild(heart);


    setTimeout(() => {

      heart.remove();

    }, 6000);

  }


  setInterval(createHeart, 700);



  // Countdown Timer

  const eventDate =
    new Date("August 2, 2026 17:00:00").getTime();


  const countdown =
    document.createElement("div");

  countdown.className = "countdown";

  document.querySelector(".message")
    .appendChild(countdown);



  function updateCountdown() {

    const now = new Date().getTime();

    const distance = eventDate - now;


    if(distance < 0){

      countdown.innerHTML =
        "The celebration has begun ❤️";

      return;

    }


    const days =
      Math.floor(
        distance / (1000 * 60 * 60 * 24)
      );


    const hours =
      Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
      );


    const minutes =
      Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
      );


    const seconds =
      Math.floor(
        (distance % (1000 * 60)) /
        1000
      );


    countdown.innerHTML =
      `
      <div>
        <strong>${days}</strong>
        Days
      </div>

      <div>
        <strong>${hours}</strong>
        Hours
      </div>

      <div>
        <strong>${minutes}</strong>
        Minutes
      </div>

      <div>
        <strong>${seconds}</strong>
        Seconds
      </div>
      `;

  }


  updateCountdown();

  setInterval(updateCountdown, 1000);


});
