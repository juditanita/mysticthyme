import React from 'react'
import Paragraphs from './ShortComponets/Paragraphs'

import ClearBtn from './ShortComponets/ClearBtn'

function Banner(props) {
  let {classNameH1, classNamePar,classNameBtn,childrenH1,childrenPar,childrenBtn}=props;
  classNameH1=` text-4xl md:text-5xl font-bold mt-8 ${classNameH1}`
  classNamePar =` md:w-full md:px-4 mx-auto w-3/4 ${classNamePar}`
  classNameBtn=`w-1/2 mx-auto ${classNameBtn}`
  return (
    <article className='banner-container bg-red-100 text-center flex flex-col my-8 pb-8 gap-y-8 '>
        <h1 className={classNameH1}>{childrenH1}</h1>
        <Paragraphs className={classNamePar}>{childrenPar}</Paragraphs>
    <ClearBtn className={classNameBtn}>{childrenBtn}</ClearBtn>
   
   
    </article>
  )
}

export default Banner