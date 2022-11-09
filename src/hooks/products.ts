import axios, { AxiosError } from 'axios'
import { IProduct } from '../models';
import React, { useEffect, useState } from 'react';


export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')


  async function fetchProducts() {
    try {
      setError('')
      //setLoading(true)
    
      const response = await axios.get('https://www.binance.com/bapi/asset/v2/public/asset-service/product/get-products')
      setProducts(response.data.data.sort(function(a:any, b:any){return +b.c - +a.c}))
      
      
   
      

      setLoading(false)
    } catch (e: unknown) {
      const error = e as AxiosError
      setLoading(false)
      setError(error.message)
    }

  }

  useEffect(() => {
    setLoading(true)
    setInterval(() => {
      fetchProducts()
      
    }, 2000)

  }, [])

  return { loading, error, products }

}