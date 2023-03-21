import React from 'react'
import './home.css'
import pol_img from '../images/Political_img.png';
import sp1 from '../images/sp1.png'
import sp2 from '../images/sp2.png'
import sp3 from '../images/sp3.png'
import sp4 from '../images/sp4.png'
import sp5 from '../images/sp5.png'
import sp6 from '../images/sp6.png'
import step1 from '../images/step1.png'
import circen from '../images/circlecenter.png'
import step2 from '../images/step2.png'
import step3 from '../images/step3.png'
import uses2 from '../images/uses2.png'
import us1 from '../images/us1.png'
import us2 from '../images/us2.png'
import us3 from '../images/us3.png'
import exp1 from '../images/exp1.png'
import exp2 from '../images/exp2.png'
import exp3 from '../images/exp3.png'
import blog1 from '../images/blog1.png'
import blog2 from '../images/blog2.png'
import btnimg from '../images/btnimg.png'
import blog3 from '../images/blog3.png'
import blog4 from '../images/blog4.png'
import say from '../images/say.png'
import logo1 from '../images/logo2.png'
import cg from '../images/careercounselling.png'
import edfl from '../images/edflinG.png'


export default function home() {
  return (
    <div>
        <div className='navbar'>
            <div className='logo'>
                    <img src={logo1} className='image'></img>
                    <div>
                        <h5 className='edfling'>EDFLING</h5>
                        <h5 className='counsel'>CAREER COUNSELLING</h5>
                    </div>
            </div>
            <ul className='nav'>
                <li><a className='exp'>Experts</a></li>
                <li><a>Blog</a></li>
                <li><a>Founders Program</a></li>
                <li><a>For Business</a></li>
            </ul>
            <a href='#' className='log'>Signup</a> 
            <a href='#' className='log2'>Login</a>  
        </div>

        <div className='fp'>
          <div className='intro'>
                <div className='redcircle'></div>
                <div className='yellowcircle'></div>
              <h3>Get Help. Get Better</h3>
              <p>No matter what's Troubling you. Get the Support you need, right here, right now</p>
              <div>
                  <button style={{padding:'10px 50px', backgroundColor:'#297FD9'}}>CHAT NOW</button>
                  <button style={{marginLeft:'10%'}}>BOOK APPOINTMENT</button>
              </div>
              <p style={{border:'2px',borderRadius:'50%',backgroundColor:'#D0021B',width:'12px',height:'12px'}}></p>
              <p style={{fontSize:'15px',marginLeft:'24px',marginTop:'-36px'}}>22 People are currently Seeking guidence</p>
          </div>
          <img src={pol_img} className="pol_img"></img>
        </div>
        <div className='redcircle1'></div>
        <div className='yellowcircle1'></div>
        <div className='sp'>
            <div className='intro2'>
                  <h3>Happier <span>People</span></h3>
                  <h3 style={{marginLeft:'100px'}}>Happier <span style={{backgroundColor:'#fcc22c'}}>Workplaces</span></h3>
                  <p>Are you an institution looking fo create a happier community?
                      We have  helped colleges corporates, incubators. government
                      bodies in building emotionally resilient communities of more
                      than <span>2 Million People</span>.
                  </p>
                  <button>Learn More</button>
            </div>
            <div className='bigcircle'>
                <div className='smallcircle'>
                    <img src={circen}></img>
                </div>
            </div>
            <div className='spimages'>
                <div className='transparent'></div>
                <div className='polaroid'> <img src={sp1}></img></div>
                <div className='transparent'></div>
                <div className='polaroid'><img src={sp2}></img></div>
                <div className='transparent'></div>
                <div className='polaroid'><img src={sp3}></img></div>
                <div className='polaroid'><img src={sp4}></img></div>
                <div className='transparent'></div>
                <div className='polaroid'><img src={sp5}></img></div>
                <div className='transparent'></div>
                <div className='polaroid'><img src={sp6}></img></div>
                <div className='transparent'></div>
            </div>
        </div>

        <div className='tp'>
            <h3 className='eb'>EDFLING <span>BENEFITS</span></h3>
            <div className='benefits'>
                <p>Private & confidential</p>
                <h1>2</h1>
                <p>Anonymous Discussion</p>
                <h1>4</h1>
                <h1>1</h1>
                <p>25 lak + session conducted</p>
                <h1>3</h1>
                <p>24/7 Customer support</p>
            </div>
            <div className='benefits1'>
                <p></p>
                <h1></h1>
                <p></p>
                <h1></h1>
                <h1></h1>
                <p></p>
                <h1></h1>
                <p></p>
            </div>
            <h3 className='htu'>How to <span>Use </span>?</h3>
            <h3 className='tsp'>3 - <span>Step</span> Process</h3>
            <div className='uses'>
                <div className='s1'>
                    <h4>Step <span>1</span></h4>
                    <img src={step1}></img>
                    <h4 ><span>Connect with Expert</span></h4>
                    <p>Chat annonymously with a Edfling's <br></br>expert who's here to help you and not <br></br>judge you</p>
                </div>

                <div className='s1'>
                    <h4>Step <span>2</span></h4>
                    <img src={step2}></img>
                    <h4><span>Discuss your Concern</span></h4>
                    <p>Open up to your Expert in a space <br></br>where you get the guidance you <br></br>need, and your concerns get the <br></br>attention they deserve.</p>
                </div>

                <div className='s1'>
                    <h4 >Step <span>3</span></h4>
                    <img src={step3}></img>
                    <h4 ><span>Unleash a better you</span></h4>
                    <p>With 24X7 support from our <br></br>experts, bid goodbye to your old <br></br>self and be on your way to <br></br>becoming a better you</p>
                </div>
            </div>
        </div>

        <div className='thp'>
            <img src={uses2} style={{position:'absolute', top:'80px',left:'5%'}}></img>
            <div style={{position:'relative',left:'30%',width:'600px'}}>
                <img src={us1} style={{position:'absolute'}}></img>
                <h3 style={{position:'absolute',left:'20%',color:'#f42053'}}>Online Chat Sessions</h3>
                <p style={{marginLeft:'20%',position:'relative',top:'60px'}}>You can have confidential conversations <br></br>with a expert of your choice, without<br></br>revealing your identity. This convenient <br></br>service is accessible to you at any time<br></br> and from any location.</p>
            </div>
            <div style={{position:'relative',left:'45%',top:'120px',width:'600px'}}>
                <img src={us2} style={{position:'absolute'}}></img>
                <h3 style={{position:'absolute',left:'20%',color:'#f42053'}}>Face to Face Sessions</h3>
                <p style={{marginLeft:'20%',position:'relative',top:'60px'}}>Get the opportunity to meet with a<br></br> professional of your choice one-on-<br></br>one in person.</p>
            </div>
            <div style={{position:'relative',left:'30%',top:'250px',width:'600px'}}>
                <img src={us3} style={{position:'absolute'}}></img>
                <h3 style={{position:'absolute',left:'20%',color:'#f42053'}}>Voice/Video Calls</h3>
                <p  style={{marginLeft:'20%',position:'relative',top:'60px'}}>This service allows you to speak privately<br></br> with a skilled expert of your choosing,<br></br> while keeping your identity anonymous.<br></br>It's available 24/7 from anywhere.</p>
            </div>
        </div>

        <div className='fop'>
            <h2>Find Instant Support</h2>
            <p>Our platform offers access to over 1000 experienced experts who specialize in counseling and<br></br>have a proven track record of helping individuals overcome their emotional challenges.</p>
            <div className='experts'>
                <div className='expertbox'>
                    <img src={exp1}></img>
                    <h5>Dr. Pranav Gokhale</h5>
                    <p style={{fontWeight:'300'}}>Clinical Pshchologist, Hypnotherapist</p>
                    <p>Over 2-decade experience in building resilient<br></br>organizations, high performing teams and<br></br>happier individuals.</p>
                </div>
                <div className='expertbox'>
                    <img src={exp2}></img>
                    <div className='round'></div>
                    <h5>Santhosh</h5>
                    <p style={{fontWeight:'300'}}>Clinical Pshchologist, Hypnotherapist</p>
                    <p>Over 2-decade experience in building resilient<br></br>organizations, high performing teams and<br></br>happier individuals.</p>
                </div>
                <div className='expertbox'>
                    <img src={exp3}></img>
                    <h5>Dr. Astha Goyal</h5>
                    <p style={{fontWeight:'300'}}>Clinical Pshchologist, Hypnotherapist</p>
                    <p>Over 2-decade experience in building resilient<br></br>organizations, high performing teams and<br></br>happier individuals.</p>
                </div>
            </div>
            <button>BROWSE ALL EXPERTS</button>
        </div>

        <div className='fip'>
            <h3>Latest EDFLING Blogs</h3>
            <br></br>
            <div style={{display:'flex',justifyContent:'space-around'}}>
                <img src={blog1}></img>
                <img src={blog2}></img>
            </div>
        </div>
        <div className='fip'>
            <h3>Latest EDFLING Blogs</h3>
            <br></br>
            <div style={{display:'flex',justifyContent:'space-around'}}>
                <img src={blog3}></img>
                <img src={blog4}></img>
            </div>

        </div>

        <div className='sep'>
            <h3>What Do People Say</h3>
            <br></br>
            <br></br>
            <br></br>
            <div style={{display:'flex',marginLeft:'23%'}}>
                <img src={say} style={{height:'203px',width:'203px'}}></img>
                    <p style={{marginLeft:'5%',fontWeight:'400'}}>At first, I was a bit sceptical about this website but I still signed up.<br></br>
                        The counsellors welcomed me warmly and they treated my concerns with great<br></br>
                        priority. After about 8 months of great sessions, I feel I am a changed person and<br></br>
                        my life has improved vastly. My personal favourite DOST is Candice - she is one<br></br>
                        of the best counsellors here. I am a proud user of this platform and I would like<br></br>
                        to step forth and say that you should try it as you will not be disappointed on<br></br>
                        this website.<br></br>
                        <p style={{fontWeight:'700',fontSize:'17px'}}>Navneil Bakshi, Working Professional, West Bengal</p>
                    </p>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div style={{display:'flex',marginLeft:'47%'}}>
                <div className='dots'style={{backgroundColor:'#f42053'}}></div>
                <div className='dots' style={{marginLeft:'10px'}}></div>
                <div className='dots'style={{marginLeft:'10px'}}></div>
                <div className='dots'style={{marginLeft:'10px'}}></div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div style={{display:'flex',marginLeft:'30%',justifyContent:'space-around',width:'40%'}}>
                <button>CHAT ONLINE TODAY</button>
                <button style={{backgroundColor:'#fb9752'}}>REFER A FRIEND</button>
                <button>READ MORE</button>
            </div>
        </div>
        <div className='lp'>
            <h3>EDFLING <span style={{color:'#f42053'}}>BENEFITS</span></h3>
            <div style={{display:'flex',justifyContent:'space-around',lineHeight:'10px',fontWeight:'500'}}>
                <div>
                    <h4 style={{color:'#f42053'}}>COUNSELLING</h4>
                    <p>Career/Academic</p>
                    <p>Friends & Family</p>
                    <p>Love Relationship</p>
                    <p>Sexual-wellness</p>
                    <p>Self Improvement</p>
                    <p>Category Index</p>
                </div>

                <div>
                    <h4 style={{color:'#f42053'}}>EXPERTS FROM</h4>
                    <p>Bangalore</p>
                    <p>Mumbai</p>
                    <p>Delhi</p>
                    <p>Pune</p>
                    <p>Bhopal</p>
                    <p>Hyderabad</p>
                    <p>Chennai</p>
                    <p>City Index</p>
                </div>

                <div>
                    <h4 style={{color:'#f42053'}}>USEFUL LINKS</h4>
                    <p>Experts</p>
                    <p>Most Asked Questions</p>
                    <p>Motivational Quotes</p>
                    <p>Articles</p>
                    <p>De-stressing techniques</p>
                    <p>Press</p>
                    <p>Business Offerings</p>
                    <p>Become an Expert</p>
                    <p>Contact Us</p>
                </div>

                <div>
                    <h4 style={{color:'#f42053'}}>ABOUT US</h4>
                    <p>Testimonals</p>
                    <p>Team</p>
                    <p>Partners</p>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Responsible Disclosure Policy</p>
                    <p>Jobs</p>
                    <p>Care Plan FAQs</p>
                    <p>Update cookies preferences</p>
                </div>

            </div>
            <br></br>
            <br></br>
            <h4 style={{color:'#f42053'}}>FOLLOW US</h4>
            <h4 style={{color:'#f42053'}}>About EDFLING</h4>
            <p className='about'>At EDFLING, we provide an online counseling and emotional support platform designed to foster mental wellness. It anonymously connects you with the right expert from our panel consisting of psychologists, psychotherapists, counselors, life coaches and career coaches, who understand you and guide you through completely confidential individual sessions.</p>
            <br>
            </br>
            <br></br>
            <br></br>
            <p className='last'>BECOME AN EXPERT</p>
            <p className='last'>Meanwhile, know more about: Anxiety | Counselling | Stress | Depression | Addiction</p>
            <button><img src={btnimg}></img>Need Help?</button>
            <br></br>
            <div className='bottom'>
                <div className='icons'>
                <h3 style={{color:'white'}}>FOLLOW US</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                </svg>
                <p>
                    1.2M people are following this. Be the first of<br></br>your friends to follow this
                </p>
                </div>
            </div>
        </div>
    </div>
  )
}
