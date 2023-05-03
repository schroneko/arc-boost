const isPDF = window.location.href.match(/^(http(s?)|file):\/\/[a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*.pdf$/i) || document.contentType === "application/pdf";
const hasToolbar = /toolbar=0$/i.test(window.location.href);

if (isPDF && !hasToolbar) {
  window.history.replaceState({}, "", "#toolbar=0");
  window.location.reload();
}