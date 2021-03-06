// Machete.js
// Alejandro AR -> @kinduff
// http://github.com/kinduff/machete
// Este obra está bajo una Licencia Creative Commons Atribución-NoComercial-CompartirIgual 3.0 Unported.
// http://creativecommons.org/licenses/by-nc-sa/3.0/deed.es

function machete(width, mask) {
  var el, count, txtvid, i, results, video, final, img, cont, d, n, play, sheet, height, ih, iw;
  width = width || 640;
  mask = mask || 1;
  height = (width * 9) / 16;
  document.createElement('yt');
  el = document.getElementsByTagName('yt');
  count = el.length;
  for (i = 0; i < count; i++) {
    txtvid = el[i].textContent;
    el[i].textContent = '';
    results = txtvid.match('[\\?&]v=([^&#]*)');
    video = results[1];
    final = 'http://img.youtube.com/vi/' + video + '/hqdefault.jpg';
    img = new Image();
    img.src = final;
    img.id = video;
    img.className = "video";
    if (mask === 1) {
      play = new Image(99, 100);
      play.src = "img/1.png";
    }
    if (mask === 2) {
      play = new Image(128, 128);
      play.src = "img/2.png";
    }
    if (mask === 3) {
      play = new Image(189, 189);
      play.src = "img/3.png";
    }
    play.id = "playbutton";
    cont = document.createElement('div');
    cont.id = video + "_div";
    cont.className = "contenedorvideo";
    cont.appendChild(img);
    cont.appendChild(play);
    el[i].appendChild(cont);
    document.getElementById(video).onclick = function () {
      document.getElementById(this.id + "_div").innerHTML = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/' + this.id + '?rel=0&autoplay=1&hd=1" frameborder="0" allowfullscreen></iframe>';
    }
  }
  iw = Math.round(play.width / 2);
  ih = Math.round(play.height / 2);
  sheet = document.createElement('style');
  sheet.innerHTML = "#playbutton{position:absolute;top:50%;left:50%;margin-left:-" + iw + "px;margin-top:-" + ih + "px;pointer-events:none;}.contenedorvideo{width:" + width + "px;height:" + height + "px;position:relative;margin:0 auto;}img.video{width:" + width + "px;height:" + height + "px;}";
  document.body.appendChild(sheet);
 }
