/* eslint-disable react/prop-types */
import { BsArrowBarRight } from 'react-icons/bs';
import { ads } from '../../../public/img';
import BestCard from './BestCard';
import DietCard from './DietCard';
import './HomeCom.css'

const BestFood = ({ bestFood }) => {
    const bestLimit = bestFood.slice(0, 5)
    const dietLimit = bestFood.slice(5, 11)
    return (
        <>
            <div className='best-main-container shadow-2xl mb-20'>
                <h1>Best For Food</h1>
                <div style={{ float: 'right', marginTop: '-50px' }}>
                    <BsArrowBarRight className='arrow-icon' />
                </div>
                <div className="best-container mt-10">
                    <div className="best-middle">
                        {
                            bestLimit.map(item => {
                                return (
                                    <BestCard key={item.idMeal} cardItem={item} />
                                )
                            })
                        }
                    </div>
                    <div className="best-right">
                        <img src={ads} alt="" />
                    </div>
                </div>
            </div>

            <div className="diet-main-container shadow-2xl mb-20">
                <h1>Diet Food</h1>
                <div style={{ float: 'right', marginTop: '-50px' }}>
                    <BsArrowBarRight className='arrow-icon' />
                </div>
                <div className="diet-container mt-10">
                    <div className="diet-middle">
                        {
                            dietLimit.map(item => {
                                return (
                                    <DietCard key={item.idMeal} cardItem={item} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    );
};

export default BestFood;