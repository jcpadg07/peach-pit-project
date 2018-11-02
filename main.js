$('#submit').click(function() {
    const myName = $('#name').val();
    const myEmail = $('#mail').val();
    const myMsg = $('#msg').val();
    alert(myName + '\n' + myEmail + '\n' + myMsg);
  });

const inputTest = (event) => {
    event.preventDefault();
    console.log("click");
}

/* This is for the hamburger menu */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }



const Main = (() => {
    document.addEventListener("DOMContentLoaded", () => {
        console.log("JavaScript Loaded");
    });
    
    // public methods[]
    return {
        init: () => {
            console.log("Init");
        }
    }
})();


Main.init();
