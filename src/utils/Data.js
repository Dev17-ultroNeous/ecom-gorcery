import slide from '../assets/Img/food.webp'
import slide2 from '../assets/Img/vegitable.webp'
import vegitablelogo from '../assets/Img/vegitablelogo.png'
import fruitlogo from '../assets/Img/fruitlogo.png'
import snacklogo from '../assets/Img/vefar.png'
import cabbage from '../assets/Img/cabbage.png'
import began from '../assets/Img/bengan.png'
import potato from '../assets/Img/potato.png'
import deal from '../assets/Img/deal.png'
import carrot from '../assets/Img/carrot.png'
import tomater from '../assets/Img/tomater.png'
import corn from '../assets/Img/corn.png'

import apple from '../assets/Img/apple.png'
import banana from '../assets/Img/banana.png'
import orange from '../assets/Img/orange.png'

export const sliderData = [
    {
        image: slide
    },
    {
        image: slide2
    },
    {
        image: slide
    },
    {
        image: slide2
    }
]

export const categoriesData = [
    {
        image: vegitablelogo,
        name: "Vegetables"
    },
    {
        image: fruitlogo,
        name: "Fruit"
    },
    {
        image: snacklogo,
        name: "Snacks"
    }
]

export const productsData = [
    {
        id: 1,
        name: "carrot",
        image: carrot,
        weight: '30g',
        price: '$13/kg'
    },
    {
        id: 2,
        name: "tomater",
        image: tomater,
        weight: '30g',
        price: '$13/kg'
    },
    {
        id: 3,
        name: "corn",
        image: corn,
        weight: '30g',
        price: '$13/kg'
    },
]
export const fruitData = [
    {
        name: "apple",
        image: apple,
        weight: '30g',
        price: '$13/kg'
    },
    {
        name: "banana",
        image: banana,
        weight: '30g',
        price: '$13/kg'
    },
    {
        name: "orange",
        image: orange,
        weight: '30g',
        price: '$13/kg'
    },
]
export const relativefruitData = [
    {
        name: "apple",
        image: apple,
        type: fruitData,
        weight: '30g',
        price: '$13/kg'
    },

]

export const spiceData = [
    {
        name: "snacks",
        image: snacklogo,
        weight: '30g',
        price: '$13/kg'
    },
    {
        name: "snacks",
        image: snacklogo,
        weight: '30g',
        price: '$13/kg'
    },
    {
        name: "snacks",
        image: snacklogo,
        weight: '30g',
        price: '$13/kg'
    },
]


export const myOrderData = [
    {
        id: 1,
        name: "carrot",
        image: carrot,

        price: '$13/kg'
    },
    {
        id: 2,
        name: "apple",
        image: apple,

        price: '$13/kg'
    },
    {
        id: 3,
        name: "snacks",
        image: snacklogo,
        price: '$13/kg'
    },

]
export const cartData = [
    {
        id: 1,
        name: "carrot",
        image: carrot,
        price: '13',
        weight: '200/gm'
    },
    {
        id: 2,
        name: "apple",
        image: apple,
        weight: '200/gm',
        price: '18'
    },
    {
        id: 3,
        name: "snacks",
        image: snacklogo,
        price: '20',
        weight: '200/gm'
    },

]