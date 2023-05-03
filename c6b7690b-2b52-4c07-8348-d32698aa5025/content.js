// This script replaces words on a page.
// It doesn't work yet. To make it work, handle the three TODOs.

// For static pages, handle all elements:
document.body.querySelectorAll("*").forEach(handleElement);
// TODO: un-comment the previous line

// For dynamic apps, like Twitter, observe all DOM mutations henceforth within document body:
// addMutationObserver();
// TODO: un-comment the previous line

function getNodes() {
  const userIcon = document.body.querySelector('img[alt="User"]');
  const userInfo = document.body.querySelector('[id*="headlessui-menu-button-"] > div');
}

function hideUserIcon(userIcon) {
  // userIcon.replace
}

function hideHistory(chat)

function handleText(textNode) {
  // Replaces "awesome" with various forms of "bison"
  // TODO: Choose your own words :)
  textNode.nodeValue = textNode.nodeValue
    .replace(/\bawesome\b/g, "bison")
    .replace(/\bAwesome\b/g, "Bison")
    .replace(/\bAWESOME\b/g, "BISON")
}

function addMutationObserver() {
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          mutation.target.querySelectorAll("*").forEach(handleElement);
        });
      });
      observer.observe(document.body, { subtree: true, childList: true });      
}

function handleElement(e) {
  e.childNodes.forEach((child) => {
    if (child && !isUserInput(child) && child.nodeName === "#text") {
      handleText(child);
    }
  });
}

// Some helper functions used by the code above:
function isUserInput(node) {
  const tagName = node.tagName ? node.tagName.toLowerCase() : "";
  return (
    tagName == "input" || tagName == "textarea" || isInsideContentEditable(node)
  );
}

function isInsideContentEditable(node) {
  while (node.parentNode) {
    if (node.contentEditable === "true") {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}


