import React from 'react'
import './pricingContainer.css'

const PricingContainer = () => {
  return (
    <>
        <div className='pricingcontainer'>  
            <h2 className='pricingheading'>Pricing</h2>

            <h3 className='pricingheading2'>Community Edition</h3>

            <span className='pricingtext'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, vel eos. Officiis officia culpa asperiores, libero cumque quo accusamus ullam architecto facere? Dicta voluptatem aliquam quaerat soluta quidem ut ex.
            </span>


            
            <div className='pricingchart'>
                <h6 className='downloadpricingheading'>Download our pricing chart</h6>
                <button className='pricingdownloadbutton'>
                    Download
                </button>
            </div>



            <div className='pricingbox'>

                <div className='pricingboxfirstrow'>
                    <div className='pricingfirstrowempty'>
                    </div>

                    <div className='pricingsmall'>
                        <div className='pricingfirstfirst'>
                            <div>
                                <span className='pricingfirstfirstlogobox'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                                    </svg>
                                </span>
                                <span className='pricingfirstfirstheading'>
                                    Self-Hosted
                                </span>
                            </div>
                            <span className='pricingfirstfirsttxt'>
                                (On-premise)
                            </span>
                        </div>
                    </div>

                    <div className='pricinglarge'>
                        <div className='pricingfirstsecond'>
                            <div className='pricingfirstsecondupper'>
                                <div className='pricingfirstseconduppercont'>
                                    <span className='pricingfirstsecondlogobox'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cloud-fill" viewBox="0 0 16 16">
                                            <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
                                        </svg>
                                    </span>
                                    <span className='pricingfirstsecondheading'>
                                        Shared Cloud
                                    </span>
                                </div>
                                <span className='pricingfirstsecondtxt'>
                                    (Shared SaaS)
                                </span>

                            </div>

                            <div className='pricingfirstsecondbottom'>
                                <div className='pricingmedium'>
                                    <span className='pricingfirstsecongbottomtxt'>Basic</span>
                                </div>

                                <div className='pricingmedium'>
                                    <span className='pricingfirstsecongbottomtxt'>Pro</span>
                                </div>

                                <div className='pricingmedium'>
                                    <span className='pricingfirstsecongbottomtxt'>Ultra</span>
                                </div>

                                <div className='pricingmedium'>
                                    <span className='pricingfirstsecongbottomtxt'>Mega</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pricingmedium'>
                        <div className='pricingfirstsecond'>
                            <div className='pricingfirstsecondupper'>
                                <div className='pricingfirstseconduppercont'>
                                    <span className='pricingfirstsecondlogobox'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-hdd-stack-fill" viewBox="0 0 16 16">
                                            <path d="M2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z"/>
                                        </svg>
                                    </span>
                                    <span className='pricingfirstsecondheading'>
                                        Dedicated Cloud
                                    </span>
                                </div>
                            </div>
                            <div className='pricingfirstsecondbottom'>
                                <div className='pricinglarge'>
                                    <span className='pricingfirstsecongbottomtxt'>Hybrid</span>
                                </div>

                                <div className='pricinglarge'>
                                    <span className='pricingfirstsecongbottomtxt'>Full</span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>


                <div className='pricingboxsecondrow'>
                    <div className='pricingsmall'>
                        <span className='pricinglefttxt'>Price</span>
                    </div>

                    <div className='pricingsmall'>
                        <span className='pricingtxt'>Free</span>
                    </div>

                    <div className='pricingsmall'>
                        <span className='pricingtxt'>Free</span>
                    </div>

                    <div className='pricingsmall'>
                        <span className='pricingtxt'>7 EUR/month</span>
                    </div>

                    <div className='pricingsmall'>
                        <span className='pricingtxt'>27 EUR/month</span>
                    </div>

                    <div className='pricingsmall'>
                        <span className='pricingtxt'>54 EUR/month</span>
                    </div>

                    <div className='pricingmedium'>
                        <span className='pricingtxt'>Contact Us</span>
                    </div>
                </div>
                

                <div className='pricingboxthirdrow'>
                    <div className='pricingsmall'>
                        <span className='pricinglefttxt'>Support</span>
                    </div>

                    <div className='pricingsmall'>
                        <span className='pricingtxt'>Community</span>
                    </div>

                    <div className='pricinglarge'>
                        <div className='pricingthirdfirsthalf'>
                            <span className='pricingtxt'>Community</span>
                        </div>
                        <div className='pricingthirdsecondhalf'>
                            <span className='pricingtxt'>Community and email support</span>
                        </div>
                    </div>

                    <div className='pricingmedium'>
                        <span className='pricingtxt'>Direct support via email, phone, or web conferrence</span>
                    </div>
                </div>


                <div className='pricingboxthirdrow'>
                    <div className='pricingsmall'>
                        <span className='pricinglefttxt'>Infrastructure</span>
                    </div>

                    <div className='pricingsmall'>
                        <span className='pricingtxt'>Yours</span>
                    </div>

                    <div className='pricinglarge'>
                        <span className='pricingtxt'>Ours</span>
                    </div>

                    <div className='pricingmedium'>
                        <span className='pricingtxt'>Ours</span>
                    </div>
                </div>


                <div className='pricingboxthirdrow'>
                    <div className='pricingsmall'>
                        <span className='pricinglefttxt'>Updates</span>
                    </div>

                    <div className='pricingsmall'>
                        <span className='pricingtxt'>Updates on time</span>
                    </div>

                    <div className='pricinglarge'>
                        <span className='pricingtxt'>Automatic to the latest version</span>
                    </div>

                    <div className='pricingmedium'>
                        <div className='pricinglarge'>
                            <span className='pricingtxt'>Automatic to the latest version</span>
                        </div>

                        <div className='pricinglarge'>
                            <span className='pricingtxt'>As you wish</span>
                        </div>
                    </div>
                </div>
                

                <div className='pricingboxthirdrow'>
                    <div className='pricingsmall'>
                        <span className='pricinglefttxt'>Uptime</span>
                    </div>

                    <div className='pricingsmall'>
                        <span className='pricingtxt'>Depends on you</span>
                    </div>

                    <div className='pricinglarge'>
                        <span className='pricingtxt'>No SLA, but its practically 99%</span>
                    </div>

                    <div className='pricingmedium'>
                        <span className='pricingtxt'>99%</span>
                    </div>
                </div>


                <div className='pricingboxthirdrow'>
                    <div className='pricingsmall'>
                        <span className='pricinglefttxt'>Available Region</span>
                    </div>

                    <div className='pricingsmall'>
                        <span className='pricingtxt'>Wherever you want</span>
                    </div>

                    <div className='pricinglarge'>
                        <span className='pricingtxt'>North America Asia.....</span>
                    </div>

                    <div className='pricingmedium'>
                        <span className='pricingtxt'>One region of your choice </span>
                    </div>
                </div>


                <div className='pricingboxsecondrow'>
                    <div className='pricingsmall'>
                        <span className='pricinglefttxt'>Submissions</span>
                    </div>

                    <div className='pricingsmall'>
                        <span className='pricingtxt'>Unlimited</span>
                    </div>

                    <div className='pricingsmall'>
                        <span className='pricingtxt'>Limited at 50 /day</span>
                    </div>

                    <div className='pricingsmall'>
                        <span className='pricingtxt'>Unlimited, includes 500 /day, then 0.001 EUR / batched submission</span>
                    </div>

                    <div className='pricingsmall'>
                        <span className='pricingtxt'>Unlimited, includes 2000 /day, then 0.001 EUR / batched submission </span>
                    </div>

                    <div className='pricingsmall'>
                        <span className='pricingtxt'>Unlimited, includes 5000 /day, then 0.001 EUR / batched submission</span>
                    </div>

                    <div className='pricingmedium'>
                        <span className='pricingtxt'>Unlimited, custom daily quota, then 0.001 EUR / batched submission</span>
                    </div>

                </div>
                

                <div className='pricingboxsecondrow'>
                    <div className='pricingsmall'>
                        <span className='pricinglefttxt'>Batched Submissions</span>
                    </div>

                    <div className='pricingsmall'>
                        <span className='pricingtxt'>Unlimited</span>
                    </div>

                    <div className='pricingsmall'>
                        <span className='pricingtxt'>Limited at 50 /day</span>
                    </div>

                    <div className='pricingsmall'>
                        <span className='pricingtxt'>Unlimited, includes 500 /day, then 0.001 EUR / batched submission</span>
                    </div>

                    <div className='pricingsmall'>
                        <span className='pricingtxt'>Unlimited, includes 2000 /day, then 0.001 EUR / batched submission </span>
                    </div>

                    <div className='pricingsmall'>
                        <span className='pricingtxt'>Unlimited, includes 5000 /day, then 0.001 EUR / batched submission</span>
                    </div>

                    <div className='pricingmedium'>
                        <span className='pricingtxt'>Unlimited, custom daily quota, then 0.001 EUR / batched submission</span>
                    </div>

                </div>

                
                <div className='pricingboxsecondrow'>
                    <div className='pricingfirstrowempty'>
                    </div>

                    <div className='pricingsmall'>
                        <a href="/" className='pricingbutton2'>
                            Install
                        </a>

                    </div>

                    <div className='pricinglarge'>
                        <a href="/" className='pricingbutton2'>
                            Subscribe
                        </a>
                    </div>

                    <div className='pricingmedium'>
                        <a href="/" className='pricingbutton2'>
                            Contact Us
                        </a>
                    </div>

                </div>


            </div>

        </div>
    </>
  )
}

export default PricingContainer
