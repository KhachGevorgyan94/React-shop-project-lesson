import React, {useEffect, useState} from "react";
import {AdminHeader} from "../../components/AdminHeader";
import './style.scss'
import axios from "axios";
import {ProductCard} from "../../components/ProductCard";

export const Products = () => {
    const [formData, setFormData] = useState({
        name: '',
        price: 0,
        description: '',
        image: null
    })

    const [productList, setProductList] = useState([])

    const uploadImage = (e) => {
        let reader = new FileReader();
        reader.onload = function () {
            setFormData({...formData, image: reader.result})
        }
        reader.readAsDataURL(e.target.files[0]);
    }


    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleClick = () => {
        axios.post('https://crudcrud.com/api/3e1aa1dab5944a47892a8f72771fd8e1/products', formData, {}).then((data) => {
            console.log(data)
            getProductList()
        })
    }


    useEffect(() => {
        getProductList()
    }, []);

    const getProductList = async () => {
        const result = await axios.get('https://crudcrud.com/api/3e1aa1dab5944a47892a8f72771fd8e1/products')
        if (result.data) {
            setProductList(result.data)
        }
    }
    return <>

        <AdminHeader title={'Products'}/>
        <div className='page-body'>
            <div className='add-product-form G-flex G-flex-wrap'>
                <div className='G-input G-width-50'>
                    <p>Name</p>
                    <label>
                        <input onChange={handleChange} type="text" name={'name'} value={formData.name}/>
                    </label>
                </div>

                <div className='G-input G-width-50'>
                    <p>Price</p>
                    <label>
                        <input onChange={handleChange} type="number" name={'price'} value={formData.price}/>
                    </label>
                </div>
                <div className='G-input G-width-50'>
                    <p>Description</p>
                    <label>
                        <input onChange={handleChange} type="text" name={'description'} value={formData.description}/>
                    </label>
                </div>
                <div className='G-input G-width-50'>
                    <p>Image</p>
                    <label>
                        <p className={'G-button'}>Upload image</p>
                        <input onChange={uploadImage} className='input-file' type="file" name={'image'}/>
                    </label>
                </div>

                <button className='G-button' onClick={handleClick}>Add product</button>
            </div>
            <div className='product-list'>
                {productList.length &&
                    productList.map((item, index) => {
                        return <ProductCard item={item} key={index}/>
                    })
                }
            </div>
        </div>

    </>
}