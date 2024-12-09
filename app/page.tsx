"use client"

import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";
import WordPullUp from "@/components/magicui/word-pull-up";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import Image from "next/image";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import { Link as ScrollLink,Element } from "react-scroll";
import { IconStarFilled } from "@tabler/icons-react"
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";

const services = [
  {
    icon: "/images/s_6.png",
    title: "Data Based Research ",
    description:
      "We asses your career with our data based researches and align them to configure the best advice for you ",
  },
  {
    icon: "/images/s_1.png",
    title: "Exploration of Different Emerging Fields",
    description:
      "Get yourself the right career for yourself among the thousands by our services",
  },
  {
    icon: "/images/s_5.png",
    title: "Connect with idols of your field",
    description:
      "We at Prospera will help you connect with the idol of your field by our connection network",
  },
  {
    icon: "/images/s_3.png",
    title: "Happy and Satisfied Customers",
    description:
      "Our Customers are our asset and our goal is to make them satisfied and get them with their aligned career",
  },
  {
    icon: "/images/s_4.png",
    title: "One to One Connection",
    description:
      "With our services, we help students by connecting them with Career Guidance Professionals",
  },
  {
    icon: "/images/s_2.png",
    title: "Pay-Per-Meeting Service",
    description:
      "Don't waste money on ineffective programs.Let Our Experts personally guide you reach your target ",
  },
];
const experts = [
  {
    icon: "/images/expert1.png",
    title: "Dr. Rajiv Mehra, Ph.D. in Educational Psychology ",
    description:
      "Expert in student career assessments and personalized guidance. Specializes in understanding behavioral patterns and interests to provide tailored career advice.",
  },
  {
    icon: "/images/expert1.png",
    title: "Ms. Ananya Sharma, M.A. in Career Counseling and Guidance",
    description:
      "Experienced in helping students navigate career choices with a focus on academic and professional planning. Provides in-depth career exploration and goal setting.",
  },
  {
    icon: "/images/expert1.png",
    title: "Mr. Arjun Patel, MBA in Human Resources",
    description:
      "Brings a business perspective to career counselling, offering insights into industry trends, professional development, and strategic career planning.",
  },
  {
    icon: "/images/expert1.png",
    title: "Dr. Priya Verma, M.Sc. in Applied Psychology",
    description:
      "Focuses on psychometric testing and career aptitude assessments. Provides comprehensive support for students in identifying strengths and career fit.",
  },
  {
    icon: "/images/expert1.png",
    title: "Ms. Neha Kapoor, B.A. in Sociology and Certified Career Coach",
    description:
      "Specializes in understanding societal and individual influences on career choices. Offers guidance on exploring diverse career paths and personal development.",
  },
  {
    icon: "/images/expert1.png",
    title: "Mr. Siddharth Rao, M.Ed. in Guidance and Counseling",
    description:
      "Provides expert advice on educational and career planning. Experienced in working with students to set realistic goals and create actionable career plans.",
  },
];





