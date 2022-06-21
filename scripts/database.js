
const database = {
    orderBuilder: {},

    paints: [
        { id: 1, color: "Silver", price: 500 },
        { id: 2, color: "Midnight Blue", price: 710 },
        { id: 3, color: "Firebrick Red", price: 965 },
        { id: 4, color: "Spring Green", price: 308 }
    ],
    interiors: [
        { id: 1, type: "Beige Fabric", price: 405 },
        { id: 2, type: "Charcoal Fabric", price: 782 },
        { id: 3, type: "White Leather", price: 1470 },
        { id: 4, type: "Black Leather", price: 1997 },
    ],
    technologies: [
        { id: 1, package: "Basic", price: 190 },
        { id: 2, package: "Navigation", price: 2000 },
        { id: 3, package: "Visibility", price: 3000 },
        { id: 4, package: "Ultra", price: 4000 },
        
    ],

    wheels: [
        {id: 1, type: "17-inch Pair Radial", price:500 },
        {id: 2, type: "17-inch Pair Radial Black", price: 700},
        {id: 3, type: "18-inch Pair Spoke Silver", price: 900},
        {id: 4, type: "18-inch Pair Spoke Black", price: 1200}
    ],

    orders: [
        {
            id: 1,
            paintId: 1,
            wheelId: 1,
            interiorId: 1,
            techId: 1,
            timestamp: 1614659931693
        }
    ]
    
}

export const getPaints = () => {
    return database.paints.map(paint => ({...paint}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(tech => ({...tech}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.orders.map(order => ({...order}))
}

export const setPaints = (id) => {
    database.orderBuilder.paintId = id
}

export const setInteriors = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.techId = id
}

export const setWheels = (id) => {
    database.orderBuilder.wheelId = id
}

export const addCustomOrder = () => {

    const newOrder = {...database.orderBuilder}

    const lastIndex = database.orders.length - 1
    newOrder.id = database.orders[lastIndex].id + 1

    newOrder.timestamp = Date.now()

    database.orders.push(newOrder)

    database.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}
