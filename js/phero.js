   const pheroTube = async() => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`);
    const data = await res.json();
    const pheros = data.data;
   //  console.log(pheros);
    displayPheroTube(pheros);
}
   const displayPheroTube = pheros =>{
   const pheroContainer = document.getElementById('phero-container')
   //  console.log(pheros);
   pheros.forEach(phero => {
   console.log(phero)
   const pheroCard = document.createElement('phero-card')
   pheroCard.classList = `card h-[300px] bg-base-100 shadow-xl`;
   pheroCard.innerHTML = `
   <figure><img src="${phero.thumbnail}" alt="Shoes" /></figure>
   <pheroCard class="card-body">
    <h2 class="card-title">${phero.title}}</h2>
    <p>${phero.category_id}</p>
    <h4>${phero.others.views}</h4>
 </pheroCard>

   `;

   pheroContainer.appendChild(pheroCard); 

   });
   
}

   const tabCategory= async() => {
      const res = await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
      const data = await res.json();
      const categorys = data.data;
     //  console.log(category);
      displayCategory(categorys);
}
     const displayCategory = categorys =>{
     const tabContainer = document.getElementById('tab-container')
      // console.log(categorys);
     categorys.forEach(category => {
     console.log(category)
     const tabCard = document.createElement('tab-card')
     tabCard.innerHTML = `
   
   <div onclick="handleAll()" class="mx-auto relative pl-48 -ml-28 "><button class="bg-gray-300 px-6 py-2 rounded">${category.category}</button></div>
   
  
   `;
  
     tabContainer.appendChild(tabCard); 
  
     });
}
tabCategory()   
  const handleAll = async() =>{
  const res = await fetch(` https://openapi.programming-hero.com/api/videos/category/1000`);
  const data = await res.json() 
  console.log(data.data)  
}    

pheroTube()




