const goods = {
    1: {
        id: 1,
        name: 'Шляпа',
        description: 'Весна-лето 22',
        sizes: [58, 59, 60],
        price: 2300,
        available: 'да',
    },
    2: {
        id: 2,
        name: 'Плащ',
        description: 'Серый с поясом',
        sizes: [44, 46, 48, 50],
        price: 5200,
        available: 'да',
    },
    3: {
        id: 3,
        name: 'Брюки',
        description: 'Классика',
        sizes: [48, 50, 52],
        price: 3800,
        available: 'нет',
    },
    4: {
        id: 6,
        name: 'Ботинки',
        description: 'Синие на тонкой подошве',
        sizes: [38, 39, 40, 41, 42, 44, 46],
        price: 4900,
        available: 'под заказ',
    },
    5: {
        id: 8,
        name: 'Рубашка',
        description: 'В клеточку',
        sizes: [39, 40, 42],
        price: 2300,
        available: 'да',
    },
}

const basket = [
    {
        good: 1,
        size: 58,
        qty: 2,  
    }
]
// const basket = []

// console.log(goods[4].sizes[basket[0].size])
// console.log(Object.keys(goods).length)

const goodsAdd = {
        id: 15,
        name: 'Кроссовки',
        description: 'Для бега',
        sizes: [40, 42, 44],
        price: 3200,
        available: 'да',
    }

// console.log(basket)

// function addGood (goodsAdd) {
//     const idAdd = Object.keys(goods).length + 1;
//     goods[idAdd] = goodsAdd;
// }

// function deleteGood (idDelete) {
//     delete goods[idDelete];
// }

// addGood(goodsAdd);

// deleteGood();

function addGoodBasket(goodId, goodSizeId, goodQty) {
    
}
console.log(basket)  

// goodId = 3
// goodSizeId = 52
// goodQty = 2
// basket.length = 0;
console.log(basket) 

function createBasketData(goodId, goodSizeId, goodQty) {
    
    for (let i = 1; i <= Object.keys(goods).length; i++) {
        if (goods[i].id == goodId) {
            // console.log(goods[i].sizes[goodSizeId])
            basketData = {good: goodId, size: goodSizeId, qty: goodQty}
            // basket.push(basketData)
            // console.log(basket)   
        } else {
            return;
            
        }
    }

    for (let i = 0; i < Object.keys(basket).length; i++) {
        // console.log(basket[i])
        if (basket[i].id == basketData.good || basket[i].size == basketData.size) {
            // console.log("OK")
            basket[i].qty += goodQty;
            break;
        } else {
            basket.push(basketData);
            break;
    
        }
    }

}
        






createBasketData(1, 58, 2)
// basket.length = 0;
// basket.push({good: 1, size: 22, qty: 1})
console.log(basket)  

// console.log(basket)