import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({ option, id, quizQuestion }) => {
    const { correctAnswer } = quizQuestion;
    const handleCheckRigthAnswere = (option) => {
        if (option === correctAnswer) {
            toast('Your Ans is Correct')
        } else {
            toast.warning('Wrong Answer! Please try again')
        }
    }

    return (
        <div>
            <div className='grid flex-grow h-35 hover:bg-gray-400 hover:text-lime-400 
            card bg-base-300 rounded-box place-items-center'>
                <div className='flex items-center w-full p-3 gap-2 '>
                    <input onChange={() => handleCheckRigthAnswere(option)} type="radio" id={option} name={id} value={option} className='radio radio-primary' />
                    <ToastContainer />
                    <label className=' cursor-pointer font-semibold' htmlFor={option} >{option}</label>
                </div>
            </div>
        </div>
    );
};

export default Option;