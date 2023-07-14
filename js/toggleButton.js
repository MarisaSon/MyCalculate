export function changeColor(e) {
  //
  if (e.target.checked) {
    document.body.setAttribute("dark", "");
  } else {
    document.body.removeAttribute("dark");
  }
}
