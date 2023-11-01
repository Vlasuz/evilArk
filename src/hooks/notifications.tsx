import {toast} from "react-toastify";
import {Translate} from "../components/translate/Translate";

export const notifications = (data: any) => {

    const notifies: any = {
        "401": {
            type: "error",
            message: <Translate>text_for_notify_1</Translate>,
        },
        "Product issued": {
            type: "error",
            message: <Translate>text_for_notify_2</Translate>,
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
        "fill_the_field_for_payment": {
            type: "info",
            message: <Translate>text_for_notify_10</Translate>,
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