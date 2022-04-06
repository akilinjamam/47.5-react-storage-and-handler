import React from 'react';
import { divide } from '../Components/Cosmetics/calculates';

const Utilities = () => {

    const totalWalletPrice = 320000;
    const singlePrice = 320;
    const walletQuantity = divide(totalWalletPrice, singlePrice);
    return (
        <div>
            <h2>in this section you will get money bag. total money bag price: {totalWalletPrice}</h2>
            <h3>  wallet Quantity : {walletQuantity} </h3>
        </div>
    );
};

export default Utilities;