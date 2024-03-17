import React from 'react'
import './Threepillorsimage.css'

export default function Threepillorsimage() {
  return (
     <>
    
        <div className="first">
        <h2>Enabled By</h2>
        <p>3 Pillors</p>
    </div>
    <div className='image'>
      <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/65690c212b8bf704936c7dfc_pillar-1-p-800.png"  alt="Image" className='threepillor_image'/>
      <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/65690f31d887f1c1fd32ac6e_pillar-2-p-800.png" alt="Image" className='threepillor_image'/>
      <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/65690f461ab87ef7416d44b2_pillar-3-p-800.png" alt="Image" className='threepillor_image'/>
    </div>
    </>
  )
}
