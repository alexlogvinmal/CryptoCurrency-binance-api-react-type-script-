import React from "react";
import './contentt.css';




export function Contentt() {


    return (
        <div className="flex maindiv sdiv">
            <p className="coinname">Coin</p>
            <p className="percentchange">24h Change</p>
            <p className="lastprice">Last Price</p>
            <p className="hchange">High per 24h</p>
            <p className="lchange">Low per 24h</p>
        </div>
    )
}