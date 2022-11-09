import { useState } from "react"
import { IProduct } from "../models"
import './product.css';


interface ProductProps {
    product: IProduct
}

export function Product({ product }: ProductProps) {
    let detailsfire=false
    let detailscrash=false


    // const btnBgClassName = details ? 'bg-yellow-400' : 'bg-blue-400'
    const cerrencyClassName = +product.c > +product.o ? 'text-green-500' : 'text-red-500'
    const cerrencyClasses = ['font-bold ', cerrencyClassName]
    // const btnClasses = ['py-1 px-1 border ', btnBgClassName]
    const percent = ((+product.c - +product.o) / +product.o * 100).toFixed(2);
    const percentClassName = +percent > 0 ? 'bg-green-500' : 'bg-red-500'
    const percentClasses = ['percentcolor ', percentClassName]
    const fireClassName = +percent> 10 ? 'bg-green-500' : 'bg-red-500' || +percent < -10 ? 'bg-red-500' : 'bg-green-500'
    if(+percent >= 10){
        detailsfire=true;
    }else if (+percent <= -10){
        detailscrash=true
    }



    return (
        <div className="border py-4 px-4 mb-2 borderr16">
            <td className=" founser flex  items-center ">
                <tr className='coin'>
                    <p className="font-bold">{product.b}</p>
                    <p>{product.an}</p>
                </tr>
                <tr className='percent'>
                    <p><span className={percentClasses.join(' ')}>{percent}%</span></p>                  
                
                </tr>
                <tr className='gav'>
                    {detailsfire && <svg className='fire' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-2.8-5.6-5.6-11.2-9.8-16.8l-50.6 58.8s-81.4-103.6-87.1-110.6C133.1 243.8 112 273.2 112 306.8C112 375.4 162.6 416 225.7 416z"/></svg>}
                    {detailscrash && <svg className='fire' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M384 352c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32s-32 14.3-32 32v82.7L342.6 137.4c-12.5-12.5-32.8-12.5-45.3 0L192 242.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0L320 205.3 466.7 352H384z"/></svg>}
                </tr>                
                <tr className='currency'>
                    <p ><small> {product.q}</small> <a className={cerrencyClasses.join(' ')}>{product.c}</a></p>   
                </tr>

                <tr className='highcurrency'>
                    <p ><small> {product.q}</small> <span style={{ fontWeight: 'bold' }}>{product.h}</span></p>
                </tr>
                <tr className='lowcurrency'>
                    <p ><small> {product.q}</small> <span style={{ fontWeight: 'bold' }}>{product.l}</span></p>
                </tr>
                </td>

            {/* <button
                    className={btnClasses.join(' ')}
                    onClick={() => setDetails(prev => !prev)}
                >{details ? 'hide wave ▲' : 'show wave▼'}</button>
            </div>
            {details && <div>
                
                
            </div>}
*/}
        </div>
    )
}