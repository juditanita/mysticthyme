import React from 'react'
import questions from "../faq.js"
import Question from './ShortComponets/Questions.jsx';

function FAQuestions() {
 

 

  return (
    <div className=' z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px] '>
        <div className='container mx-auto'>
       <div className=' -mx-4 flex flex-wrap'>
       <div className="w-full px-4 ">
    <h3 className='text-center font-bold text-gray-800 text-2xl md:text-3xl mb-6'>FAQ on workshops</h3>
    <div className='px-6 w-11/12 mx-auto  py-6'>
      {
      questions.map((question) => {
        return (
          <Question key={question.id} {...question}></Question>
        );
      })}
    </div>
    </div>
  </div>
  </div>
  </div>
  )
}

export default FAQuestions