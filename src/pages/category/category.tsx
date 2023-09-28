import React, {useEffect, useRef} from 'react'
import {Footer} from "../../components/footer/footer";
import {useImages} from "../../hooks/images";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../../redux/toolkitSlice";
import {Breadcrumbs} from "../../components/breadcrumbs/breadcrumbs";
import {useLocation, useNavigate} from "react-router-dom";

interface ICategoryProps {

}

export const Category:React.FC<ICategoryProps> = () => {
    const {servers_6, servers_5, servers_4, servers_3, servers_2} = useImages()

    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

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
                            <div className="select-category__column">
                                <div className="select-category__item item-select-category">
                                    <div className="item-select-category__image-block">
                                        <div className="item-select-category__image">
                                            <img src={servers_6} alt="4 man shop"/>
                                        </div>
                                        <div className="item-select-category__label">4 man shop</div>
                                    </div>
                                </div>
                                <a href="" onClick={e => handleChoose(e, '4 man shop')} className="select-category__btn btn btn_small">Choose</a>
                            </div>
                            <div className="select-category__column">
                                <div className="select-category__item item-select-category">
                                    <div className="item-select-category__image-block">
                                        <div className="item-select-category__image">
                                            <img src={servers_5} alt="2 Man Cluster"/>
                                        </div>
                                        <div className="item-select-category__label">2 Man Cluster</div>
                                    </div>
                                </div>
                                <a href="" onClick={e => handleChoose(e, '2 Man Cluster')} className="select-category__btn btn btn_small">Choose</a>
                            </div>
                            <div className="select-category__column">
                                <div className="select-category__item item-select-category">
                                    <div className="item-select-category__image-block">
                                        <div className="item-select-category__image">
                                            <img src={servers_4} alt="PvE Classic"/>
                                        </div>
                                        <div className="item-select-category__label">PvE Classic</div>
                                    </div>
                                </div>
                                <a href="" onClick={e => handleChoose(e, 'PvE Classic')} className="select-category__btn btn btn_small">Choose</a>
                            </div>
                            <div className="select-category__column">
                                <div className="select-category__item item-select-category">
                                    <div className="item-select-category__image-block">
                                        <div className="item-select-category__image">
                                            <img src={servers_3} alt="PvE Primal Fear"/>
                                        </div>
                                        <div className="item-select-category__label">PvE Primal Fear</div>
                                    </div>
                                </div>
                                <a href="" onClick={e => handleChoose(e, 'PvE Primal Fear')} className="select-category__btn btn btn_small">Choose</a>
                            </div>
                            <div className="select-category__column">
                                <div className="select-category__item item-select-category">
                                    <div className="item-select-category__image-block">
                                        <div className="item-select-category__image">
                                            <img src={servers_2} alt="ARK:ASA"/>
                                        </div>
                                        <div className="item-select-category__label">ARK:ASA</div>
                                    </div>
                                </div>
                                <a href="" onClick={e => handleChoose(e, 'ARK:ASA')} className="select-category__btn btn btn_small">Choose</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    )
}
