import React from 'react';

const SearchInput = () => {

    return(
        <div className="restaurants__heading">
            <h2 className="restaurants__title">Рестораны</h2>
            <label className="restaurants__search">
            <input type="text" className="input input-search" placeholder="Поиск блюд и ресторанов"/>
            </label>
        </div>
    )
}

export default SearchInput;