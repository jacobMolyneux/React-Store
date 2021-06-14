import React from 'react'
import Navbar from './Components/NavigationBar.js'
import Product from './Components/Product.js'

const shopPage = () => {
    return(
        <div>
            <Product name = 'Iphone' price = {1000} />
        </div>
    )
}
export default shopPage;