/*document
  .getElementById("video")
  .setAttribute(
    "style",
    "position: absolute; top: 0px; left: 0px; width: " +
      (window.innerWidth - 2) +
      "px; height: " +
      (window.innerHeight - 2) +
      "px; border: 1px solid #000000"
  );*/

let video = $("#video");

video.height = $(window).innerHeight();
video.width = $(window).innerWidth();

$(window).resize(function() {
   video.width = $(window).innerWidth();
  video.height = $(window).innerHeight();
