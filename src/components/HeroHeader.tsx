import CTAButtons from "@/atoms/CTAButtons";

const HeroHeader = () => {
  return (
    <>
      <div className="flex mt-[120px]">
        {/* text */}
        <div className="my-auto flex flex-col items-start">
          <div className="font-normal leading-[5rem] font-rubik text-left text-[50px] text-dark-blue-lz">
            Want anything to be{" "}
            <div>
              easy with{" "}
              <span className="font-bold font-rubik"> LaslesVPN.</span>
            </div>
          </div>
          <div className="font-normal text-[16px] font-rubik leading-5 text-gray-lz">
            Provide a network for all your needs with ease and fun using
            <div>
              {" "}
              <b>LaslesVPN</b> discover interesting features from us.
            </div>
          </div>
          <div className="mt-5">
            <CTAButtons title="Get Started" />
          </div>
        </div>

        {/* Images */}
        <div className="mx-auto">
          <img src="/Images/Illustration1.svg" alt="Illustration-1" />
        </div>
      </div>
    </>
  );
};

export default HeroHeader;
