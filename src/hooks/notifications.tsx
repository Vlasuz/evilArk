import {toast} from "react-toastify";
import {Translate} from "../components/translate/Translate";

export const notifications = (data: any) => {

    const notifies: any = {
        "401": {
            type: "error",
            message: <Translate>text_for_notify_1</Translate>,
        },
        "500": {
            type: "error",
            message: <Translate>error_500</Translate>,
        },
        "Product issued": {
            type: "success",
            message: <Translate>text_for_notify_2</Translate>,
        },
        "The servers are down": {
            type: "info",
            message: <Translate>text_for_notify_9</Translate>,
        },
        "No such product exists": {
            type: "error",
            message: <Translate>text_for_notify_4</Translate>,
        },
        "Insufficient funds": {
            type: "error",
            message: <Translate>text_for_notify_5</Translate>,
        },
        "The item costs more than you have on your balance sheet": {
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
        "fill_the_field_for_payment": {
            type: "info",
            message: <Translate>text_for_notify_10</Translate>,
        },
        "Product purchased": {
            type: "success",
            message: "Продукт успешно куплен",
        },
        "User not in game": {
            type: "error",
            message: "Игрок не в игре",
        },
        "Product not exist": {
            type: "error",
            message: "Такого продукта не существует",
        },
        "Wait to rolling game": {
            type: "info",
            message: "Подождите пока закончится начатая игра",
        },
        "Wait please": {
            type: "info",
            message: "Попридержите коней, не так быстро!",
        },




        "The product has already been issued and cannot be issued again": {
            type: "info",
            message: "Продукт уже выдан",
        },
        "Request has failed": {
            type: "error",
            message: "Неизвестная ошибка сервера",
        },
        "Bad or missing property 'blueprintPath'": {
            type: "error",
            message: "Ошибка blueprint",
        },
        "Incorrect SteamID": {
            type: "error",
            message: "Произошла ошибка при проверке SteamID, обратитесь к администратору",
        },
        "Incorrect Data": {
            type: "error",
            message: "Произошла ошибка при выдаче товара, обратитесь к администратору",
        },
        "Cant find player": {
            type: "error",
            message: "Не удалось выдать товар, игрок не на сервере",
        },
        "Incorrect blueprint": {
            type: "error",
            message: "Произошла ошибка из-за попытки выдать неизвестный предмет, обратитесь к администратору",
        },
        "Cant spawn dino in this map": {
            type: "info",
            message: "Товар не может быть выдан на этой карте",
        },
        "Failed spawn dino": {
            type: "error",
            message: "Произошла ошибка при выдаче дино. Обратитесь к администратору.",
        },


        "Referral activated": {
            type: "success",
            message: <Translate>promo_code_successfully_active</Translate>,
        },
        "Referral not found": {
            type: "error",
            message: <Translate>promo_not_found</Translate>,
        },
        "Cannot use own referral": {
            type: "error",
            message: <Translate>you_cannot_enter_your_promo</Translate>,
        },
        "dont_have_balance": {
            type: "error",
            message: "You don't have enough money"
        },
        "you_need_to_login": {
            type: "error",
            message: "You need to login!"
        }




    }


    if(notifies[data]?.type === "info") {
        toast.info(notifies[data].message)
    } else if (notifies[data]?.type === "success"){
        toast.success(notifies[data].message)
    } else if (notifies[data]?.type === "error"){
        toast.error(notifies[data].message)
    } else {
        toast.info(data)
    }

}