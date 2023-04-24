// let table = document.querySelector('.js-teachers');

// function highlight(table) {
//   let statusTd = document.querySelectorAll('tbody > tr > td:nth-child(4n');
//   let tr = document.querySelectorAll('tbody > tr');

//   for (let i = 0; i < statusTd.length; i++) {
//     if (statusTd[i].getAttribute('data-available') == 'true') {
//       tr[i].classList.add('available');
//     } else if (statusTd[i].getAttribute('data-available') == 'false') {
//       tr[i].classList.add('unavailable');
//     } else {
//       tr[i].setAttribute('hidden', '');
//     }
//   }

//   let genderTd = document.querySelectorAll('tbody > tr > td:nth-child(3n');

//   for (let i = 0; i < genderTd.length; i++) {
//     if (genderTd[i].textContent == 'm') {
//       tr[i].classList.add('male');
//     } else if (genderTd[i].textContent == 'f') {
//       tr[i].classList.add('female');
//     }
//   }

//   let age = document.querySelectorAll('tbody > tr > td:nth-child(2n)');

//   for (let i = 0; i < age.length; i++) {
//     if (age[i].textContent < 18) {
//       tr[i].style.textDecoration = 'line-through';
//     }
//   }
// }

// highlight(table);

function highlight(table) {
  for (let tr of table.children[1].rows) {
      let available = tr.cells[3];
      if (available.hasAttribute("data-available"))
          switch (available.dataset.available) {
              case "true":
                  tr.classList.add("available");
                  break;
              case "false":
                  tr.classList.add("unavailable");
          }
      else  
          tr.hidden = true;
       
      let gender = tr.cells[2].textContent;
      switch (gender) {
          case "m":
              tr.classList.add("male");
              break;
          case "f":
              tr.classList.add("female");
      }
      
      let age = +tr.cells[1].textContent;
      if (age < 18) tr.style.textDecoration = "line-through";
  }
}

let table = document.querySelector(".js-teachers");
highlight(table);