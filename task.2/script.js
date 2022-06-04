// const ul = document.createElementt('ul');
// const arr = ["html", "css", "js"]


// for (let i = 0; i < arr.length; i++) {
//     const li = document.createElement('li');
//     ul.appendChild(li);
//     li.appendChild(arr[i]);
    
// }
// body.appendChild(ul);
// console.log(ul)

// function render(arr)  {
//     for (let i = 0; i < arr.length; i++) {
//         const li = document.createElement('li');
//         ul.appendChild(li);
//         li.appendChild(arr[i]);
//         document.body.prependChild(li);
//     }
// }
// console.log(render(arr));



const arr = [
    {
      name: 'Google',
      url: 'https://google.com'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com'
    },
    {
      name: 'intocode',
      url: 'https://intocode.ru'
    },
  ]

  function render(arr) {
      const ul = document.createElement('ul')
      for(let i = 0; i < arr.length; i++){
    const li = document.createElement('li')
    const a = document.createElement('a')
    ul.appendChild(li)
    a.textContent = arr[i].name
    li.append(a)
    a.href = arr[i].url
document.body.prepend(ul)

      }
  }
