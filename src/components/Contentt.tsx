import React from "react";
import './contentt.css';




export function Contentt() {


    return (
        <td className="flex maindiv sdiv">
            <tr className="coinname">Coin</tr>
            <tr className="percentchange">24h Change</tr>
            <tr className="lastprice">Last Price</tr>
            <tr className="hchange">High per 24h</tr>
            <tr className="lchange">Low per 24h</tr>
        </td>
    )
}