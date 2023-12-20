import React, {useEffect, useState} from 'react'
import {TableNextBonusesStyled} from "./TableNextBonuses.styled";
import axios from "axios";
import {apiLink} from "../../hooks/apiLink";
import {ICategory} from "../../models";
import {useSelector} from 'react-redux';

interface ITableNextBonusesProps {

}

export const TableNextBonuses: React.FC<ITableNextBonusesProps> = () => {

    const [allValues, setAllValues] = useState([
        {
            "id": 1,
            "level_name": "SponsoR",
            "color": "#fff300",
            "cost": 50,
            "pve": false
        },
        {
            "id": 2,
            "level_name": "SponsoR+",
            "color": "#8000c7",
            "cost": 100,
            "pve": false
        },
        {
            "id": 3,
            "level_name": "Crystal SponsoR",
            "color": "#00c9fc",
            "cost": 200,
            "pve": false
        },
        {
            "id": 4,
            "level_name": "Diamond SponsoR",
            "color": "#a000c2",
            "cost": 500,
            "pve": false
        },
        {
            "id": 5,
            "level_name": "Emerald SponsoR",
            "color": "#008e44",
            "cost": 1000,
            "pve": false
        },
        {
            "id": 6,
            "level_name": "Sapphire SponsoR",
            "color": "#2017df",
            "cost": 1500,
            "pve": false
        },
        {
            "id": 7,
            "level_name": "Rubin SponsoR",
            "color": "#e23c00",
            "cost": 2000,
            "pve": false
        },
        {
            "id": 8,
            "level_name": "Волонтёр \"Додо\"",
            "color": "#ffd100",
            "cost": 50,
            "pve": true
        },
        {
            "id": 9,
            "level_name": "Щедрая выдра",
            "color": "#d3ff00",
            "cost": 100,
            "pve": true
        },
        {
            "id": 10,
            "level_name": "Ферокс-меценат",
            "color": "#ff00e6",
            "cost": 250,
            "pve": true
        },
        {
            "id": 11,
            "level_name": "Филантроп Гигантозаверь",
            "color": "#00ffb0",
            "cost": 500,
            "pve": true
        },
        {
            "id": 12,
            "level_name": "Newbie",
            "color": "#000000",
            "cost": 0,
            "pve": false
        },
    ])

    const category = useSelector((state: any) => state.toolkit.category)

    useEffect(() => {
        // axios.get(apiLink("api/colors")).then(({data}) => {
        //     console.log(data.data)
        // })
    }, [])

    return (
        <TableNextBonusesStyled>
            <div className="table">
                <table>
                    <tbody>
                    {
                        allValues.filter(item => category.is_pve ? item.pve : !item.pve).map((item, index) =>
                            <tr>
                                <td>
                                    {item.level_name}
                                </td>
                                <td>
                                    {item.cost} EC
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>

        </TableNextBonusesStyled>
    )
}
