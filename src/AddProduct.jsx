import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = () => {
    const [productCode, setProductCode] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [dateAdded, setDateAdded] = useState('');

    const handleSave = () => {
        
        alert("Product saved!");
    };

    const handleClear = () => {
        
        setProductCode('');
        setName('');
        setDescription('');
        setPrice('');
        setQuantity('');
        setDateAdded('');
    };

    return (
        <div className="container"> {/* Centering container */}
            <h2>Add Product</h2>
            <form className="form"> {/* Form styling */}
                <input
                    type="text"
                    placeholder="Product Code"
                    value={productCode}
                    onChange={(e) => setProductCode(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <input
                    type="date"
                    value={dateAdded}
                    onChange={(e) => setDateAdded(e.target.value)}
                />
                <button type="button" onClick={handleSave}>Save</button>
                <button type="button" onClick={handleClear}>Clear</button>
            </form>
        </div>
    );
};

export default AddProduct;
