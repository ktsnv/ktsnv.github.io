let repos;

function preload() {
  repos = loadJSON('https://api.github.com/users/ktsnv/repos');
}

function setup() {
  let size = Object.keys(repos).length;
  let i = 0;
  while (i<size) {
    console.log(repos[i].full_name)
    i++;
  }
}
