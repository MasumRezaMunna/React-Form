import React from 'react';

const ProductTable = ({products}) => {
    return (
        <div>
            <h3>Products: {products.length}</h3>
        </div>
    );
};

export default ProductTable;