import React, {useEffect, useState} from 'react'
import {TableNextBonusesStyled} from "./TableNextBonuses.styled";
import axios from "axios";
import {apiLink} from "../../hooks/apiLink";
import {ICategory} from "../../models";
import {useSelector} from 'react-redux';
import {Translate} from "../translate/Translate";

interface ITableNextBonusesProps {

}

interface IColor {
    color: string
    cost: number
    id: number
    level_name: string
    pve: boolean
}

export const TableNextBonuses: React.FC<ITableNextBonusesProps> = () => {

    const [allValues, setAllValues] = useState<IColor[] | undefined>([])

    const category = useSelector((state: any) => state.toolkit.category)

    useEffect(() => {
        axios.get(apiLink("api/colors")).then(({data}) => {
            setAllValues(data.data)
        })
    }, [])

    return (
        <TableNextBonusesStyled>
            <div className="table">
                <table>

                    <tbody>
                    <tr>
                        <td>
                            <Translate>status</Translate>
                        </td>
                        {
                            allValues?.filter(item => category.is_pve ? item?.pve : !item.pve).map((item, index) =>
                                <td key={item.id}>
                                    {item.level_name}
                                </td>
                            )
                        }
                    </tr>
                    <tr>
                        <td>
                            <Translate>payment</Translate>
                        </td>
                        {
                            allValues?.filter(item => category.is_pve ? item?.pve : !item.pve).map((item, index) =>
                                <td key={item.id}>
                                    {item.cost} EC
                                </td>
                            )
                        }
                    </tr>
                    </tbody>

                </table>
            </div>

        </TableNextBonusesStyled>
    )
}
