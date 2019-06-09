function save(name, variable) {
    localStorage.setItem(name, variable);
}

function load(name) {
    localStorage.getItem(name);
}