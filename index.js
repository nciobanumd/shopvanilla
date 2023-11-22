const items = [
    {
        type: 'vegetable',
        img: 'https://i5.walmartimages.com/seo/Fresh-Slicing-Tomato-Each_a1e8e44a-2b82-48ab-9c09-b68420f6954c.04f6e0e87807fc5457f57e3ec0770061.jpeg',
        titlu: 'tomato',
        price: 4.5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    },
    {
        type: 'vegetable',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShAtfQAL029BPt4tFD7kH6efn2p7vPHurf08KndY5YgeOKp9d4kY0-Du6-KJ46tpuM0tU&usqp=CAU',
        titlu: 'cucumber',
        price: 3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    },
    {
        type: 'vegetable',
        img: 'https://cdn.britannica.com/89/170689-131-D20F8F0A/Potatoes.jpg',
        titlu: 'potato',
        price: 2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    },
    {
        type: 'vegetable',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Onion_on_White.JPG/1200px-Onion_on_White.JPG',
        titlu: 'onion',
        price: 1.5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    },
    {
        type: 'vegetable',
        img: 'https://green-connect.com.au/wp-content/uploads/2022/05/Cabbage2-scaled.jpg',
        titlu: 'cabbage',
        price: 0.75,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    },
    {
        type: 'vegetable',
        img: 'https://domf5oio6qrcr.cloudfront.net/medialibrary/5390/h1218g16207258089583.jpg',
        titlu: 'broccoli',
        price: 5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    },
    {
        type: 'fruits',
        img: 'https://subzfresh.com/wp-content/uploads/2022/04/apple_158989157.jpg',
        titlu: 'apple',
        price: 3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    },
    {
        type: 'fruits',
        img: 'https://fruitboxco.com/cdn/shop/products/asset_2_1024x.jpg?v=1571839043',
        titlu: 'banana',
        price: 3.5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    },
    {
        type: 'fruits',
        img: 'https://familytreefarms.com/wp-content/uploads/2021/03/PeachWhite.jpg',
        titlu: 'peach',
        price: 2.5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    },
    {
        type: 'fruits',
        img: 'https://media6.ppl-media.com/mediafiles/blogs/VNO_Mandarin1_5cb26f68b7.jpg',
        titlu: 'mandarin',
        price: 6,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    },
    {
        type: 'fruits',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzWwalE9LLS7-Woe5Hz22b5VRx02taRqofsvPDgbXjWZ46kkWd2BiwCPAzhb10vV5hM4M&usqp=CAU',
        titlu: 'pineapple',
        price: 10,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    },
    {
        type: 'meet',
        img: 'https://www.licious.in/blog/wp-content/uploads/2022/03/Chicken-Curry-Cut-min-750x750.png',
        titlu: 'chicken',
        price: 7,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    },
    {
        type: 'meet',
        img: 'https://cdn.britannica.com/68/143268-050-917048EA/Beef-loin.jpg',
        titlu: 'beef',
        price: 12,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    },
    {
        type: 'meet',
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2020/08/pork-1200x628-facebook-1200x628.jpg',
        titlu: 'pork',
        price: 7,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    },
    {
        type: 'meet',
        img: 'https://www.onceuponachef.com/images/2018/02/pan-seared-salmon-.jpg',
        titlu: 'salmon',
        price: 15,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem dolores, et ipsa maiores praesentium repudiandae.'
    }
  ]
/* const displayItems = () => {
    return items.map((item) => {
       let itemDiV = document.createElement('div')  
       itemDiV.innerHTML = `
        <div class="container">
            <div class="imagineWrapper">
                <img src=${item.img} class="imagine" alt="Item image">
            </div>
                
            <div class="description">
                <div class="titlu"> ${item.titlu}</div>
                <div class="price"> ${item.price} MDL</div>
            </div>
            <p class="info"> ${item.description}</p>
        </div>`  
       productList.appendChild(itemDiV)  
    })
}
 */

/* const filterBar = () => {
    const filters = ['vegetable', 'fruits', 'meet','all']
    
    return filters.map((element, index) =>
        `<div class="filterItem">
            <div class="activeItemFilter" onclick="filterItems id="div${index + 1}"> ${element} </div>
        </div>`
    
    ).join('')
    
}
filtreTip.innerHTML= filterBar() */


/* const filterItemBar = () => {
    const tipuriFiltre = ['all', ...new Set(items.map(item => item.type))]
    filtreTip.innerHTML = ''
    
    return tipuriFiltre.map ((type) => {
        filtreTip.innerHTML += `
        <div class="filterItem">
            <div class="activeItemFilter">${type.charAt(0).toUpperCase() + type.slice(1)}</div>
        </div>`
    })

}
filterItemBar() */

let productList = document.getElementById('listItem')
let filtreTip = document.getElementById('butoanefiltre')
let currentFilter = 'all';
let filteredItems = [];


const displayItems = (itemsToDisplay) => {
    productList.innerHTML = ''
    
    itemsToDisplay.forEach(item => {
        let itemDiV = document.createElement('div') 
        itemDiV.className = 'item'
        itemDiV.innerHTML = `
        <div class="container">
            <div class="imagineWrapper">
                <img src=${item.img} class="imagine" alt="Item image">
            </div>
                    
            <div class="description">
                <div class="titlu"> ${item.titlu}</div>
                <div class="price"> ${item.price} MDL</div>
            </div>
            <p class="info"> ${item.description}</p>
        </div>`
        
        productList.appendChild(itemDiV)   
    })
        
}


const filterItems = (filter) => {
    currentFilter = filter;
    if(currentFilter === 'all') {
        filteredItems = items;
    } else {
        filteredItems = items.filter(item => item.type === currentFilter)
    }

   displayfileteredItems() 
}



const sortItemByType = () => {
    filteredItems.sort((a, b) => a.type.localeCompare(b.type))

    displayfileteredItems()      
}


const displayfileteredItems = () => {
    if(currentFilter === 'fruits') {
        displayItems(filteredItems.filter(item => item.type === 'fruits'));
    } else if (currentFilter === 'vegetable') {
        displayItems(filteredItems.filter(item => item.type === 'vegetable'));
    } else if (currentFilter === 'meet') {
        displayItems(filteredItems.filter(item => item.type === 'meet')) ; 
    } else {
        displayItems(filteredItems)
    }
}
console.log(displayfileteredItems);
displayItems(items)

