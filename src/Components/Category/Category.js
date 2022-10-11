import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ quizCategory }) => {
    const { name, logo, total, id } = quizCategory;
    return (
        <div className='w-full  mx-auto p-2'>
            <div className="flex  text-white relative flex-col items-center  flex-1 p-4 bg-emerald-900 rounded-lg shadow-lg shadow-slate-500">
                <div >
                    <img className='w-80' src={logo} alt="" />
                </div>
                <p className='absolute top-4  right-4 bg-red-900 px-2 rounded-md '>Total Quiz {total}</p>
                <div className='lg:flex justify-between   items-center  mt-3 pt-3'>
                    <p className=" font-mono text-2xl mb-3 lg:m-0">{name} Quiz...</p>
                    <Link>
                        <button className="btn font-bold btn-wide  btn-primary rounded-md">Start Practice </button>
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default Category;