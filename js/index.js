var li = document.getElementsByTagName("li");
var ul = document.getElementsByTagName("ul")[0];
var bigImg = document.getElementsByClassName("bigImg")[0];
var box = document.getElementById("jsi-cherry-container");
var audio = document.getElementById("audio");

for (var i = 0; i < li.length; i++) {
  var item = li[i];
  item.ontouchstart = function(e) {
    e.stopPropagation();

    ul.style.animationPlayState = "paused";
    var img = this.getElementsByTagName("img")[0];
    bigImg.src = img.src;
    bigImg.style.display = "block";
  };
}
box.ontouchstart = function() {
  ul.style.animationPlayState = "running";
  bigImg.src = "";
  bigImg.style.display = "none";
};
box.onclick = function() {
  audio.play();
};
