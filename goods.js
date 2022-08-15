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
        available: 'да',
    },
    4: {
        id: 4,
        name: 'Ботинки',
        description: 'Синие на тонкой подошве',
        sizes: [38, 39, 40, 41, 42, 44, 46],
        price: 4900,
        available: 'нет',
    },
    5: {
        id: 5,
        name: 'Рубашка',
        description: 'В клеточку',
        sizes: [39, 40, 42],
        price: 2300,
        available: 'да',
    }
}

const basket = [
    {
        good: 1,
        size: 58,
        qty: 2,  
    },
    {
        good: 3,
        size: 50,
        qty: 1,  
    },
]
// создание массива ссылок 
goodsIndex = []
for (let i = 1; i <= Object.keys(goods).length; i++) {
    goodsIndex.push(goods[i])
}

// проверка, есть ли указанный товар в корзине
function isAlreadyInBasket(goodId, goodSize) {
    for (let i = 0; i < Object.keys(basket).length; i++) {
        if (basket[i].good == goodId && basket[i].size == goodSize) {
            return i;
        } /*else {
            return false;
        }*/
    }
}
        

// проверка, доступен ли товар для добавления в корзину
function isGoodAvailable(goodId, goodSize) {
    for (let i = 0; i < Object.keys(goodsIndex).length; i++) {
        if (goodsIndex[i].id == goodId && goodsIndex[i].sizes.includes(goodSize) && goodsIndex[i].available == 'да') {
            return true;
        } /*else {
            return false;
        }*/
    }
}
    
        
// добавление товара в корзину; на входе id, размер и количество товара. 
function addGoodBasket(goodId, goodSize, goodQty) {
    if (isAlreadyInBasket(goodId, goodSize) !== undefined && isGoodAvailable(goodId, goodSize)) {
        basket[isAlreadyInBasket(goodId, goodSize)].qty += goodQty
        console.log ("Указанный товар уже находился в корзине, количество изменено на ", basket[isAlreadyInBasket(goodId, goodSize)].qty)
        return;
    } else if (isAlreadyInBasket(goodId, goodSize) == undefined && isGoodAvailable(goodId, goodSize)) {
        basket.push({good: goodId, size: goodSize, qty: goodQty})
        console.log ("Указанный товар добавлен в корзину")
        return
    }   else if (isGoodAvailable(goodId, goodSize) == undefined) {
        console.log ("Указанный товар недоступен, состав корзины не изменился")
        return
    }

}


        
addGoodBasket(2, 44, 3)




console.log(basket)  
