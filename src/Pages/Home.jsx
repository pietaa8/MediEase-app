import { Link } from "react-router-dom";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import { BsArrowRight } from "react-icons/bs";
import About from "../About/About";
import ServicesList from "../Services/ServicesList";
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import faqImg from "../assets/images/faq-img.png";
import DoctorsList from "./Doctors/DoctorsList";
import FaqItem from "./Faq/FaqItem";
import Testimonial from "../Components/Testimonial/Testimonial";
import useTitle from "../Hooks/useTitle";

const Home = () => {
  useTitle("Home-MediEase");
  return (
    <>
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live a healthy, longer life
                </h1>
                <p className="text_para">
                  <strong> MediEase </strong>is a user-friendly healthcare app
                  designed to simplify your medical journey. From finding
                  top-rated doctors to booking appointments seamlessly.
                  <strong> MediEase </strong>
                  ensures hassle-free access to quality healthcare with features
                  like patient reviews, personalized recommendations, and
                  hospital details. We connect you to the care you need. Your
                  health, made easier and more accessible because
                  <strong> we care</strong>.
                </p>
                <button className="btn">
                  <Link to="/doctors">Request an Appointment</Link>
                </button>
              </div>
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Year of Experience</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Clinic Location</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Patient Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="flex gap-[30px] justify-end">
              <div>
                <img src={heroImg01} alt=" " className="w-full" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt=" " className="w-full mb-[30px]" />
                <img src={heroImg03} alt=" " className="w-full " />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section End */}

      <section>
        <div className="container">
          <div className="lg:[4709x] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical Services
            </h2>
            <p className="text_para text-center">
              world-class care for everyone. Our healthy Sysytem offers
              unmatched, expert health care.
            </p>
          </div>
          {/* <div className="flex flex-wrap items-center flex-col md:flex-row gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]"></div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone.Our health system offers
                  unmatched, expert health care. from the lab to the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none "
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone.Our health system offers
                  unmatched, expert health care. from the lab to the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none "
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World-class care for everyone.Our health system offers
                  unmatched, expert health care. from the lab to the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none "
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Services */}

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text_para text-center">
              world-class care for everyone. Our healthy Sysytem offers
              unmatched, expert health care.
            </p>
          </div>
          <ServicesList />
        </div>
      </section>

      {/* Feature Content */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[680px]">
              <h2 className="heading">
                Get Virtual Treatment <br /> anytime
              </h2>
              <ul className="pl-4">
                <li className="text_para">
                  1. Schedule the appointment directly.
                </li>
                <li className="text_para">
                  2. Search for your physican here, and contact their office.
                </li>
                <li className="text_para">
                  3. Veiw our physicians who are accepting new patients, use the
                  online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">
                  <Link to="/doctors">Learn More</Link>
                </button>
              </Link>
            </div>

            {/* feature img */}

            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10:00AM
                    </p>
                    <span className="w-5 h-5 bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px] lg:w-[34px] lg:h-[34px] flex items-center justify-center ">
                      <img src={videoIcon} alt="" />
                    </span>
                  </div>
                </div>
                <div className="text-irisBlueColor w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] lg:text-[12px] font-[500] mt-2 lg:mt-4 rounded-full leading-[8px] lg:leading-4 ">
                  Consultation
                </div>
                <div className="flex items-center  gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] lg:text-[16px] font-[700] text-headingColor leading-3 lg:leading-[26px]">
                    Wayne Collins
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great Doctors</h2>
            <p className="text_para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>
          <DoctorsList />
        </div>
      </section>

      {/* FAQ SECTION */}

      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">Most Question by our beloved patients</h2>
              <FaqItem />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patient say</h2>
            <p className="text_para text-center">
              World-class care for everyone. Our health System offers <br />{" "}
              unmatched, expect health care
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Home;
