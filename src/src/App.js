
import './style.css';
import './App.css';
import { IoIosMail, IoIosSunny, IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoInstagram, IoLogoYoutube, IoLogoWhatsapp, IoMdStar, IoMdStarHalf, IoIosArrowRoundForward, IoIosQuote } from "react-icons/io";
import { FaGooglePlusG, FaAngleDown, FaRegHandPointRight } from "react-icons/fa";
import { RiBankLine } from "react-icons/ri";
import { PiStudentFill, PiPencilSimpleLineFill, PiChalkboardTeacherFill, PiEnvelopeOpenFill, PiQuotesFill } from "react-icons/pi";





import img1 from './image/cdmilogo.svg';
import img2 from './image/slider1.webp';
import img3 from './image/course1.webp';
import img4 from './image/course2.webp';

// import img5 from './image/course3.webp';
import img6 from './image/course4.webp';
import img7 from './image/course5.webp';
import img8 from './image/course6.webp';
import img9 from './image/about.jpeg';
import img10 from './image/count.jpeg';
// import img11 from './image/counter-icon.png';
import img12 from './image/happy2.jpeg';
import img120 from './image/happy1.jpeg';
import img13 from './image/happy-bg.jpeg';
import img14 from './image/happy-bg1.png';
import img15 from './image/why11.webp';
import img16 from './image/asset 46.png';
import img17 from './image/asset 42.png';
import img18 from './image/asset 49.png';
import img19 from './image/asset 44.png';
import img20 from './image/asset 45.png';
import img21 from './image/wlogo.svg';









