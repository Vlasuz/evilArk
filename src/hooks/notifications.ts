import {toast} from "react-toastify";

export const notifications = (data: any) => {

    const notifies: any = {
        "401": {
            type: "error",
            message: "Для начала вам надо авторизироваться",
        },
        "Product issued": {
            type: "error",
            message: "Предмет был успешно куплен и выдан в игре",
        },
        "The servers are down": {
            type: "info",
            message: "Предмет был успешно куплен, но не выдан в игре из-за отключенных серверов",
        },
        "No such product exists": {
            type: "error",
            message: "Такого продукта нет, или он был раскуплен",
        },
        "Insufficient funds": {
            type: "error",
            message: "У вас не хватает средств для покупки",
        },
        "There's not enough amount": {
            type: "info",
            message: "К сожалению запрашиваемое вами количество не доступно на нашем складе, попробуйте купить меньше",
        },
        "This item is not available in this category": {
            type: "info",
            message: "Этот предмет не доступен в данной категории",
        },
        "It hasn't been a while since the last time I purchased this item.": {
            type: "info",
            message: "С момента покупки данного предмета, прошло мало времени для того что бы купить его еще раз!",
        },
        "Get in game. The servers are down": {
            type: "error",
            message: "К сожалению сервера закрыты для выдачи предметов",
        },
        "fill_the_field_for_payment": {
            type: "info",
            message: "Пожалуйста введите сумму пополнения",
        },
    }

    if(notifies[data].type === "info") {
        toast.info(notifies[data].message)
    } else if (notifies[data].type === "success"){
        toast.success(notifies[data].message)
    } else if (notifies[data].type === "error"){
        toast.error(notifies[data].message)
    }

}