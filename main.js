async function getPhotos() {
  const createLi = (content) => {
    let listItem = document.createElement('li');
    let myH4 = document.createElement('h4');
    myH4.textContent = content.title;
    listItem.appendChild(myH4);
    let myImg = document.createElement('img');
    myImg.src = content.url;
    listItem.appendChild(myImg);
    return listItem;
  }
    async function populate() {
      while (true) {
        let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
        if (windowRelativeBottom > document.documentElement.clientHeight + 100) break; 
          let response = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5');
          let content = await response.json();
          let list = document.querySelector('.posts');
          const render = (container, template) => {
            container.appendChild(template);
          };
          content.forEach(element => {
            render(list, createLi(element));
          });
      };
    };
    window.addEventListener('scroll', populate);
    populate(); // инициализация документа
};
getPhotos();