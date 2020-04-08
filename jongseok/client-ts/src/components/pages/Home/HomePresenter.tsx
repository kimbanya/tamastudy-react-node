import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import CommonLayout from '../../CommonLayout/index';

interface Props {}

const HomePresenter = (props: Props) => {
  return (
    <CommonLayout>
      <div className="nike__body">
        <div className="container">
          <div className="card">
            <div className="imgBx">
              <img src="./nike_1.png" alt="nike" />
            </div>
            <div className="contentBx">
              <h2>Nike Shoes</h2>
              <div className="size">
                <h3>Size :</h3>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
              </div>
              <div className="color">
                <h3>Color: </h3>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Link to={'#'}>Buy Now</Link>
            </div>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
};

export default HomePresenter;
