const hour = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')

function clock() {
  let time = new Date();
  let hours = time.getHours() * 6;
  let minute = time.getMinutes() * 6;

  hour.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
  minutes.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
  
  setTimeout(() => clock(), 1000)
}

clock()