import { Loader } from './components/Loader';
import { ErrorMesage } from './components/ErrorMesage';
import {Product} from './components/Product'
import {useProducts} from './hooks/products'
import { Header } from './components/Header';
import { useState } from 'react';
// import {products} from './data/products'
import './components/filter.css';
import { Contentt } from './components/Contentt';

function App() {
 
const {loading,error,products} = useProducts()
const [selected, setSelected] = useState('USDT');
const [celected, cetSelected] = useState('0');


let fproducts

if(celected=='1'){
  fproducts = products.filter(product=>product.q==selected  && +product.o < +product.c)
}else if(celected=='2'){
  fproducts = products.filter(product=>product.q==selected  && +product.o > +product.c)
}else{
  fproducts = products.filter(product=>product.q==selected )
}



  return (
    <div>
    <Header/>
    <div id='filter' >
    <p>Show <select value={celected} 
                onChange={(e) => cetSelected(e.target.value)} className='select-css'>
                <option selected value='0'>All</option>  
                <option value='1'>Gainers</option>      
                <option value='2'>Losers</option>
            </select>
            </p>
            <p>Exchange rate to <select value={selected} 
                onChange={(e) => setSelected(e.target.value)} className='select-css'>
                <option selected value='USDT'>USDT</option>  
                <option value='EUR'>EUR</option>      
                <option value='UAH'>UAH</option>
                <option value='RUB'>RUB</option>
                <option value='BTC'>BTC</option>
                <option value='ETH'>ETH</option>
            </select>
            </p>
        </div>
        <Contentt/>
    <div className='container mx-auto '> 
      {loading && <Loader/> }
      {error && <ErrorMesage error={error}/>} 
      { fproducts.map(product => <Product product={product} key={product.s}/>) }
    </div>
    </div>
  )
}

export default App;