function App() {

  return (


    <div className='website'>

      {/* TOP-MENU START */}
      <div className="top-menu">
        <div className="d-flex container">
          <div className='d-flex right'>
            <div className='d-flex mail'>
              <IoIosMail className='icon'></IoIosMail>
              <p>info@cdmi.in</p>
            </div>

            <div className='d-flex sun'>
              <IoIosSunny className='icon'></IoIosSunny >
              <p>Verify Certificate</p>
            </div>
          </div>
          <div>
            <p>HAVE ANY QUESTION ? +91 90333 16003</p>
          </div>
          <div d-flex>
            <IoLogoFacebook className='socail'></IoLogoFacebook>
            <IoLogoTwitter className='socail'></IoLogoTwitter>
            <FaGooglePlusG className='socail'></FaGooglePlusG>
            <IoLogoLinkedin className='socail'></IoLogoLinkedin>
            <IoLogoInstagram className='socail'></IoLogoInstagram>
            <IoLogoYoutube className='socail'></IoLogoYoutube>
            <IoLogoWhatsapp className='socail'></IoLogoWhatsapp>
          </div>
        </div>
      </div>
      {/* TOP-MENU END */}

      {/* MAIN-MENU START */}
      <div className='menu fix'>
        <div className='d-flex container'>
          <div className='logo'>
            <img src={img1}></img>
          </div>

          <nav>
            <ul className='main-menu d-flex'>
              <li><a href=''>Home</a></li>
              <li><a href=''>Courses<FaAngleDown className='menu_icon'></FaAngleDown></a></li>
              <li><a href=''>Activities<FaAngleDown className='menu_icon'></FaAngleDown></a></li>
              <li><a href=''>Blog</a></li>
              <li><a href=''>Known Us<FaAngleDown className='menu_icon'></FaAngleDown></a></li>
              <li><a href=''>Get In Touch<FaAngleDown className='menu_icon'></FaAngleDown></a></li>
              <li><a href=''>Student Zone</a></li>
            </ul>
          </nav>
        </div>
      </div>
      {/* MAIN-MENU END */}

      {/* Slider Start */}
      <div className='slider'>
        <img src={img2}></img>
      </div>
      {/* Slider End */}

      {/* CREATIVE COURSE START */}
      <div className='pd-y container course'>
        <p className='course-head'>Creative Courses
          <div className='line'></div>
        </p>
        <h1>Offered Courses</h1>

        <div className='d-flex course-img'>
          <div className='w-33'>
            <div className='content'>
              <img src={img3}></img>
              <h2>Development Courses</h2>
              <hr></hr>
              <div className='d-flex course-bottom'>
                <div className='social'>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStarHalf></IoMdStarHalf>
                </div>

                <div className='course-btn'>
                  <button><a href=''>Know More...!</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-33'>
            <div className='content'>
              <img src={img4}></img>
              <h2>Design Courses</h2>
              <hr></hr>
              <div className='d-flex course-bottom'>
                <div className='social'>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStarHalf></IoMdStarHalf>
                </div>

                <div className='course-btn'>
                  <button><a href=''>Know More...!</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-33'>
            <div className='content'>
              <img src={img4}></img>
              <h2>Programming IT</h2>
              <hr></hr>
              <div className='d-flex course-bottom'>
                <div className='social'>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStarHalf></IoMdStarHalf>
                </div>

                <div className='course-btn'>
                  <button><a href=''>Know More...!</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-33'>
            <div className='content'>
              <img src={img6}></img>
              <h2>Trendy Courses</h2>
              <hr></hr>
              <div className='d-flex course-bottom'>
                <div className='social'>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStarHalf></IoMdStarHalf>
                </div>

                <div className='course-btn'>
                  <button><a href=''>Know More...!</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-33'>
            <div className='content'>
              <img src={img7}></img>
              <h2>Civil-Mech. Engineering</h2>
              <hr></hr>
              <div className='d-flex course-bottom'>
                <div className='social'>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStarHalf></IoMdStarHalf>
                </div>

                <div className='course-btn'>
                  <button><a href=''>Know More...!</a></button>
                </div>
              </div>
            </div>
          </div>
          <div className='w-33'>
            <div className='content'>
              <img src={img8}></img>
              <h2>Bussiness Development</h2>
              <hr></hr>
              <div className='d-flex course-bottom'>
                <div className='social'>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStar></IoMdStar>
                  <IoMdStarHalf></IoMdStarHalf>
                </div>

                <div className='course-btn'>
                  <button><a href=''>Know More...!</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className='btn-all-courses'><a href=''>View All Categories<IoIosArrowRoundForward className='arrow'></IoIosArrowRoundForward></a></button>
      </div>
      {/* CREATIVE COURSE END */}

      {/* ABOUT US START */}
      <div className='about pd-y'>
        <div className='d-flex'>
          <div className='about-content'>
            <div className='container'>
              <p className='about-head'>About Us
                <div className='line'></div>
              </p>
              <h1>IT Career in Surat, moving towards the better Tomorrow!</h1>
              <p className='detail'> Creative Design & Multimedia Institute(CDMI)  is a reputed training
                institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing & All
                types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market
                in 2014 with the goal to help students, working professionals and other interested candidates get that dream job
                or open that desired freelance business in some of the most popular Computer / IT fields.  Our aim is to ease the
                hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.
              </p>
              <button className='about-btn'><a href=''>Enroll Now...!<IoIosArrowRoundForward className='arrow'></IoIosArrowRoundForward></a></button>
            </div>
          </div>
          <div className='about-img'>
            <img src={img9}></img>
          </div>
        </div>
      </div>
      {/* ABOUT US END */}

      {/* COUNTING START */}
      <div className='count'>

        <div style={{
          width: '100%',
          height: '230px',
          backgroundImage: `url(${img10})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>

          <div className='container content'>
            <div className='d-flex'>
              <div className='w-25 c-1'>
                <PiStudentFill className='count-icon'></PiStudentFill>
                <h1>14000+</h1>
                <h2>Happy students</h2>
              </div>
              <div className='w-25 c-2'>
                <PiPencilSimpleLineFill className='count-icon'></PiPencilSimpleLineFill>
                <h1>10+</h1>
                <h2>Certification Approval</h2>
              </div>
              <div className='w-25 c-3'>
                <PiChalkboardTeacherFill className='count-icon'></PiChalkboardTeacherFill>
                <h1>70+</h1>
                <h2>Certified Teachers</h2>
              </div>
              <div className='w-25 c-4'>
                <PiEnvelopeOpenFill className='count-icon'></PiEnvelopeOpenFill>
                <h1>9000+</h1>
                <h2>Students Placed</h2>
              </div>
            </div>
          </div>

        </div>

      </div>
      {/* COUNTING END */}

      {/* HAPPY STUDENTS START */}
      <div className='container pd-y'>

        <div className='d-flex'>
          <div className='w-50 happy'>
            <p className='happy-head'>Happy Students
              <div className='line'></div>
            </p>
            <h1>Alumni Speak</h1>
            <PiQuotesFill className='happy-icon'></PiQuotesFill>
            <p className='detail'>Very good Institute for the Computer courses. They are always ready to provide the help required. The courses are very well designed, and lab sessions gives you hands on experience. Once you complete the course, you will be very well equipped to clear interview and land in good job.</p>

            <div className='happy-bottom d-flex'>
              <img src={img12}></img>
              <div className='bottom-con'>
                <h3>Goti Shruti</h3>
                <h5><i>Andriod Developer</i> <span>@ KD Infotech</span></h5>
              </div>
            </div>
          </div>

          <div className='w-50 happy-img'>
            <div style={{
              width: '500px',
              height: '500px',
              backgroundImage: `url(${img120})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>

              <div className='happy1'>
                <img src={img14}></img>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* HAPPY STUDENTS END */}

      {/* WHY  CREATIVE WHY  START */}
      <div className='why-sec'>
        <div className='pd-y container course '>
          <p className='course-head'>READ OUR DIFFERENCE
            <div className='line'></div>
          </p>
          <h1>WHY CHOOSE CREATIVE</h1>

          <div className='d-flex course-img'>

            <div className='w-33'>
              <div className='content why1 why-bottom'>
                <img src={img15}></img>
                <h2>Industry Experts As Trainers</h2>

                <div className='d-flex course-bottom'>
                  <div className='why-con'>
                    Our trainers have 5+ years of industry experience
                    coupled with extensive research and analysis.
                  </div>


                </div>
              </div>
            </div>
            <div className='w-33'>
              <div className='content why1 why-bottom'>
                <img src={img15}></img>
                <h2>Industry Experts As Trainers</h2>

                <div className='d-flex course-bottom'>
                  <div className='why-con'>
                    Our trainers have 5+ years of industry experience
                    coupled with extensive research and analysis.
                  </div>


                </div>
              </div>
            </div>

            <div className='w-33'>
              <div className='content why1 why-bottom'>
                <img src={img15}></img>
                <h2>Industry Experts As Trainers</h2>

                <div className='d-flex course-bottom'>
                  <div className='why-con'>
                    Our trainers have 5+ years of industry experience
                    coupled with extensive research and analysis.
                  </div>


                </div>
              </div>
            </div>

            <div className='w-33'>
              <div className='content why1 why-bottom'>
                <img src={img15}></img>
                <h2>Industry Experts As Trainers</h2>

                <div className='d-flex course-bottom'>
                  <div className='why-con'>
                    Our trainers have 5+ years of industry experience
                    coupled with extensive research and analysis.
                  </div>


                </div>
              </div>
            </div>

            <div className='w-33'>
              <div className='content why1 why-bottom'>
                <img src={img15}></img>
                <h2>Industry Experts As Trainers</h2>

                <div className='d-flex course-bottom'>
                  <div className='why-con'>
                    Our trainers have 5+ years of industry experience
                    coupled with extensive research and analysis.
                  </div>


                </div>
              </div>
            </div>

            <div className='w-33'>
              <div className='content why1 why-bottom'>
                <img src={img15}></img>
                <h2>Industry Experts As Trainers</h2>

                <div className='d-flex course-bottom'>
                  <div className='why-con'>
                    Our trainers have 5+ years of industry experience
                    coupled with extensive research and analysis.
                  </div>


                </div>
              </div>
            </div>



          </div>

          <button className='btn-all-courses'><a href=''>View All Categories<IoIosArrowRoundForward className='arrow'></IoIosArrowRoundForward></a></button>
        </div>
      </div>
      {/* WHY  CREATIVE WHY  END */}


      {/* PLACEMENT start */}

      <div className='plcarment'>


        <div className='pd-y container course '>
          <p className='course-head'>STUDENT PLACEMENT
            <div className='line'></div>
          </p>
          <h1>OUR RECRUITMENT PARTNERS</h1>
        </div>

        <div className='container content'>
          <div className='d-flex'>
            <div className='w-25 c-1'>
              <img src={img16}></img>

            </div>
            <div className='w-25 c-2'>
              <img src={img17}></img>


            </div>
            <div className='w-25 c-3'>
              <img src={img18}></img>


            </div>
            <div className='w-25 c-4'>
              <img src={img19}></img>

            </div>
            <div className='w-25 c-4'>
              <img src={img16}></img>

            </div>
            <div className='w-25 c-4'>
              <img src={img18}></img>

            </div>
          </div>


          <h2> Our Demanded Cours  </h2>

          <div className='bset'>

            <button>Best Java Training Institute In Surat</button>
            <button> Best Php Training In Mota Varachha  </button>
            <button>  Video Editing Training Institute </button>
            <button> Python Training In Surat  </button>
            <button>  Best Java Training Institute In Surat </button>
            <button>  Advance Java Training Institute In Varachha </button>
            <button>  Web Design Training In Mota Varachha </button>
            <button> Python Training In Surat   </button>
            <button> Best Php Training In Mota Varachha  </button>
            <button>  Video Editing Training Institute </button>
            <button> Python Training In Surat  </button>
            <button>  Best Java Training Institute In Surat </button>
            <button>  Advance Java Training Institute In Varachha </button>
            <button>  Web Design Training In Mota Varachha </button>
            <button> Python Training In Surat   </button>
            <br></br>
            <h4> Show More </h4>
          </div>



        </div>



      </div>

      {/* PLACEMENT end */}

      {/* futtor start  */}

      <div class="contaner ftt">

        <ul class="d-flex main">
          <li class="fri">
            <div class="mainli">
              <img src={img21}></img>


            </div>
            <ul class="subli sublii">

              <li className='ft'>
                Creative Design and Multimedia Institute is
                leading computer training institute in surat. We
                offers government approved computer training courses
                in Surat. </li>


              <li className='fh fhm'  > FOLLOW US ON </li>
              <li> <li ffi>
                <div d-flex ffi >
                  <IoLogoFacebook className='socailf'></IoLogoFacebook>
                  <IoLogoTwitter className='socailf'></IoLogoTwitter>
                  <FaGooglePlusG className='socailf'></FaGooglePlusG>
                  <IoLogoLinkedin className='socailf'></IoLogoLinkedin>
                  <IoLogoInstagram className='socailf'></IoLogoInstagram>
                  <IoLogoYoutube className='socailf'></IoLogoYoutube>
                  <IoLogoWhatsapp className='socailf'></IoLogoWhatsapp>
                </div>

              </li></li>
            

            </ul>
          </li>

          <li>
            <div class="mainli">
              <li className='fh fhm'  > FOLLOW US ON </li>

            </div>
            <ul class="sublii">
              <li>  <FaRegHandPointRight ></FaRegHandPointRight>  About Us</li>
              <li> <FaRegHandPointRight ></FaRegHandPointRight>  Blogs</li>
              <li>  <FaRegHandPointRight ></FaRegHandPointRight>  Join Us            </li>
              <li> <FaRegHandPointRight ></FaRegHandPointRight>  Terms of Service            </li>
              <li> <FaRegHandPointRight ></FaRegHandPointRight>  Promotional Offers            </li>

            </ul>
          </li>

          <li>
            <div class="mainli">
              <li className='fh fhm'  >CONTACT US </li>
            </div>
            <li className='fh fhm f3' >HEAD OFFICE - YOGICHOWK </li>

            <ul class="sublii subliif3">
              <li className="f3">    401-404, 4th Floor, City Center Complex,
                Nr. Yogichowk, Varachha, Surat.  <br></br>f<br></br>+91 90333 16003 </li>

              <li className='fh fhm f3' >OTHER BRANCHES</li>


              <li>  <RiBankLine ></RiBankLine>   Katargam          </li>
              <li>  <RiBankLine ></RiBankLine> Mota Varachha      </li>
              <li>  <RiBankLine ></RiBankLine>    Adajan    </li>
              <li>  <RiBankLine ></RiBankLine>   Navsari        </li>



            </ul>
          </li>



        </ul>


      </div>


      {/* futtor end  */}




    </div>









  );



}

export default App;










