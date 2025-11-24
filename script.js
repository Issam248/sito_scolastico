// JS esterno con tanti eventi divertenti

document.addEventListener("DOMContentLoaded", () => {
  let count = 0;
  const btn = document.getElementById("btn");
  const counter = document.getElementById("counter");
  const box = document.getElementById("box");
  const input = document.getElementById("input");
  const select = document.getElementById("select");
  const area = document.getElementById("area");
  const form = document.getElementById("form");

  // 1) click
  btn.addEventListener("click", () => {
    count++;
    counter.textContent = count;
  });

  // 2) mouseover
  box.addEventListener("mouseover", () => box.classList.add("highlight"));

  // 3) mouseout
  box.addEventListener("mouseout", () => box.classList.remove("highlight"));

  // 4) dblclick
  box.addEventListener("dblclick", () => alert("Doppio clic sul BOX!"));

  // 5) input
  input.addEventListener("input", () => console.log("Hai scritto:", input.value));

  // 6) focus
  input.addEventListener("focus", () => input.style.background = "lightyellow");

  // 7) blur
  input.addEventListener("blur", () => input.style.background = "");

  // 8) change
  select.addEventListener("change", () => alert("Hai scelto: " + select.value));

  // 9) keydown
  area.addEventListener("keydown", (e) => console.log("Tasto premuto:", e.key));

  // 10) submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form inviato (finto) 🚀");
  });
});
