import './ExHeadTestimonialSection.css'
import ExHead from '../assets/ex-head-img.png'

const ExHeadTestimonialSection = () => {
  return (
    <section className="ex-head-testimonial">
        <div className='u-padding'>
            <div className='at-grid'>
                <img src={ExHead} alt='ex-head-img' className='ex-head-content'/>

                <div className='video ex-head-content' style={{paddingTop:'56.27659574468085%'}}>
                    <iframe src='https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fplayer.vimeo.com%2Fvideo%2F894779313%3Fapp_id%3D122963&dntp=1&display_name=Vimeo&url=https%3A%2F%2Fvimeo.com%2F894779313&image=https%3A%2F%2Fi.vimeocdn.com%2Fvideo%2F1769150387-3c497228ac5383cbc919c8a32ecadb7efe2735d64548d6e91a7f1c8178b23455-d_1280&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=vimeo' width='940' height='529' scrolling='no'  allowFullScreen title='GrowthX Slack'>
                    </iframe>
                </div>
            </div>
        </div>
    </section>
  )
}
export default ExHeadTestimonialSection