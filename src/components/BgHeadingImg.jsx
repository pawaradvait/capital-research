import React from 'react'
import bgHeadingImg from '../assets/bgHeadingImg.png'

const BgHeadingImg = ({heading}) => {
  return (
    <div>
        <marquee className="text-red-500">The possibility of losing all of your money is one of the many risks associated with stock market trading and investing.  Profits or fixed returns are not guaranteed by Market Research Advisory.  We only take payments to our official current account—never to personal accounts—and we don't offer services through Telegram, Instagram, or other such networks.  You are entirely in charge of all choices and results, even though our research services share trading ideas with clear goals and stop-losses.  Any losses suffered are not our responsibility.  We do not offer individualised investment advice; our service is solely for research and informational purposes.  Before subscribing, please carefully read our Terms & Conditions, Legal Disclaimer, Refund Policy, and other rules.</marquee>
        <img src={bgHeadingImg} className='w-full h-60' alt="Background Image" />
        <h1 className='relative bottom-36 text-white font-extrabold text-center text-6xl' style={{textShadow:'5px 5px 5px black'}}>{heading}</h1>
    </div>
  )
}

export default BgHeadingImg