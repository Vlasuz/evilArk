import {IServer, IUser} from "../models";
import {useSelector} from "react-redux";

export const useUserBalance = () => {
    const userInfo: IUser = useSelector((state: any) => state.toolkit.user)
    const category: IServer = useSelector((state: any) => state.toolkit.category)

    const balance = userInfo.balance?.filter(item => item.server.id === category.id)[0]?.balance.toFixed(2)
    const bonusBalance = userInfo.balance?.filter(item => item.server.id === category.id)[0]?.balance_bonus.toFixed(2)

    return {bonusBalance, balance}
}