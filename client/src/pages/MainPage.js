import React from 'react';
import BLetter from '../img/logo.svg'
import '../components/MainPage/MainPage.css'

const MainPage = () => {
    const imgList = [{BLetter: BLetter}, {BLetter: BLetter}, {BLetter: BLetter}, {BLetter: BLetter}, {BLetter: BLetter}, {BLetter: BLetter}, {BLetter: BLetter}]
    const imgListing = imgList.map(item => {
        return <img src={item.BLetter} alt=""/>
    })

    return (
        <div className='main-information'>
            <div className="main-article">
                {/*<img src={BLetter} alt=""/>*/}
                <div className="main-article-text">
                    Hello! <br/>
                    I am happy to introduce you my personal portfolio web site! <br/>
                    Here you can see all my repositories and react on it...
                </div>
            </div>
            <div className="main-article">
                {imgListing}
            </div>
        </div>
    );
};

export default MainPage;