import Image from "next/image";

import Button from "../../components/Button";

const Progress = () => {
  return (
    <div className="py-10 sm:py-20">
      <div className="max-w-7xl px-5 mx-auto flex flex-col sm:flex-row space-x-4">
        <div className="flex flex-col justify-center space-y-8 text-center sm:text-left sm:w-1/2">
          <div className="space-y-4 text-3xl leading-[0.75] md:text-4xl lg:text-5xl lg:leading-none font-bold heading">
            <h3>Increas your</h3>
            <h3>vocabulary</h3>
          </div>
          <p className=" text-font-greydark">
            Traditional and new effective approaches to word study
          </p>
          <div className="flex  justify-center sm:justify-start">
            <div className="w-fit ">
              <Button isButton={false} text="Textbook" arrowImageShow={true} />
            </div>
          </div>
        </div>

        <div className=" min-h-0 sm:w-1/2 ">
          <Image
            src="/images/home/home-hero-three.png"
            width={581}
            height={474}
            className="min-h-0"
            alt="home hero two"
          />
        </div>
      </div>
    </div>
  );
};

export default Progress;
