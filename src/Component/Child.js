import React from 'react'
import "./Child.css";

function Child(props) {


    return (
        <div className="main__container">
            <div className="div__box"><p>HOVER ME</p>
                <div className={props.position}>{props.position} tooltip</div>
            </div>

        </div>
    )
}

export default Child
