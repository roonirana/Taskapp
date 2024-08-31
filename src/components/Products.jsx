import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/productlist';

const Products = () => {
    const dispatch = useDispatch();
    const { products, status, error } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <div className='text-center justify-center items-center justify-items-center bg-red-300 justify-self-center flex flex-col'>
            {products && products.length > 0 ? (
                products.map((product, index) => (
                    <div key={index}>
                        <div>{product.state}</div>
                        <img src={product.thumbnailUrl} alt={product.name} />
                    </div>
                ))
            ) : (
                <>
                    {status && <p className='text-center '>Loading products...</p>}
                    {error && <p>Error loading products: {error}</p>}
                </>
            )}
        </div>
    );
};

export default Products;
