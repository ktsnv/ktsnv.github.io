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
    const a = document.createElement('a');
    container.append(br);
    a.setAttribute('href',repos[i].html_url);
    a.innerHTML = repos[i].full_name;
    container.append(a);
    console.log(a)
    i++;
  }
}
