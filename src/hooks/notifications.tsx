import {toast} from "react-toastify";
import {Translate} from "../components/translate/Translate";

export const notifications = (data: any) => {

    const notifies: any = {
        "401": {
            type: "error",
            message: <Translate>text_for_notify_1</Translate>,
        },
        "Product issued": {
            type: "success",
            message: <Translate>text_for_notify_2</Translate>,
        },
        "Product purchased": {
            type: "success",
            message: "Продукт успешно куплен",
        },
        "The servers are down": {
            type: "info",
            message: <Translate>text_for_notify_3</Translate>,
        },
        "No such product exists": {
            type: "error",
            message: <Translate>text_for_notify_4</Translate>,
        },
        "Insufficient funds": {
            type: "error",
            message: <Translate>text_for_notify_5</Translate>,
        },
        "There's not enough amount": {
            type: "info",
            message: <Translate>text_for_notify_6</Translate>,
        },
        "This item is not available in this category": {
            type: "info",
            message: <Translate>text_for_notify_7</Translate>,
        },
        "It hasn't been a while since the last time I purchased this item.": {
            type: "info",
            message: <Translate>text_for_notify_8</Translate>,
        },
        "Get in game. The servers are down": {
            type: "error",
            message: <Translate>text_for_notify_9</Translate>,
        },
        "Get in game. User not in game": {
            type: "error",
            message: "User not in game",
        },
        "Get in game. Product not exist": {
            type: "error",
            message: "Product not exist",
        },
        "fill_the_field_for_payment": {
            type: "info",
            message: <Translate>text_for_notify_10</Translate>,
        },
        "Wait to rolling game": {
            type: "info",
            message: "Подождите пока закончится начатая игра",
        },
        "Wait please": {
            type: "info",
            message: "Попридержите коней, не так быстро!",
        }
    }

    if(notifies[data]?.type === "info") {
        toast.info(notifies[data].message)
    } else if (notifies[data]?.type === "success"){
        toast.success(notifies[data].message)
    } else if (notifies[data]?.type === "error"){
        toast.error(notifies[data].message)
    }

}