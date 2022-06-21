import { getOrders } from "./database.js"


export const Orders = () => {
    const orders = getOrders()

    let html = "<ul>"

    for (const order of orders) {
        html += `<li id="${order.id}">`
        html += `Order #${order.id} was placed on ${order.timestamp} </li>`
    }

    html += "</ul>"
    return html
}