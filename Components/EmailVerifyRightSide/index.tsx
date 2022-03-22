import React from 'react';
// import "./index.less";
require('./index.less');



const index = () => {

    return (
        <div className="fullBackground">
            <div className="text-center centerIt">
                <img className="loginMan" src="/images/loginMan.svg"></img>

                <div className="paddingIt">
                    <div className="title-text">
                        “Best service & supportive team”
                    </div>
                    <div className="details-text">
                        Impromek changed the way I’m learning baseball. All the teachers are super helpful and its absoultely worth the price.
                    </div>
                    <div>
                        <div className="name">Leslie Alexander</div>
                        <div className="designation">Digital Marketer of WebFX</div>
                    </div>
                    <img src="/images/ring.svg" className="ringImg" alt="" />
                    <img src="/images/ball.svg" className="ballImg" alt="" />
                </div>

            </div>

        </div>
    );
};

export default index;
