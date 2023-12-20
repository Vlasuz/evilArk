import {IServer, IUser} from "../models";
import {useSelector} from "react-redux";

export const useUserBalance = () => {
    const userInfo: IUser = useSelector((state: any) => state.toolkit.user)
    const category: IServer = useSelector((state: any) => state.toolkit.category)

    return userInfo.balance?.filter(item => item.server.id === category.id)[0]?.balance.toFixed(2)
}