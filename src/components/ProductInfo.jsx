const ProductInfo = () => {
    const product = {
        'name' : 'Laptop',
        'price' : '$1200',
        'availability' : 'In stock',
    }
    return(
        <div>
            <p>Product Name: {product.name}</p>
            <p>Product Price: {product.price}</p>
            <p>Product Avalability: {product.availability}</p>
        </div>
    )
};

export default ProductInfo;