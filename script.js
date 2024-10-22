let slider = document.querySelector('.slider')
let prevBtn = document.getElementById('prev')
let nextBtn = document.getElementById('next')

prevBtn.onclick = () => {
  slider.prepend(slider.querySelector('img:last-child'))
}

nextBtn.onclick = () => {
  slider.append(slider.querySelector('img:first-child'))
}