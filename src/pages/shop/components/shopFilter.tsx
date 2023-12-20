import React, {useEffect, useState} from 'react'
import {useImages} from "../../../hooks/images";
import {IFilterShop, ISort} from "../../../models";
import axios from "axios";
import {apiLink} from "../../../hooks/apiLink";
import {Translate} from "../../../components/translate/Translate";
import {ucs2} from "punycode";
import { useSelector } from 'react-redux';

interface IShopFilterProps {
    setFilter?: any
    filter?: IFilterShop
}

export const ShopFilter: React.FC<IShopFilterProps> = ({setFilter, filter}) => {
    const {arrowUp} = useImages()

    const [titleSearch, setTitleSearch] = useState('')
    const [chosenCategory, setChosenCategory] = useState([])
    const ordersBy: any = ["Price"]
    const [isSort, setIsSort] = useState("")
    const [categories, setCategories] = useState([])

    const category = useSelector((state: any) => state.toolkit.category)
    const language = useSelector((state: any) => state.toolkit.language)

    const chooseCategory = (category: string) => {
        if(chosenCategory.some((item: any) => item.id === category)) {
            setChosenCategory(prev => prev.filter((item: any) => item.id !== category))
        } else {
            setChosenCategory(prev => [categories.filter((item: any) => item.id === category)[0]])
        }
    }

    const handleSearchTitleChange = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setFilter({
            searchTerm: titleSearch,
            category: filter?.category,
            orderBy: filter?.orderBy,
            orderDirection: filter?.orderDirection
        })
    }

    const handleSort = (sort: string) => {
        setIsSort(prev => prev === "ASC" ? "DESC" : "ASC")

        setFilter({
            searchTerm: filter?.searchTerm,
            category: filter?.category,
            orderBy: sort,
            orderDirection: isSort
        })

    }

    // useEffect(() => {
    //     setFilter({
    //         searchTerm: filter?.searchTerm,
    //         category: chosenCategory.map((item: any) => {
    //             if(language === "en") {
    //                 return item.name_en
    //             } else if (language === "ua") {
    //                 return item.name_ua
    //             } else if (language === "ru") {
    //                 return item.name_ru
    //             }
    //         }),
    //         orderBy: filter?.orderBy,
    //         orderDirection: filter?.orderDirection
    //     })
    // }, [chosenCategory])

    // useEffect(() => {
    //     setFilter({
    //         searchTerm: filter?.searchTerm,
    //         category: chosenCategory.map((item: any) => {
    //             if(language === "en") {
    //                 return item?.name_en
    //             } else if (language === "ua") {
    //                 return item?.name_ua
    //             } else if (language === "ru") {
    //                 return item?.name_ru
    //             }
    //         }),
    //         orderBy: filter?.orderBy,
    //         orderDirection: filter?.orderDirection
    //     })
    // }, [language])

    useEffect(() => {
        axios.get(apiLink("api/categories")).then(({data}) => {
            setCategories(data.data)
        })
    }, [])

    return (
        <div className="cards-categories__top top-cards-categories">
            <div className="top-cards-categories__filter filter-top-cards-categories">
                <form onSubmit={handleSearchTitleChange}>
                    <input placeholder="Filter by name" autoComplete='off' onChange={e => setTitleSearch(e.target.value)} value={titleSearch} type='text' name='form[]'
                           className='filter-top-cards-categories__input'/>
                </form>
                <div className="filter-top-cards-categories__items">

                    {
                        categories?.filter((item: any) => item?.server?.id === category?.id)?.map((item: any) =>
                            <div key={item?.id} onClick={_ => chooseCategory(item?.id)} className={"filter-top-cards-categories__item" + (chosenCategory.some((cat: any) => cat.id === item.id) ? " active" : "")}>
                                <div className="filter-top-cards-categories__link">
                                    {language === "ru" && item?.name_ru}
                                    {language === "ua" && item?.name_ua}
                                    {language === "en" && item?.name_en}
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
            <div className="top-cards-categories__order order-top-cards-categories">
                <div className="order-top-cards-categories__text">
                    <Translate>order_by</Translate>
                </div>
                <div className="order-top-cards-categories__items">

                    {
                        ordersBy.map((item: any, index: number) =>
                            <button key={index} onClick={_ => handleSort(item)}
                                className="order-top-cards-categories__item item-order-top-cards-categories order-top-cards-categories__item_name">
                                <div className="item-order-top-cards-categories__arrows">
                                    {(isSort === "ASC" || !isSort) && <div
                                        className="item-order-top-cards-categories__arrow item-order-top-cards-categories__arrow-up">
                                        <img src={arrowUp} alt="arrow-up"/>
                                    </div>}
                                    {(isSort === "DESC" || !isSort) && <div
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
