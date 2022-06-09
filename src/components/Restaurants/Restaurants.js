import React from 'react';

const Restaurants = () => {

    return (
        <section className="restaurants">
          <div className="restaurants__heading">
            <h2 className="restaurants__title">Рестораны</h2>
            <label className="restaurants__search">
              <input type="text" className="input input-search" placeholder="Поиск блюд и ресторанов"/>
            </label>
          </div>
          <div className="restaurants__cards cards">
              <div className='restaurants__spinner'>
                  <img src="" alt='spinner' />
              </div>
          </div>
        </section>
    )
}

export default Restaurants;