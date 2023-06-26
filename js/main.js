let radios = document.querySelectorAll(`.container form .gender > label input[type="radio"]`),
    labels = document.querySelectorAll(`.container form .gender > label`),
    checkMarks = document.querySelectorAll(`.container form .gender > label span.checkmark`)


labels.forEach((label, i) => {
  if (radios[i].checked) {
    labels[i].classList.add("active")
    checkMarks[i].classList.add("active")
  }
  label.onclick = () => {
    labels.forEach(label => label.classList.remove("active"))
    checkMarks.forEach(checkMark => checkMark.classList.remove("active"))
    labels[i].classList.add("active")
    checkMarks[i].classList.add("active")
  }
})