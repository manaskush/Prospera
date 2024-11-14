import Footer from "@/components/footer";
import { HeroVideoDialogDemoTopInBottomOut } from "@/components/demos/hero-video-dialog-demo";
import WordFadeIn from "@/components/magicui/word-fade-in";
import WordPullUp from "@/components/magicui/word-pull-up";
import ShowcaseNavbar from "@/components/showcase-navbar";
import Link from "next/link";

const Explore = () => {
    return ( <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <ShowcaseNavbar />
<br /><br />
        <div className="flex items-center justify-center h-full p-4">
      
      <Link href={"/explore/resource"}
          className=" py-3 
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
            Here is our Resource Portal
          </Link>
      
    </div>
        

        
        <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[66%] md:mx-auto">
        <div className="flex items-center justify-center relative ">
            <WordFadeIn
            className="text-3xl pt-20 lg:text-5xl font-semibold max-w-3xl mx-auto md:text-center z-20 "
            words="Choose the right career that aligns with your personality"/>
        </div>
        <br />
        <br />
        <br /><br /><br />

        <div className="">
            <h1><WordPullUp
            className="text-4xl md:text-5xl md:text-center font-medium"
            words="The Science Stream"
            />
            </h1>
            <p className="md:text-center py-8 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500 ">
            These are some points one should consider before choosing science stream
             </p>
             <div className="md:text-center py-8 md:w-1/2 mx-auto">
      <ul className="list-disc list-inside text-xl md:text-2xl text-gray-500">
      <li>Diverse Career Options: Science opens doors to numerous careers in engineering, medicine, research, and technology.</li>
<li>Problem-Solving Skills: It enhances analytical and problem-solving skills through logical and systematic approaches.</li>
<li>Innovation Opportunities: Science drives innovation and technological advancements, allowing you to contribute to groundbreaking discoveries.</li>
<li>Strong Foundation for Further Studies: It provides a solid foundation for advanced studies in specialized fields like astrophysics, biotechnology, or environmental science.</li>
<li>High Demand: Science professionals are often in high demand, leading to competitive salaries and job security.</li>
<li>Interdisciplinary Learning: It fosters interdisciplinary learning, combining knowledge from physics, chemistry, biology, and mathematics.</li>
<li>Global Impact: Science has a profound impact on global issues such as health, climate change, and sustainability, enabling you to make a difference.</li>
      </ul>
    </div>
           
            
            <div className="flex justify-center items-center h-full">
            
            <HeroVideoDialogDemoTopInBottomOut  videoSrc="https://www.youtube.com/embed/2CTv5JRMBvM?si=2Vm8V97wwcC-mZyL"
            thumbnailSrc="images/thumbnail1.jpg"/>
            </div>
            <br /><br />
            <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500 ">
            Apart from the above Youtube Video you can also play a game with us  to test your knowledge. 
            </p>
            <div className="flex justify-center mt-8">
            <a
            href="https://kunj2124.github.io/HangmanScience/"
            className="inline-block px-6 py-3 text-white bg-green-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            target="_blank"
            rel="noopener noreferrer"
            >
            Play Game
            </a>
            </div>
        </div>
        <br /><br /><br />

        <div className="">
            <h1><WordPullUp
            className="text-4xl md:text-5xl md:text-center font-medium"
            words="The Commerce Stream"
            />
            </h1>
            <p className="md:text-center py-8 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500 ">
            These are some points one should consider before choosing commerce stream
             </p>
             <div className="md:text-center py-8 md:w-1/2 mx-auto">
      <ul className="list-disc list-inside text-xl md:text-2xl text-gray-500">
      <li>Business Skills: Commerce equips you with essential business and financial skills, useful for various careers in business and finance.</li>
<li>Career Opportunities: It opens pathways to careers in accounting, finance, marketing, and management.</li>
<li>Entrepreneurial Skills: It provides a foundation for starting and managing your own business.</li>
<li>Understanding of Economics: You gain a strong grasp of economic principles and market dynamics.</li>
<li>Versatile Education: Commerce knowledge is applicable in diverse industries and sectors.</li>
<li>Higher Earning Potential: Careers in commerce often have competitive salary prospects.</li>
<li>Global Applicability: Business and financial skills are in demand worldwide, offering opportunities in international markets.</li>
      </ul>
    </div>
            <br />
            <div className="flex justify-center items-center h-full">
              <HeroVideoDialogDemoTopInBottomOut videoSrc="https://www.youtube.com/embed/IuZC-kOzn8o?si=76SV_CW-sBp-u2q9"
              thumbnailSrc="images/thumbnail2.jpg"/>
            </div>
            <br /><br />
            <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500 ">
            Apart from the above Youtube Video you can also play a game with us  to test your knowledge. 
            </p>
            <div className="flex justify-center mt-8">
            <a
            href="https://kunj2124.github.io/HangmanCommerce/"
            className="inline-block px-6 py-3 text-white bg-green-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            target="_blank"
            rel="noopener noreferrer"
            >
            Play Game
            </a>
            </div>
            </div>
            <br /><br /><br />
            <div className="">
            <h1><WordPullUp
            className="text-4xl md:text-5xl md:text-center font-medium"
            words="The Arts Stream"
            />
            </h1>
            <p className="md:text-center py-8 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500 ">
            These are some points one should consider before choosing commerce stream
             </p>
             <div className="md:text-center py-8 md:w-1/2 mx-auto">
      <ul className="list-disc list-inside text-xl md:text-2xl text-gray-500">
      <li>Creativity and Expression: Arts allows for personal expression and the development of creative skills.</li>
<li>Critical Thinking: It fosters critical thinking and analytical skills through the study of literature, history, and philosophy.</li>
<li>Cultural Awareness: You gain a deep understanding of different cultures and historical contexts.</li>
<li>Versatile Careers: Arts graduates can pursue diverse careers in education, media, design, and public relations.</li>
<li>Flexibility: The arts provide a broad knowledge base, allowing for career flexibility and adaptability.</li>
<li>Personal Growth: Studying arts often enhances emotional intelligence and empathy.</li>
<li>Contribution to Society: Arts play a crucial role in societal development and cultural enrichment.</li>
      </ul>
    </div><br />
            <div className="flex justify-center items-center h-full">.
            <HeroVideoDialogDemoTopInBottomOut videoSrc="https://www.youtube.com/embed/qh1LiVAsOtI?si=RGKGb3M4ymhFbvXv"
            thumbnailSrc="images/thumbnail3.jpg"/>
             </div>
            <br /><br />
            <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500 ">
            Apart from the above Youtube Video you can also play a game with us  to test your knowledge. 
            </p>
            <div className="flex justify-center mt-8">
            <a
            href="https://kunj2124.github.io/HangmanHumanities/"
            className="inline-block px-6 py-3 text-white bg-green-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            target="_blank"
            rel="noopener noreferrer"
            >
            Play Game
            </a>
            </div>
        </div>
        <br /><br /><br />
        <div className="">
            <h1><WordPullUp
            className="text-4xl md:text-5xl md:text-center font-medium"
            words="The NEP"
            />
            </h1>
            <p className="md:text-center py-8 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500 ">
            The National Education Policy NEP aims to transform the Indian education system by fostering holistic development, promoting multidisciplinary learning, and enhancing employability. It emphasizes the need for career guidance and counseling to help students make informed decisions about their future paths.
   
   
            Prospera aligns with the NEP by offering comprehensive career counseling services. We provide personalized assessments to understand each students strengths and interests. Our expert counselors use this data to suggest career options that fit individual profiles. Prospera also integrates multidisciplinary approaches, helping students explore various fields and make well-rounded career choices. By staying updated with NEP guidelines, we ensure that our services support students in achieving their educational and professional goals effectively.</p>            <br />
        </div>
        </section>
        <br />
        <div className="my-16 flex items-center">
          <hr className="w-full border-t border-gray-300" />
        </div>
        <br />
        <div className="flex flex-col items-center justify-center h-full text-center px-4">
      <p className="mb-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700">
        Since you came this far,Here is a Special Gift of Career Choice Analysis guide free from our side!!
      </p>
      <a
        href="https://drive.google.com/file/d/15ptMCzrw2rFjmlum5UcUGm5zLdYSY9Gl/view?usp=drivesdk"
        className="inline-block px-6 py-3 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        Explore !!!
      </a>
    </div>
        
        <br /><br />
        <br />
        <Footer />
    </div> );
}
 
export default Explore;