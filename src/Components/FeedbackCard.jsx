import React from 'react'
import { quotes } from '../assets'
import styles from '../style'

const FeedbackCard = ({ name, content, title, img}) => (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card'>
      <img src={quotes} alt="double__quotes" className="w-[42px] h-[27px] object-contain" />
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">{content}</p>
    </div>
  )

export default FeedbackCard