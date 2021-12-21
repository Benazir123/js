const $params = document.getElementById("params");
const $addPageButton = document.getElementById("addPageButon");
const $deletePageButton = document.getElementById("deletePageButon");

const params = new URLSearchParams(window.location.search); // initialize

// add limit param if not exists
if (!params.has("limit")) {
  params.append("limit", 5);
}

if (!params.has("page")) {
  params.append("page", 10);
}

const values = Array.from(params.values());
const entries = Array.from(params.entries());

console.log("values:", values);
console.log("entries:", entries);
console.log("page:", params.get("page"));
console.log("has page?:", params.has("page"));

// event listener to add the page param on click
$addPageButton.addEventListener("click", () => {
  if (!params.has("page")) {
    params.set("page", 10);
    drawParamsToPage();
    updateURL();
  }
});

// event listener to delete the page param on click
$deletePageButton.addEventListener("click", () => {
  if (params.has("page")) {
    params.delete("page");
    drawParamsToPage();
    updateURL();
  }
});

// function to render the list of params to the ul list
function drawParamsToPage() {
  $params.innerHTML = null;
  params.forEach((value, key) => {
    const liElement = document.createElement("li");
    liElement.innerHTML = `<strong>${key}:</strong> ${value}`;
    $params.appendChild(liElement);
  });
}

// function update the current url with the set params
function updateURL() {
  window.history.pushState({}, "", `?${params.toString()}`);
}

drawParamsToPage();
updateURL();