export default function Home() {
  return (
    <div 
    className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <Element 
      name="top"
      className="overflow-hidden rounded-[6px] top-5 md:mx-auto z-50 xl:w-4/5 2xl:w-[66%] bg-white flex items-center justify-between py-6 px-4 md:px-8 mx-6">
        <Link href={"/"}>
        <Image src={'/logo/logo.webp'} 
        alt="Logo"
        width={1000}
        height={1000}
        className="w-28"/>
        </Link>

        <div className="absolute right-1/2 translate-x-1/2 transform ">
        <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
        <Link href={"/explore"}
          className="hover:text-blue-500 ">
            Explore Careers 
            
          </Link>
          
          <Link href={"/showcase"}
          className="hover:text-blue-500 ">
            Showcase
            
          </Link>
          
          <ScrollLink
          to="services"
          smooth={true}
          className="hover:text-blue-500">
            Services
          </ScrollLink>

          <ScrollLink
          to="process"
          smooth={true}
          className="hover:text-blue-500">
            Process
          </ScrollLink>

          <ScrollLink
          to="guarentees"
          smooth={true}
          className="hover:text-blue-500">
            Guarantees
          </ScrollLink>
          
          </div>
        </div>

        <div className="flex items-centergap-x-4 ">
          <a href="tel:6645480005" className="hidden lg:flex ">
            <button className="px-4 py-2 rounded-md flex items-center gap-x-3">
            
            </button>
          </a>

          <Link 
          href={'/meeting'}
          className="px-8 py-0.5
          text-lg hover:[#abcbff]
          rounded-[6px] border-2 
          border-black text-white bg-[#121212]
          tansition
          duration-200
          hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
            Book a Call
          </Link>


        </div>

      </Element>

      <main className="mx:pb-10">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[66%] md:mx-auto mt-14">
        <AnimatedShinyTextDemo/>
        
        <h1>
          <CoverDemo />
        </h1>
        
        <p className="md:text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500 ">
        Schedule a call with us to discuss the right path for yourself in minutes 
        </p>
        

        <div
            className="
                 flex 
                  md:justify-center 
                  items-center 
                  gap-x-2
                   "
          >
            <Link
              href="/meeting"
              className="py-3 
            px-10
            md:px-16
      md:text-xl
      hover:bg-[#abcbff] 
      rounded-[6px]
      border-2 
      border-black 
      dark:border-white 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
            >
              Book Call
            </Link>
            <Link
              href={"/showcase"}
              className="
              bg-white
              py-3 
              px-10
              md:px-16
              md:text-xl
              border-4
            border-black
              rounded-[6px]
              hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            >
              Showcase
            </Link>
            <Link
              href="/explore"
              className="py-3 
            px-10
            md:px-16
      md:text-xl
      hover:bg-[#abcbff] 
      rounded-[6px]
      border-2 
      border-black 
      dark:border-white 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
            >
              Explore
            </Link>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16 ">
            <BoxReveal boxColor="{#3b82f6}" duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-3 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500"/>
                Strategy 
              </p>
            </BoxReveal>
            <BoxReveal boxColor="{#3b82f6}" duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-3 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500"/>
                Guidance 
              </p>
            </BoxReveal>
            <BoxReveal boxColor="{#3b82f6}" duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-3 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500"/>
                Engagement
              </p>
            </BoxReveal>
            <BoxReveal boxColor="{#3b82f6}" duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-3 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500"/>
                Exploration
              </p>
            </BoxReveal>
          </div>

          <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
            <div className="md:w-2/5">
            <h1 className="text-2xl font-medium text-gray-600 w-4/5">
              Trusted by most of the Elite Institutions across the country
            </h1>
            
            <div className="flex my-6 gap-x-5 w-full ">
              <div>
                <h1 className="text-blue-500 text-3xl md:text-5xl ">
                  <NumberTicker value={1000} /> + 
                  <p className="text-gray-500 text-sm md:text-md "> Happy Clients  </p>
                </h1>
              </div>

              <div className="w-px bg-gray-300 self-stretch">
              </div>

              <div className="flex-1 min-w-0 ">
                <h1 className="text-blue-500 text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                  <NumberTicker value={2500} /> + 
                  <p className="text-gray-500 text-sm md:text-md "> Guidance Sessions Given  </p>
                </h1>
              </div>
            </div>
            </div>

            <section className="overflow-hidden mt-10 md:w-4/5 ">
            <InfiniteMovingLogos 
            speed="slow"
            direction="left"
            items={[
              {
                logo:"/logo/logo.webp",
                name:"logo"
              },
              {
                logo:"/logo/logo.webp",
                name:"logo"
              }
            ]}
            />
            </section>  
          
          </div>
      </div>
      </main>  


      <Element name="services">
        <div className="md:px-0 mx-6 xl:2-4/5 2xl:w-[66%] md:mx-auto ">
        <h1 className="text-3xl md:text-5xl md:text-center font-medium">
        <WordPullUpDemo />
        </h1>
        <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500 ">
        All of our services are designed to help you get your right path  
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
              >
                <Image
                  src={service.icon}
                  width={10000}
                  height={10000}
                  className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                  alt="image"
                />
                <h1 className="text-xl font-medium">{service.title}</h1>
                <p className="text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        </Element> 

        

        <section className="py-20 ">
          <ScrollBasedVelocityDemo />
        </section>

        <div className="flex flex-col items-center justify-center  h-full text-center px-2 sm:px-4 md:px-6 lg:px-8">
        
      <p className="mb-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700">
      <h3> Prospera Career Buddy </h3>
      </p>
      <a
        href="https://career-guide-delta.vercel.app/"
        className="inline-block px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 sm:px-6 sm:py-3 md:px-8 md:py-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        Career Buddy
      </a>
    </div>

        <Element name="process"
        >
          <main className="md:px-0 mx-6  md:mx-auto">
          <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
        Our{" "}
            <span className="text-blue-500 flex gap-x-1 items-center">
              {" "}
              <Image
                src={"/icons/squiggle.svg"}
                width={10000}
                height={10000}
                className="w-6"
                alt="image"
              />
              Creative
              <Image
                src={"/icons/star.svg"}
                width={10000}
                height={10000}
                className="w-6 mb-8"
                alt="image"
              />
            </span>{" "}
            Process
          </h1>
          
          <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
        All of our services are designed to help your career stand out 
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto ">
        <div className="w-full md:w-1/2 order-2 md:order-1">
        <AnimatedBeamMultipleOutputDemo />        
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
          <BoxRevealDemo />
        </div>
        </div>
          </main>
        </Element>
        <br />
        <br />

        <section>
        <main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">
          <Image
            src={"/logo/review.png"}
            width={10000}
            height={10000}
            className=" md:w-1/3 rounded-md"
            alt="image"
          />
          <div className="flex flex-col gap-y-5 md:w-1/2">
            <h1 className="text-lg md:text-2xl ">
              &quot;As the founder of The Doon School, Dehradun, I am genuinely impressed with Prospera&apos;s Career Counselling and Guidance App. 
              Their student counselling program stands out for its exceptional interactiveness and expert-level insights.
               Prospera&apos;s profound expertise and innovative approach in guiding students through their career choices reflect a remarkable commitment to excellence. 
              Their dedication to providing top-notch educational support truly sets them apart in shaping the future of young minds. &quot;
            </h1>
            <div className="flex items-center gap-x-1">
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
            </div>

            <span className="text-xl font-medium">
              S.R. Das <br />
              Founder, The Doon School
            </span>
          </div>
        </main>
      </section>

      <Element name="guarentees">
        <ShootingStarsAndStarsBackgroundDemo />

      </Element>
      <br /><br />
      <Element name="experts"
        >
          <main className="md:px-0 mx-6  md:mx-auto">
          <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
        Our{" "}
            <span className="text-green-500 flex gap-x-1 items-center">
              {" "}
              
              Team of
              
            </span>{" "}
            Experts
          </h1>
          <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
          Here is a list of some expert members from our team 
        </p>

        <div className="md:px-0 mx-6 xl:2-4/5 2xl:w-[66%] md:mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {experts.map((expert) => (
              <div
                key={expert.title}
                className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
              >
                <Image
                  src={expert.icon}
                  width={10000}
                  height={10000}
                  className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                  alt="image"
                />
                <h1 className="text-xl font-medium">{expert.title}</h1>
                <p className="text-gray-500">{expert.description}</p>
              </div>
            ))}
          </div>
          </div>

          <div className="flex flex-col items-center justify-center  h-full text-center px-2 sm:px-4 md:px-6 lg:px-8">
      <p className="mb-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700">
        <h3>Join us at Prospera as a Counsellor </h3>
      </p>
      <a
        href="https://forms.gle/ThL3GFeSujdEp6Pb7"
        className="inline-block px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 sm:px-6 sm:py-3 md:px-8 md:py-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        Join
      </a>
    </div>

<br />
          </main>
        </Element>
      
      
      
      <br />


<br /><br />


      
      <div className="flex flex-col items-center justify-center  h-full text-center px-2 sm:px-4 md:px-6 lg:px-8">
      <p className="mb-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700">
        <h3>Have any questions or need assistance? Our chatbot is here to help! </h3>
      </p>
      <a
        href="https://prospera-chatbot-4hal.vercel.app/"
        className="inline-block px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 sm:px-6 sm:py-3 md:px-8 md:py-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        Chat with Us
      </a>
    </div>
       
      <section className="my-8 md:py-20 xl:w-4/5 2xl:w-[66%] md:mx-auto ">
      <LetsMakeThingsHappenSection  />
      </section>

      <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
        <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium ">
            <Image
              src={"/logo/logo.webp"}
              width={10000}
              height={10000}
              className="w-40"
              alt="image"
            />{" "}
          </h1>
          <p className="text-left  text-xl  text-gray-500">853-498-2098</p>
          <p className="text-left  text-xl  text-gray-500">
            admin@prospera_career.in
          </p>
        </div>

        <div className="flex md:justify-center gap-x-4 mt-10">
          © 2024 Prospera. All Rights Reserved.
          <Link href="/" className="text-blue-500">
            Privacy Policy
          </Link>
        </div>
      </footer>

    </div>
  );
}
