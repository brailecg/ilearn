import Image from "next/image";

import Button from "../../components/Button";

const Vocabulary = () => {
  return (
    <div className="bg-bg-white py-10 sm:py-20">
      <div className="max-w-7xl px-5 mx-auto flex flex-col sm:flex-row space-x-4">
        <div className=" min-h-0 sm:w-1/2 ">
          <Image
            src="/images/home/home-hero-four.png"
            width={682}
            height={410}
            className="min-h-0"
            alt="home hero two"
          />
        </div>

        <div className="flex flex-col justify-center space-y-8 text-center sm:text-left sm:w-1/2">
          <div className="space-y-4 text-3xl leading-[0.75] md:text-4xl lg:text-5xl lg:leading-none font-bold heading">
            <h3>Watch your</h3>
            <h3>progress everyday</h3>
          </div>
          <p className=" text-font-greydark">
            Save statistics on your achievements, words learned, and mistakes{" "}
          </p>
          <div className="flex  justify-center sm:justify-start">
            <div className="w-fit">
              <Button
                isButton={false}
                text="Statistics"
                arrowImageShow={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vocabulary;
