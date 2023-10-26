import React, { useEffect } from 'react'
import {NavLink} from "react-router-dom";

interface IBreadcrumbsProps {
    location: string
}

export const Breadcrumbs:React.FC<IBreadcrumbsProps> = ({location}) => {

    return (
        <div className="breadcrumbs">
            <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                    <NavLink to={"/"} className="breadcrumbs__link">Home</NavLink>
                </li>
                <li className="breadcrumbs__item">
                    Select category
                </li>
            </ul>
        </div>
    )
}
