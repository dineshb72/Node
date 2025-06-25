import { FaLocationArrow } from "react-icons/fa6";
import { Spotlight } from "./ui/Spotlight";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10" id="contact">
      <div>
        <Spotlight className=" h-screen" fill="grey" />
        <Spotlight className=" left-full h-[80vh]" fill="violet" />
        <Spotlight className=" left-80 h-[80vh] w-[50vw]" fill="#87CEEB" />
      </div>
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 ">
       <img
  src={`${process.env.NODE_ENV === 'production' ? '/Node/footer-grid.svg' : '/footer-grid.svg'}`}
  alt="grid"
  className="w-full h-full opacity-100"
/>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> Business
          platform to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        <div className="flex flex-col items-center gap-4 mt-6">
  
  <div className="flex gap-4">
    <a href="mailto:bukyadinesh17@gmail.com">
      <MagicButton
        title="Email"
        icon={<FaLocationArrow />}
        position="right"
   //     className="min-w-[140px]"
      />
    </a>
    <a href="tel:+13146379866">
      <MagicButton
        title="Call"
        icon={<FaLocationArrow />}
        position="right"
    //    className="min-w-[140px]"
      />
    </a>
  </div>

  
  <div className="flex gap-4 flex-row-reverse">
    <a href="https://github.com/dineshb72" target="_blank" rel="noopener noreferrer">
      <MagicButton
        title="GitHub"
        icon={<FaLocationArrow />}
        position="right"
    //    className="min-w-[140px]"
      />
    </a>
    <a href="https://linkedin.com/in/dinesh-b-288a30151" target="_blank" rel="noopener noreferrer">
      <MagicButton
        title="LinkedIn"
        icon={<FaLocationArrow />}
        position="right"
      //  className="min-w-[140px]"
      />
    </a>
  </div>
</div>
</div>
  
    </footer>
  );
};

export default Footer;
