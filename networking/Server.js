import React from 'react';

const apiGetAllFoods = 'http://localhost:3000/api/foods';

async function getFoodsFromServer () {
    try {
        let response = await fetch(apiGetAllFoods);
        let responseJspon = await response.json();
        return responseJspon;
    } catch (error) {
        console.error(`Error is: ${error}`);
    }
}

export {getFoodsFromServer};