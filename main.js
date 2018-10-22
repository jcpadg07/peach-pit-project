$('#submit').click(function() {
    const myName = $('#name').val();
    const myEmail = $('#mail').val();
    alert(myName + '\n' + myEmail);
  });

const inputTest = (event) => {
    event.preventDefault();
    console.log("click");
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
