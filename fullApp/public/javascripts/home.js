function makeElementInvisible(id) {
  if (document.getElementById(id).classList.contains("invisible")) {
    return;
  } else {
    console.log(id)
    document.getElementById(id).classList.add("invisible");
  }
}
function makeElementVisible(id) {
  if (document.getElementById(id).classList.contains("invisible")) {
    document.getElementById(id).classList.remove("invisible");
  } 
}

function changeShowedElement(id) {
  let elements = { low: false, medium: false, high: false };
  elements[id] = true;
  for (const key in elements) {
    if (!elements[key]) {
      makeElementInvisible(key);
    }
  }
  makeElementVisible(id);
  console.log('test')
}

$(document).ready(function(){
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  });