import { getOrders } from "./database.js"
import { getPaints, getInteriors, getTechnologies, getWheels } from "./database.js"

export const findOrderPrices = (order) => {
    const interiors = getInteriors()
    const paints = getPaints()
    const techs = getTechnologies()
    const wheels = getWheels()

    const foundInterior = interiors.find(interior => {
        return interior.id === order.interiorId
    })

    const foundPaint = paints.find(paint => {
        return paint.id === order.paintId
    })

    const foundTechs = techs.find(tech => {
        return tech.id === order.techId
    })

    const foundWheels = wheels.find(wheel => {
        return wheel.id === order.wheelId
    })

    let orderPrice = foundInterior.price + foundPaint.price + foundTechs.price + foundWheels.price

    return orderPrice.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
}

export const Orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    for (const order of orders) {
        html += `<li id="${order.id}">`
        const totalPrice = findOrderPrices(order)
        html += `Order #${order.id} costs ${totalPrice} </li>`
    }

    html += "</ul>"
    return html
}