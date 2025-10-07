let themes = ["water.css", "lava.css", "royal.css", "gray.css", "plain.css"]

const urlParams = new URLSearchParams(window.location.search);

if (urlParams.has("theme")) {
  let themeId = urlParams.get("theme");
  document.getElementById("styles").href = themeId;
} else {
  let themeId = themes[ Math.floor(Math.random() * 5.0) ];
  urlParams.set("theme", themeId);
  document.getElementById("styles").href = themeId;
  console.log(themeId);
}
