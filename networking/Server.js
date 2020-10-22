import React from 'react';

const apiGetAllFoods = 'https://expressionjs-postresql.herokuapp.com/api/foods';

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