import React, { useState } from 'react';
import './ProductPage.css'

const ProductPages = () => {
    const [productItems, setproductItems] = useState([]);
    const [productName, setproductName] = useState("");
    const [productSpecification, setproductSpecification] = useState("");
    const [productPrice, setproductPrice] = useState("");
    const [selectedId, setSelectedId] = useState(0);

    function onChangeNameHandler(e) {
        setproductName(e.target.value);
    }
    function onChangeSpecificationHandler(e) {
        setproductSpecification(e.target.value);
    }
    function onChangePriceHandler(e) {
        setproductPrice(e.target.value);
    }
    function addProductItems(id) {
        setproductItems(val => { 
            return [...val, { id: val.length + 1, productName: productName, productSpecification: productSpecification, productPrice: productPrice }] 
        })

        setproductName("")
        setproductSpecification("")
        setproductPrice("")
    }
    function onDeleteItems(id) {
        setproductItems(productItems.filter(productItemsList => productItemsList.id !== id))
    }
    
    function EditProduct(id) {
        let product = productItems.find((product) => {
            return product.id === id
        })
        setproductName(product.productName)
        setproductSpecification(product.productSpecification)
        setproductPrice(product.productPrice)
        setSelectedId(id)
    }

    function onEditProduct(id) {
        setproductItems((val) => {
            return val.map((product) => {
                if (product.id === id) {
                    return { id: id, productName: productName, productSpecification: productSpecification, productPrice: productPrice }
                } else {
                    return product
                }
            })
        })
        setSelectedId(0)
        setproductName('')
        setproductSpecification('')
        setproductPrice('')
    }
    return (
        <div className='product-management-app'>
            <div className='product-details-grid'>
                {
                    productItems.map((productItemsList, index) => {
                        return (
                            <div key={index} className='product-details' >
                                <div><span>{productItemsList.productName}</span></div>
                                <div> <span>{productItemsList.productSpecification}</span></div>
                                <div> <span>{productItemsList.productPrice}</span></div>
                                <div className='product-actions'>
                                <button className='edit-button' onClick={() => EditProduct(productItemsList.id)}>Edit</button>
                                <button className='delete-button' onClick={() => onDeleteItems(productItemsList.id)}>Delete</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='add-product-item'>
                <input type='text' placeholder='Product Name' value={productName} onChange={onChangeNameHandler}></input>
                <input type='text' placeholder='Specification' value={productSpecification} onChange={onChangeSpecificationHandler}></input>
                <input type='number' placeholder='Price' value={productPrice} onChange={onChangePriceHandler}></input>
                {/* <button onClick={addProductItems}>Add</button> */}
                 {
                    selectedId === 0 ?
                        <button className='button add' onClick={addProductItems}>Add</button> :
                        <button className='button edit' onClick={() => onEditProduct(selectedId)}>Edit</button>
                }

            </div>

        </div>
    )
}

export default ProductPages;