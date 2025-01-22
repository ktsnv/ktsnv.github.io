let repos;
const container = document.querySelector("#project_container");
function preload() {
  repos = loadJSON('https://api.github.com/users/ktsnv/repos');
}

function setup() {
  let size = Object.keys(repos).length;
  let i = 0;
  while (i<size) {
    const br = document.createElement("br");
    container.append(br);
    container.append(repos[i].full_name);
    console.log(repos[i].full_name)
    i++;
  }
}
