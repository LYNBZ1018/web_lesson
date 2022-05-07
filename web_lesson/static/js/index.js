let input = document.querySelector("textarea");
let run = document.querySelector("button");
let output = document.querySelector("pre");

function main() {
    run.addEventListener("click", function () {
        let x = parseInt(input.value);
        let a = x % 10;
        x = parseInt(x / 10);
        let b = x % 10;
        x = parseInt(x / 10);
        let c = x;

        let s = `${a}${b}${c}`
        output.innerHTML = s;
    })
}

export {
    main,
}