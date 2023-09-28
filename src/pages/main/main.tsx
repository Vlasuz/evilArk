import React, { useEffect } from 'react'
import {MainStyled} from "./main.styled";
import video from './../../assets/img/media/VideoEvilArk.mp4'
import {Banner} from "./components/banner/banner";
import {About} from "./components/about/about";
import {Servers} from "./components/servers/servers";
import {News} from "./components/news/news";
import {Faq} from "./components/faq/faq";
import {Donate} from "./components/donate/donate";
import {Contacts} from "./components/contacts/contacts";
import {Footer} from "../../components/footer/footer";

import AOS from "aos";
import "aos/dist/aos.css";
import {useParams} from "react-router-dom";

interface IMainProps {

}

export const Main:React.FC<IMainProps> = () => {

    useEffect(() => {
        AOS.init({
            once: true
        });
        AOS.refresh();
    }, []);

    return (
        <MainStyled className="home">
            <Banner/>
            <About/>
            <Servers/>
            <News/>
            <Faq/>
            <Donate/>
            <Contacts/>

            <Footer/>
        </MainStyled>
    )
}
