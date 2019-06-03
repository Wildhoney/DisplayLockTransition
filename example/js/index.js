async function updateDom() {
  const element = document.createElement("div");
  element.innerHTML = "This should never have a green border.";
  await element.displayLock.acquire({ activatable: true, timeout: Infinity });
  document.body.appendChild(element);

  element.style.border = "1px solid green";
}

window.addEventListener("load", updateDom);
