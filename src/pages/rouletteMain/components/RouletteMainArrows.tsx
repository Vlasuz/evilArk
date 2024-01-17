import React, {useEffect} from 'react'

interface IRouletteMainArrowsProps {

}

export const RouletteMainArrows: React.FC<IRouletteMainArrowsProps> = () => {

    return (
        <>
            <div className="arrow arrow__top">
                <svg width="1455" height="28" viewBox="0 0 1455 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M727.268 25C728.038 26.3333 729.962 26.3333 730.732 25L739.392 10C740.162 8.66667 739.2 7 737.66 7H720.34C718.8 7 717.838 8.66667 718.608 10L727.268 25Z" fill="#FF6C3D"/>
                    <path d="M2 10C0.89543 10 0 9.10457 0 8C0 6.89543 0.89543 6 2 6V10ZM2 6H1455V10H2V6Z" fill="#FF6C3D"/>
                </svg>
            </div>
            <div className="arrow arrow__bottom">
                <svg width="1455" height="28" viewBox="0 0 1455 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M727.268 25C728.038 26.3333 729.962 26.3333 730.732 25L739.392 10C740.162 8.66667 739.2 7 737.66 7H720.34C718.8 7 717.838 8.66667 718.608 10L727.268 25Z" fill="#FF6C3D"/>
                    <path d="M2 10C0.89543 10 0 9.10457 0 8C0 6.89543 0.89543 6 2 6V10ZM2 6H1455V10H2V6Z" fill="#FF6C3D"/>
                </svg>
            </div>
        </>
    )
}
