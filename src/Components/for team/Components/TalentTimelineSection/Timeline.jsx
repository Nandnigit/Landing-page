import react from 'react'

import './Timeline.css'

function TimelineSection(){
    return(
        <>
           <div className="timelineSection">
               <div className="timeline-heading">
                 <h2>How does this work? </h2>
               </div>
              <div className="timeline-Content">
                 <div className="timeline-grid-box">
                    <p className='timline-grid-text1'>Signup</p>
                    <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6433d6ee92ccec28133f56ac_timeline-grey-ongoing.svg" alt="" />
                    <p className='timline-grid-text2'>Give us more context about your company, roles your hiring for etc.</p>
                 </div>
                 <div className="timeline-grid-box">
                    <p className='timline-grid-text1'>Sign the talent agreement</p>
                    <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6433d6ee92ccec28133f56ac_timeline-grey-ongoing.svg" alt="" />
                    <p className='timline-grid-text2'>Get onboarded as a hiring partner at GrowthX by accepting the commercials.</p>
                 </div>
                 <div className="timeline-grid-box">
                    <p className='timline-grid-text1'>Post your open roles</p>
                    <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6433d6ee92ccec28133f56ac_timeline-grey-ongoing.svg" alt="" />
                    <p className='timline-grid-text2'>Get inbound requests for your roles from ~2000 operators and leaders in GrowthX.</p>
                 </div>
                 <div className="timeline-grid-box">
                    <p className='timline-grid-text1'>Talent directory</p>
                    <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6433d6ee92ccec28133f56ac_timeline-grey-ongoing.svg" alt="" />
                    <p className='timline-grid-text2'>Get Access Talent Directory to shortlist relevant profiles.</p>
                 </div>
                 <div className="timeline-grid-box">
                    <p className='timline-grid-text1'>End-to-end Support</p>
                    <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6433d6ee92ccec28133f56ac_timeline-grey-ongoing.svg" alt="" />
                    <p className='timline-grid-text2'>Our team is committed to supporting you through every step of the hiring process.</p>
                 </div>
              </div>
              <div className="timeline-content-mobile">
                 <div className="timeline-grid-box-mobile">
                    <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6433d6ee92ccec28133f56ac_timeline-grey-ongoing.svg" alt="" />
                    <div className="timeline-grid-text-box">
                    <p className='timline-grid-text1'>Signup</p>
                    <p className='timline-grid-text2'>Give us more context about your company, roles your hiring for etc.</p>
                    </div>
                 </div>
                 <div className="timeline-grid-box-mobile">
                    <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6433d6ee92ccec28133f56ac_timeline-grey-ongoing.svg" alt="" />
                    <div className="timeline-grid-text-box">
                    <p className='timline-grid-text1'>Sign the talent agreement</p>
                    <p className='timline-grid-text2'>Get onboarded as a hiring partner at GrowthX by accepting the commercials</p>
                    </div>
                 </div>
                 <div className="timeline-grid-box-mobile">
                    <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6433d6ee92ccec28133f56ac_timeline-grey-ongoing.svg" alt="" />
                    <div className="timeline-grid-text-box">
                    <p className='timline-grid-text1'>Post your open roles</p>
                    <p className='timline-grid-text2'>Get inbound requests for your roles from ~2000 operators and leaders in GrowthX.</p>
                    </div>
                 </div>
                 <div className="timeline-grid-box-mobile">
                    <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6433d6ee92ccec28133f56ac_timeline-grey-ongoing.svg" alt="" />
                    <div className="timeline-grid-text-box">
                    <p className='timline-grid-text1'>Talent directory</p>
                    <p className='timline-grid-text2'>Get Access Talent Directory to shortlist relevant profiles.</p>
                    </div>
                 </div>
                 <div className="timeline-grid-box-mobile">
                    <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/6433d6ee92ccec28133f56ac_timeline-grey-ongoing.svg" alt="" />
                    <div className="timeline-grid-text-box">
                    <p className='timline-grid-text1'>End-to-end Support</p>
                    <p className='timline-grid-text2'>Our team is committed to supporting you through every step of the hiring process.</p>
                    </div>
                 </div>
              </div>
           </div>
        </>
    )
}

export default TimelineSection