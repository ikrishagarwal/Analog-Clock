window.onload = function () {
  function time() {
    let d = new Date();
    let vhr = d.getHours();
    let vmin = d.getMinutes();
    let vsec = d.getSeconds();
    let vmill = d.getMilliseconds();
    let myhr = 30 * ((vhr % 12) + vmin / 60);
    let mymin = (vmin + vsec / 60) * 6;
    let mysec = vsec * 6;
    let dishr = document.getElementById("hr");
    let dismin = document.getElementById("min");
    let dissec = document.getElementById("sec");
    let transhr = "translate(-50%,-50%) rotate(" + myhr + "deg)";
    let transsec = "translate(-50%,-50%) rotate(" + mysec + "deg)";
    let transmin = "translate(-50%,-50%) rotate(" + mymin + "deg)";
    dishr.style.transform = transhr;
    dismin.style.transform = transmin;
    dissec.style.transform = transsec;
  }
  window.setInterval(time, 1000);
};
