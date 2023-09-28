import React, {useEffect, useState} from 'react'
import {useImages} from "../../../hooks/images";
import {IFilterShop} from "../../../models";

interface IShopFilterProps {
    setFilter: any
    filter: IFilterShop
}

export const ShopFilter: React.FC<IShopFilterProps> = ({setFilter, filter}) => {
    const {arrowUp} = useImages()
    const [titleSearch, setTitleSearch] = useState('')

    const chooseCategory = (category: string) => {
        let isHaveCategory = filter.category.some(item => item === category)
        let localCategory: string[] = [];

        if(isHaveCategory) {
            localCategory = filter.category.filter(item => item !== category)
        } else {
            localCategory = [...filter.category, category]
        }

        setFilter((prev: IFilterShop) => {
            return {
                name: prev.name,
                orderBy: prev.orderBy,
                category: localCategory,
            }
        })
    }

    const categories = [
        {
            title: 'Dinos',
            slug: 'dinos'
        },
        {
            title: 'Kits',
            slug: 'kits'
        },
        {
            title: 'People',
            slug: 'people'
        },
        {
            title: 'Grasses',
            slug: 'grasses'
        },
    ]

    const ordersBy = ['Name', 'Price', 'Stock']

    const handleSearchTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleSearch(e.target.value)

        setFilter((prev: IFilterShop) => {
            return {
                name: e.target.value,
                orderBy: prev.orderBy,
                category: prev.category,
            }
        })
    }

    return (
        <div className="cards-categories__top top-cards-categories">
            <div className="top-cards-categories__filter filter-top-cards-categories">
                <input placeholder="Filter by name" autoComplete='off' onChange={handleSearchTitleChange} value={titleSearch} type='text' name='form[]'
                       className='filter-top-cards-categories__input'/>
                <div className="filter-top-cards-categories__items">

                    {
                        categories.map(item =>
                            <div key={item.slug} onClick={_ => chooseCategory(item.slug)} className={"filter-top-cards-categories__item" + (filter.category.some(cat => cat === item.slug) ? " active" : "")}>
                                <div className="filter-top-cards-categories__link">
                                    {item.title}
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
            <div className="top-cards-categories__order order-top-cards-categories">
                <div className="order-top-cards-categories__text">Order by</div>
                <div className="order-top-cards-categories__items">

                    {
                        ordersBy.map((item, index) =>
                            <button
                                key={index}
                                className="order-top-cards-categories__item item-order-top-cards-categories order-top-cards-categories__item_name">
                                <div className="item-order-top-cards-categories__arrows">
                                    <div
                                        className="item-order-top-cards-categories__arrow item-order-top-cards-categories__arrow-up">
                                        <img src={arrowUp} alt="arrow-up"/>
                                    </div>
                                    <div
                                        className="item-order-top-cards-categories__arrow item-order-top-cards-categories__arrow-down">
                                        <img src={arrowUp} alt="arrow-down"/>
                                    </div>
                                </div>
                                <div className="item-order-top-cards-categories__label">
                                    {item}
                                </div>
                            </button>
                        )
                    }

                </div>
            </div>
        </div>
    )
}
