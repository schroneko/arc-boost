const isVideoPage = window.location.href.match(/(https|file):\/\/.+\.(mp4|webm|m4a|mkv)(\?.+)?/i);

if (isVideoPage) {
  document.querySelector("video").style.width = "100%";
  document.querySelector("video").style.height = "auto";
}