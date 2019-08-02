function changedivcolor () {
  document.body.style.backgroundColor="burlywood"
  document.getElementById("raven").style.backgroundColor="transparent";
}


function myFunction() {
  var x = document.getElementById("lmfao");
  if (x.style.display == "none") {
    document.getElementById("ravenimg").style.display = "block";
    x.style.display = "block";
  }else {
    x.style.display = "none";
    document.getElementById("ravenimg").style.display = "none";
  }
}
