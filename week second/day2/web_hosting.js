document.addEventListener("DOMContentLoaded", function() {
    const endInput = document.querySelector("#end");

    endInput.addEventListener("keyup", get);

    function get() {
        let start = document.querySelector("#start").value.slice(0, 2);
        let end = endInput.value.slice(0, 2);
        let price = 8;
        let res = (end - start) * price;
        console.log(start);
        console.log(end);
        console.log(res);
        document.querySelector("#price").innerHTML = "Hosting price rs/" + res;
    }
});
