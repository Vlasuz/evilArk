import React, { useEffect } from 'react'

interface IBreadcrumbsProps {
    location: string
}

export const Breadcrumbs:React.FC<IBreadcrumbsProps> = ({location}) => {

    return (
        <div className="breadcrumbs">
            <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                    <a href="index.html" className="breadcrumbs__link">Home</a>
                </li>
                <li className="breadcrumbs__item">
                    Select category
                </li>
            </ul>
        </div>
    )
}
