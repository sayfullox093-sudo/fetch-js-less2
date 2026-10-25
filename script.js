// const parent = document.getElementById('parent')



// async function Getproducts() {
//     const res = await fetch("https://dummyjson.com/products")
//     const req = await res.json()
//     console.log(req.products);
//    Renderlist(req.products) 
// }


// Getproducts()


// function Renderlist (products){
// products.map(item => {
//     const div =document.createElement('div')
//     div.innerHTML = `
//     <div class="card bg-base-100 w-96 shadow-sm">
//   <figure>
//     <img
//       src="${item.thumbnail}"
//       alt="Shoes" />
//   </figure>
//   <div class="card-body">
//     <h2 class="card-title">${item.title}</h2>
//     <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//     <div class="card-actions justify-end">
//       <button class="btn btn-primary">${item.price}</button>
//     </div>
//   </div>
// </div>
//     `

//     parent.append(div)
// })
// }







const parent = document.getElementById('parent')


async function Getusers() {
    const res = await fetch("https://dummyjson.com/users")
    const req = await res.json()
    console.log(req.users);
   Renderlist(req.users) 
}


Getusers()


function Renderlist (users){
users.map(item => {
    const div =document.createElement('div')
    div.innerHTML = `
    <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src="${item.image}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${item.firstName}</h2>
        <h2>${item.age} Age</h2>
    <p>${item.birthDate} Birth Date</p>
    <p>${item.email}</p>
        <p>${item.bloodGroup}  bloodGroup</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">${item.phone} phone number</button>
    </div>
  </div>
</div>
    `

    parent.append(div)
})
}



















