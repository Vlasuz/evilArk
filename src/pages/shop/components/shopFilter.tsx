import React, {useEffect, useState} from 'react'
import {useImages} from "../../../hooks/images";
import {IFilterShop, ISort} from "../../../models";
import axios from "axios";
import {apiLink} from "../../../hooks/apiLink";

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

    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get(apiLink("api/categories")).then(({data}) => {
            setCategories(data.data)
        })
    }, [])

    const ordersBy = ['Price', 'Stock']
    const [isSort, setIsSort] = useState<ISort>()

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

    const handleSort = (sort: string) => {
        setIsSort({
            isActive: !isSort?.isActive,
            sortItem: sort
        })

        setFilter((prev: IFilterShop) => {
            return {
                name: prev.name,
                orderBy: {
                    order: sort,
                    isFromLow: !isSort?.isActive
                },
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
                        categories?.map((item: any) =>
                            <div key={item.id} onClick={_ => chooseCategory(item.id)} className={"filter-top-cards-categories__item" + (filter.category.some(cat => cat === item.id) ? " active" : "")}>
                                <div className="filter-top-cards-categories__link">
                                    {item.name}
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
                            <button key={index} onClick={_ => handleSort(item)}
                                className="order-top-cards-categories__item item-order-top-cards-categories order-top-cards-categories__item_name">
                                <div className="item-order-top-cards-categories__arrows">
                                    {!(isSort?.isActive && item === isSort?.sortItem) && <div
                                        className="item-order-top-cards-categories__arrow item-order-top-cards-categories__arrow-up">
                                        <img src={arrowUp} alt="arrow-up"/>
                                    </div>}
                                    {!(!isSort?.isActive && item === isSort?.sortItem) && <div
                                        className="item-order-top-cards-categories__arrow item-order-top-cards-categories__arrow-down">
                                        <img src={arrowUp} alt="arrow-down"/>
                                    </div>}
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
