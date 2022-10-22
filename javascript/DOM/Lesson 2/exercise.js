// // Element Generator
const g = t => document.createElement(t);

// // const randomImage = g('img')
// // randomImage.src = 'https://picsum.photos/200'
// // randomImage.className="img-fluid"
// // randomImage.setAttribute('alt','Random Image')

// // const container = g('div')
// // container.className="container";
// // const row = g('div')
// // row.className="row justify-content-center align-items-center text-light";
// // // column-1
// // const col1 = g('div')
// // const col1Text = document.createTextNode('Col 1')
// // col1.appendChild(col1Text)
// // col1.className="col-md-4 bg-primary p-5"
// // // column-2
// // const col2 = g('div')
// // col2.className="col-md-4 bg-warning p-5"
// // col2.appendChild(randomImage)
// // // column-3
// // const col3 = g('div')
// // col3.className="col-md-4 bg-danger p-5"

// // row.append(col1)
// // row.append(col2)
// // row.append(col3)
// // container.append(row)
// // document.body.append(container)

// // exercise-2 

// /*

// <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td colspan="2">Larry the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </table>
// */

// // const table = g('table')
// // table.className="table"

// // const thead = g('thead')
// // const trOfThead = g('tr')


// // const thIndex = g('th')
// // thIndex.innerText="#"
// // thIndex.setAttribute('scope','col')

// // // trOfThead.append(thIndex) // appened th into tr

// // const thFirst = g('th')
// // thFirst.innerText="First"
// // thFirst.setAttribute('scope','col')

// // const thLast = g('th')
// // thLast.setAttribute('scope','col')

// // const thHandle = g('th')
// // thHandle.setAttribute('scope','col')

// // trOfThead.append(thIndex,thFirst,thLast,thHandle)
// // thead.append(trOfThead)
// // table.append(thead)
// // console.log(table, thead)

// /* <div class="card" style="width: 18rem;">
//  <img src="https://picsum.photos/200" class="card-img-top" alt="...">
//  <div class="card-body">
//  <h5 class="card-title">Card title</h5>
//  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//  <a href="#" class="btn btn-primary">Go somewhere</a>
//  </div>
//  </div> */
// const container = g('div');
// container.className = "card";
// container.style.width = "20rem";
// const myImage = g('img');
// myImage.src = 'https://picsum.photos/200';
// myImage.className = "card-img-top";
// myImage.setAttribute('alt', 'Just an Image');
// container.append(myImage);
// const childDiv = g('div');
// childDiv.className = "card-body";
// container.append(childDiv);
// const cardHeader = g('h5');
// cardHeader.className = "card-title";
// cardHeader.innerHTML = "Javascrit King";
// childDiv.append(cardHeader);
// const cardText = g('p');
// cardText.className = "card-text";
// cardText.innerHTML = "Some quick example text to build on the card title and make up the bulk of the card's content.";
// childDiv.append(cardText);
// const cardBtn = g('a');
// cardBtn.className = "btn btn-danger";
// cardBtn.href = "#";
// cardBtn.innerHTML = "Go somewhere";
// childDiv.append(cardBtn);

// const cloneOfCardContainer = container.cloneNode(true);
// cloneOfCardContainer.children[1].children[0].innerText="Clone Card";
// cloneOfCardContainer.children[1].lastChild.classList.remove('btn-danger');
// cloneOfCardContainer.children[1].lastChild.classList.add('btn-primary');

// document.body.append(cloneOfCardContainer);
// document.body.append(container);

function MakeCardComponent(image, cardTitle, description, btnColor, btnText) {
    // Card Container
    const CardContainer = g('div')
    CardContainer.setAttribute('style', 'width: 18rem;')

    // Card Image
    const CardImage = g('img')
    CardImage.setAttribute('src', `${image}`)
    //CardImage.classList.add('card-img-top')
    CardImage.className = "card-img-top"
    CardImage.setAttribute('alt', 'Random')



    const CardBody = g('div')
    CardBody.classList.add('card-body')

    const h5 = g('h5')
    h5.classList.add('card-title')
    const CardTitleText = document.createTextNode(cardTitle)
    h5.append(CardTitleText)

    const desc = g('p')
    desc.classList.add('card-text')
    const CardText = document.createTextNode(description)
    desc.append(CardText)

    const CardBtn = g('a')
    CardBtn.classList.add('btn')
    CardBtn.classList.add(btnColor != undefined ? btnColor : 'btn-primary')
    CardBtn.innerText = "Card Button"
    CardBody.append(h5)
    CardBody.append(desc)
    CardBody.append(CardBtn)
    CardContainer.append(CardImage)
    CardContainer.append(CardBody)

    return CardContainer
}
const card1 = MakeCardComponent ('https://wallpaperaccess.com/full/4623107.png', 'Card with Function', 'A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.','btn-warning','Click Me');
const card2 = MakeCardComponent ('')
document.body.append(card1);

