import React, { useContext } from 'react';
import { CategoryContext } from '../../Layout/Main';
import Category from '../Category/Category'



const Quizs = () => {
    const quizCategories = useContext(CategoryContext);
    return (
        <div>

            <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2  items-center justify-center sm:p-10">
                {
                    quizCategories.map(quizCategory => <Category key={quizCategory.id} quizCategory={quizCategory}></Category>)
                }
            </div>

        </div>
    );
};

export default Quizs;