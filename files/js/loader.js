function motion() {
    document.getElementById('loader-container').style.display = "none";
    document.getElementById('main').style.display = "block";
}

function timeout() {
    setTimeout(motion, 4000)
}