var lc = document.getElementById("lc");
var rc = document.getElementById("rc");
var body = document.getElementById("gradient");
var output = document.getElementById("output");

function setGradient() {
  document.body.style.background = "linear-gradient(to right, "+ lc.value +", "+ rc.value +")";
  output.textContent = document.body.style.background + ";";
}


lc.addEventListener("input", setGradient);

rc.addEventListener("input", setGradient);
