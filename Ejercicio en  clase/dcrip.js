let add = document.querySelector("#add");
let substract = document.querySelector("#substract");

add.addEventListener("click", function() {
    let output = document.querySelector("#output");
    //let result = output.innerText +1;
    let result = parseInt(output.innerText) + 1; //como instalar el github copilot chat

    if (result == 11) {
        alert("No se puede seguir suamando");
        output.innerText = 0;
    } else {
    output.innerText = result;
    }
});

substract.addEventListener("click", function() {
    let output = document.querySelector("#output");
    let result = parseInt(output.innerText) - 1;

    if (result == -1) {
        alert("No se puede seguuir restando");
        output.innerText = 0;
    } else {
    output.innerText = result;
    }
});




