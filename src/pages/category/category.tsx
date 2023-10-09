import React, {useEffect, useRef} from 'react'
import {Footer} from "../../components/footer/footer";
import {useImages} from "../../hooks/images";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../../redux/toolkitSlice";
import {Breadcrumbs} from "../../components/breadcrumbs/breadcrumbs";
import {useLocation, useNavigate} from "react-router-dom";
import {IServers} from "../../models";

interface ICategoryProps {

}

export const Category: React.FC<ICategoryProps> = () => {

    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const servers: IServers[] = useSelector((state: any) => state.toolkit.servers)
    const nextPage = useSelector((state: any) => state.toolkit.page)

    const handleChoose = (e: React.MouseEvent<HTMLAnchorElement>, category: string) => {
        e.preventDefault()

        navigate(nextPage || '/shop')
        dispatch(setCategory(category))
    }

    return (
        <main className="select-category">
            {location.pathname !== '/' && <Breadcrumbs location={location.pathname}/>}
            <section className="select-category__main">
                <div className="select-category__container container">
                    <div className="select-category__body">
                        <h2 className="select-category__title title-h2">Select a cluster</h2>
                        <div className="select-category__row">

                            {
                                servers?.map((item, index) =>
                                    <div key={index} className="select-category__column">
                                        <div className="select-category__item item-select-category">
                                            <div className="item-select-category__image-block">
                                                <div className="item-select-category__image">
                                                    <img src={item.image} alt="4 man shop"/>
                                                </div>
                                                <div className="item-select-category__label">
                                                    {item.name}
                                                </div>
                                            </div>
                                        </div>
                                        <a href="" onClick={e => handleChoose(e, item.name)}
                                           className="select-category__btn btn btn_small">Choose</a>
                                    </div>
                                )
                            }

                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    )
}
