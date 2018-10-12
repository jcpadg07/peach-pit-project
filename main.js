$('#submit').click(function() {
    const myName = $('#name').val();
    alert(myName);
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
