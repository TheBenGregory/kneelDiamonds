import { getMetals, getSizes, getStyles, } from "./database.js"
import { getCustomOrders } from "./database.js"

const metals = getMetals()
const styles = getStyles()
const sizes = getSizes()

const buildOrderListItem = (order) => {


    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId

        }
    )

    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId

        }
    )

    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId

        }
    )
    
    const totalCost = foundSize.price + foundStyle.price + foundMetal.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
                Order #${order.id} cost ${costString}
                </li>`

}

// return `<li>
//     Order #${order.id} was placed on ${order.timestamp}
// </li>`

export const Orders = () => {

    const orders = getCustomOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}


