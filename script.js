// Premium Engagement Invitation Script


document.addEventListener("DOMContentLoaded", () => {


  const welcomeScreen =
    document.getElementById("welcomeScreen");


  const invitation =
    document.getElementById("invitation");


  const music =
    document.getElementById("bgMusic");



  // Initially hide invitation

  invitation.style.display = "none";



  // Open Invitation Function

  window.openInvitation = function () {


    welcomeScreen.style.animation =
      "fadeOut 1s forwards";


    setTimeout(() => {


      welcomeScreen.style.display = "none";


      invitation.style.display = "block";


      invitation.style.animation =
        "fadeIn 1.5s ease";


      // Start music after user click

      if (music) {

        music.play()
          .catch(() => {

            console.log(
              "Music requires user interaction"
            );

          });

      }


    },1000);


  };





  // =========================
  // Floating Hearts / Flowers
  // =========================


  function createFloatingElement(){


    const element =
      document.createElement("div");


    const symbols = [

      "♥",

      "✿",

      "❀",

      "♡",

      "🌸"

    ];


    element.innerHTML =
      symbols[
        Math.floor(
          Math.random()*symbols.length
        )
      ];



    element.className =
      "heart";



    element.style.left =
      Math.random()*100 + "vw";



    element.style.fontSize =
      (Math.random()*25+15)+"px";



    element.style.animationDuration =
      (Math.random()*3+4)+"s";



    document.body.appendChild(element);



    setTimeout(()=>{

      element.remove();

    },6000);



  }



  setInterval(
    createFloatingElement,
    800
  );






  // =========================
  // Countdown Timer
  // =========================


  const eventDate =
    new Date(
      "August 2, 2026 17:00:00"
    ).getTime();



  const countdown =
    document.getElementById(
      "countdown"
    );



  function updateCountdown(){


    if(!countdown) return;



    const now =
      new Date().getTime();



    const difference =
      eventDate - now;



    if(difference <= 0){


      countdown.innerHTML =

      `
      <h3>
      The Celebration Has Begun ❤️
      </h3>
      `;


      return;

    }





    const days =
      Math.floor(
        difference /
        (1000*60*60*24)
      );



    const hours =
      Math.floor(

        (difference %
        (1000*60*60*24))

        /

        (1000*60*60)

      );



    const minutes =
      Math.floor(

        (difference %
        (1000*60*60))

        /

        (1000*60)

      );



    const seconds =
      Math.floor(

        (difference %
        (1000*60))

        /

        1000

      );




    countdown.innerHTML =

    `

      <div>

        <strong>
          ${days}
        </strong>

        Days

      </div>


      <div>

        <strong>
          ${hours}
        </strong>

        Hours

      </div>


      <div>

        <strong>
          ${minutes}
        </strong>

        Minutes

      </div>


      <div>

        <strong>
          ${seconds}
        </strong>

        Seconds

      </div>

    `;


  }



  updateCountdown();


  setInterval(
    updateCountdown,
    1000
  );


});
