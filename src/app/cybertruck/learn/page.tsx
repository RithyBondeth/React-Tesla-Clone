import { Link } from "react-router-dom";
import DeferredVideo from "../../../components/media/deferred-video";
import Navbar from "../../../components/navbar";
import type { CybertruckData } from "../../../utils/types/cybertruck";

interface CybertruckLearnPageProps {
  cybertruck: CybertruckData;
}

export default function CybertruckLearnPage({
  cybertruck,
}: CybertruckLearnPageProps) {
  return (
    <div className="bg-cybertruckBlackBg">
      {/* Navbar Section */}
      <Navbar isBlurred isWhiteText />
      {/* End Navbar Section */}

      {/* Poster Section */}
      <div
        className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cybertruck.learnMoreData.poster})` }}
      >
        <Link
          to={cybertruck.buttons[0].link}
          className="absolute bottom-12 left-[50%] translate-x-[-50%] py-3 px-10 text-sm font-bold text-cybertruckGrayText uppercase bg-cybertruckGrayBg cursor-pointer border-t-4 border-cybertruckGrayBorder hover:opacity-80"
        >
          Order Now
        </Link>
      </div>
      {/* End Poster Section */}

      {/* Specs Section */}
      <div
        className="h-screen w-full bg-center bg-cover bg-no-repeat relative"
        style={{
          backgroundImage: `url(${cybertruck.learnMoreData.specImage})`,
        }}
      >
        <div className="absolute bottom-10 grid w-full grid-cols-3 gap-2 px-4 sm:flex sm:items-center sm:justify-center sm:px-0">
          <div className="w-full border-r-[1px] border-t-[1px] border-cybertruckGrayBorder sm:w-[150px]">
            <div className="mt-2 mr-2 py-3 px-2 flex flex-col items-start text-cybertruckGrayText bg-transparent backdrop-blur-lg backdrop-brightness-50">
              <p className="text-2xl font-bold">
                {cybertruck.learnMoreData.specDescription["TOWING CAPACITY"]}
                <span className="uppercase text-sm ml-2">Lbs</span>
              </p>
              <p className="text-xs mt-2">TOWING CAPACITY</p>
            </div>
          </div>
          <div className="w-full border-t-[1px] border-cybertruckGrayBorder sm:mx-10 sm:w-[150px]">
            <div className="mt-2 mx-2 py-3 px-2 flex flex-col items-start text-cybertruckGrayText bg-transparent backdrop-blur-lg backdrop-brightness-50">
              <p className="text-2xl font-bold">
                {cybertruck.learnMoreData.specDescription["EST. RANGE"]}
                <span className="uppercase text-sm ml-2">Miles¹</span>
              </p>
              <p className="text-xs mt-2">EST. RANGE</p>
            </div>
          </div>
          <div className="w-full border-l-[1px] border-t-[1px] border-cybertruckGrayBorder sm:w-[150px]">
            <div className="mt-2 ml-2 py-3 px-2  flex flex-col items-start text-cybertruckGrayText backdrop-blur-lg backdrop-brightness-50">
              <p className="text-2xl font-bold">
                {cybertruck.learnMoreData.specDescription["0-60 MPH"]}
                <span className="uppercase text-sm ml-2">sec²</span>
              </p>
              <p className="text-xs mt-2">0-60 MPH</p>
            </div>
          </div>
        </div>
      </div>
      {/* End Specs Section */}

      {/* Build For AnyPlanet Section */}
      <div className="mx-4 mt-20 flex flex-col items-center sm:mx-8 lg:mx-16">
        <div className="relative">
          <DeferredVideo
            className="w-full p-5"
            src={cybertruck.learnMoreData.buildForAnyPlanet.video}
          />
          <div className="relative mx-5 flex flex-col items-start py-5 pb-10 lg:flex-row">
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-dot" />
            <div className="flex w-full items-center justify-center text-cybertruckGrayText lg:w-1/3">
              <p className="uppercase text-md">
                {cybertruck.learnMoreData.buildForAnyPlanet.title.split("-")[0]}
              </p>
              <div className="w-[1px] h-5 mx-5 bg-cybertruckGrayText" />
              <p className="uppercase text-2xl">
                {cybertruck.learnMoreData.buildForAnyPlanet.title.split("-")[1]}
              </p>
            </div>
            <div className="w-full px-2 pt-6 leading-8 text-cybertruckGrayText sm:px-8 lg:w-2/3 lg:px-16 lg:pt-0">
              {cybertruck.learnMoreData.buildForAnyPlanet.description}
            </div>
          </div>
          <div className="h-24 w-24 absolute top-0 left-0 border-t-[1px] border-l-[1px] border-cybertruckGrayBorder" />
          <div className="h-24 w-24 absolute top-0 right-0 border-t-[1px] border-r-[1px] border-cybertruckGrayBorder" />
          <div className="h-80 w-80 absolute bottom-0 left-0 border-b-[1px] border-l-[1px] border-cybertruckGrayBorder" />
        </div>
        <a
          href={cybertruck.learnMoreData.buildForAnyPlanet.guideLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit text-cybertruckGrayText text-xs font-bold uppercase py-3 px-5 my-5 border-2 border-cybertruckGrayBorder cursor-pointer"
        >
          View Cybertruck Off-Road Guide
        </a>
      </div>
      {/* End Build For AnyPlanet Section */}

      {/* NO PAINT-NO CHIPS Section*/}
      <div className="relative mx-4 mt-20 flex flex-col items-center justify-between sm:mx-8 lg:mx-32 lg:flex-row">
        <div className="absolute top-0 left-0 h-20 w-20 border-t-[1px] border-l-[1px] border-cybertruckGrayBorder" />
        <div className="absolute top-0 right-0 h-[30%] w-[50%] border-t-[1px] border-r-[1px] border-cybertruckGrayBorder" />
        <div className="absolute bottom-0 right-0 h-20 w-20 border-b-[1px] border-r-[1px] border-cybertruckGrayBorder" />
        <div className="absolute bottom-0 left-0 h-[30%] w-[50%] border-b-[1px] border-l-[1px] border-cybertruckGrayBorder" />
        <div className="my-5 w-full lg:ml-5 lg:w-1/2">
          <div className="relative w-full">
            <DeferredVideo
              className="h-full w-full object-fill pb-5 pr-5"
              src={cybertruck.learnMoreData.noPaintNoChips.video}
            />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-[1px] border-r-[1px] border-cybertruckGrayBorder" />
          </div>
          <div className="relative w-full text-cybertruckGrayText flex flex-col justify-end items-end">
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-dot" />
            <p className="uppercase text-2xl pt-5">
              {cybertruck.learnMoreData.noPaintNoChips.title}
            </p>
            <p className="py-5 text-left text-sm leading-8 sm:pl-20 sm:text-right sm:leading-10">
              {cybertruck.learnMoreData.noPaintNoChips.description}
            </p>
          </div>
        </div>
        <div className="my-5 w-full lg:mr-5 lg:w-1/2">
          <div className="relative w-full text-cybertruckGrayText flex flex-col items-start">
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-dot" />
            <p className="uppercase text-2xl pt-5">
              {cybertruck.learnMoreData.shatterResistant.title}
            </p>
            <p className="text-sm leading-10 py-5">
              {cybertruck.learnMoreData.shatterResistant.description}
            </p>
          </div>
          <div className="relative w-full">
            <DeferredVideo
              className="h-full w-full object-fill pt-5 pl-5"
              src={cybertruck.learnMoreData.shatterResistant.video}
            />
            <div className="absolute top-0 left-0 w-24 h-24 border-t-[1px] border-l-[1px] border-cybertruckGrayBorder" />
          </div>
        </div>
      </div>
      {/* End NO PAINT-NO CHIPS Section*/}

      {/* Beyond Prepared Section */}
      <div className="mx-4 mt-20 flex flex-col items-center sm:mx-8 lg:mx-16">
        <div className="relative">
          <DeferredVideo
            className="w-full p-5"
            src={cybertruck.learnMoreData.beyondPrepared.video}
          />
          <div className="relative mx-5 flex flex-col items-start py-5 pb-10 lg:flex-row">
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-dot" />
            <div className="flex w-full items-center justify-center text-cybertruckGrayText lg:w-1/3">
              <p className="uppercase text-md">
                {cybertruck.learnMoreData.beyondPrepared.title.split("-")[0]}
              </p>
              <div className="w-[1px] h-5 mx-5 bg-cybertruckGrayText" />
              <p className="uppercase text-2xl">
                {cybertruck.learnMoreData.beyondPrepared.title.split("-")[1]}
              </p>
            </div>
            <div className="w-full px-2 pt-6 leading-8 text-cybertruckGrayText sm:px-8 lg:w-2/3 lg:px-16 lg:pt-0">
              {cybertruck.learnMoreData.beyondPrepared.description}
            </div>
          </div>
          <div className="h-24 w-24 absolute top-0 left-0 border-t-[1px] border-l-[1px] border-cybertruckGrayBorder" />
          <div className="h-24 w-24 absolute top-0 right-0 border-t-[1px] border-r-[1px] border-cybertruckGrayBorder" />
          <div className="h-80 w-80 absolute bottom-0 left-0 border-b-[1px] border-l-[1px] border-cybertruckGrayBorder" />
        </div>
      </div>
      {/* End Beyond Prepared Section */}

      {/* Advertises Section */}
      {cybertruck.learnMoreData.advertisements.map((e, index) => (
        <div
          className={`relative mx-4 mt-20 flex min-h-[760px] flex-col items-center justify-center p-5 sm:mx-12 lg:mx-40 lg:h-screen lg:flex-row ${
            index === cybertruck.learnMoreData.advertisements.length - 1
              ? "mb-20"
              : ""
          }`}
          key={index}
        >
          <div className="absolute top-0 left-0 h-20 w-20 border-t-[1px] border-l-[1px] border-cybertruckGrayBorder" />
          <div className="absolute bottom-0 left-0 h-20 w-20 border-b-[1px] border-l-[1px] border-cybertruckGrayBorder" />
          <div className="absolute bottom-0 right-0 h-[40%] w-[30%] border-b-[1px] border-r-[1px] border-cybertruckGrayBorder" />
          <div
            className="h-[440px] w-full bg-cover bg-center bg-no-repeat lg:h-full lg:w-[60%]"
            style={{ backgroundImage: `url(${e.image})` }}
          />
          <div className="relative h-auto w-full py-8 lg:h-full lg:w-[40%] lg:py-0">
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-dot" />
            <div className="flex flex-col justify-start text-cybertruckGrayText uppercase px-5">
              <p className="text-3xl">{e.title.split("-")[0]}</p>
              <p className="text-xl">{e.title.split("-")[1]}</p>
            </div>
            <p className="text-cybertruckGrayText leading-10 p-5">
              {e.description}
            </p>
          </div>
        </div>
      ))}
      {/* End Advertises Section */}

      {/* Into The Wild Section */}
      <div
        className="relative h-screen w-full bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${cybertruck.learnMoreData.intoTheWild.image})`,
        }}
      >
        <div
          className="absolute left-4 top-6 w-[calc(100%-2rem)] border-t-4 border-white bg-black p-5 opacity-80 sm:left-10 sm:w-1/2 lg:left-20 lg:top-10 lg:w-1/4"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 20%, 100% 90%, 90% 100%, 0 100%, 0% 80%, 0% 20%)",
          }}
        >
          <div className="flex flex-col uppercase">
            <p className="text-cybertruckGrayText ">
              {cybertruck.learnMoreData.intoTheWild.title.split("-")[0]}
            </p>
            <p className="text-white text-2xl">
              {cybertruck.learnMoreData.intoTheWild.title.split("-")[1]}
            </p>
          </div>
          <p className="pt-5 leading-8 text-sm text-cybertruckGrayText">
            {cybertruck.learnMoreData.intoTheWild.description}
          </p>
        </div>
      </div>
      {/* End Into The Wild Section */}

      {/* Power Your Side Section */}
      <div className="relative mx-4 mt-20 flex min-h-[760px] flex-col items-center justify-center p-5 sm:mx-8 lg:mx-16 lg:h-screen lg:flex-row">
        <div className="absolute top-0 left-0 w-[30%] h-[30%] border-t-[1px] border-l-[1px] border-cybertruckGrayBorder" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-[1px] border-r-[1px] border-cybertruckGrayBorder" />
        <div className="relative h-auto w-full py-8 lg:mr-3 lg:h-full lg:w-[35%] lg:py-0">
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-dot" />
          <div className="flex flex-col justify-start px-5 uppercase">
            <p className="text-cybertruckGrayText">
              {cybertruck.learnMoreData.powerYourSide.title.split("-")[0]}
            </p>
            <p className="text-white text-2xl">
              {cybertruck.learnMoreData.powerYourSide.title.split("-")[1]}
            </p>
          </div>
          <p className="text-cybertruckGrayText leading-7 px-5 my-5">
            {cybertruck.learnMoreData.powerYourSide.description}
          </p>
        </div>
        <div
          className="ml-0 h-[500px] w-full bg-cover bg-center bg-no-repeat lg:ml-3 lg:h-full lg:w-[65%]"
          style={{
            backgroundImage: `url(${cybertruck.learnMoreData.powerYourSide.image})`,
          }}
        />
      </div>
      {/* End Power Your Side Section */}

      {/* Dopamine On Tap Section */}
      <div className="mx-4 mt-20 flex flex-col items-center sm:mx-8 lg:mx-16">
        <div className="relative">
          <DeferredVideo
            className="w-full p-5"
            src={cybertruck.learnMoreData.dopamineOnTap.video}
          />
          <div className="relative mx-5 flex flex-col items-start py-5 pb-10 lg:flex-row">
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-dot" />
            <div className="flex w-full items-center justify-center text-cybertruckGrayText lg:w-1/3">
              <p className="uppercase text-md">
                {cybertruck.learnMoreData.dopamineOnTap.title.split("-")[0]}
              </p>
              <div className="w-[1px] h-5 mx-5 bg-cybertruckGrayText" />
              <p className="uppercase text-2xl">
                {cybertruck.learnMoreData.dopamineOnTap.title.split("-")[1]}
              </p>
            </div>
            <div className="w-full px-2 pt-6 leading-8 text-cybertruckGrayText sm:px-8 lg:w-2/3 lg:px-16 lg:pt-0">
              {cybertruck.learnMoreData.dopamineOnTap.description}
            </div>
          </div>
          <div className="h-24 w-24 absolute top-0 left-0 border-t-[1px] border-l-[1px] border-cybertruckGrayBorder" />
          <div className="h-24 w-24 absolute top-0 right-0 border-t-[1px] border-r-[1px] border-cybertruckGrayBorder" />
          <div className="h-80 w-80 absolute bottom-0 left-0 border-b-[1px] border-l-[1px] border-cybertruckGrayBorder" />
        </div>
      </div>
      {/* End Dopamine On Tap Section */}

      {/* Inside Outside Section */}
      <div className="relative mx-4 mt-20 flex min-h-[760px] flex-col items-center justify-center p-5 sm:mx-8 lg:mx-16 lg:h-screen lg:flex-row">
        <div className="absolute top-0 left-0 w-[30%] h-[30%] border-t-[1px] border-l-[1px] border-cybertruckGrayBorder" />
        <div className="absolute bottom-0 right-0 w-20 h-20 border-b-[1px] border-r-[1px] border-cybertruckGrayBorder" />
        <div className="relative h-auto w-full py-8 lg:mr-3 lg:h-full lg:w-[35%] lg:py-0">
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-dot" />
          <div className="flex flex-col justify-start px-5 uppercase">
            <p className="text-cybertruckGrayText">
              {cybertruck.learnMoreData.insideOutside.title.split("-")[0]}
            </p>
            <p className="text-white text-2xl">
              {cybertruck.learnMoreData.insideOutside.title.split("-")[1]}
            </p>
          </div>
          <p className="text-cybertruckGrayText leading-7 px-5 my-5">
            {cybertruck.learnMoreData.insideOutside.description}
          </p>
        </div>
        <div
          className="ml-0 h-[500px] w-full bg-cover bg-center bg-no-repeat lg:ml-3 lg:h-full lg:w-[65%]"
          style={{
            backgroundImage: `url(${cybertruck.learnMoreData.insideOutside.image})`,
          }}
        />
      </div>
      {/* End Inside Outside Section */}

      {/* Slideshow Section */}
      <div className="h-screen w-full relative">
        <div className="absolute top-10 bottom-10 right-0 w-[90%] flex justify-start items-center overflow-x-scroll">
          {cybertruck.learnMoreData.slideshows.map((e, index) => (
            <div
              className={`h-full min-w-[80%] mr-16 flex ${index % 2 !== 0 && "flex-col"} justify-center items-center`}
              style={{
                clipPath: `${index % 2 !== 0 ? "" : "polygon(5% 0, 80% 0%, 100% 0, 100% 100%, 80% 100%, 20% 100%, 0 100%, 0 7%)"}`,
              }}
              key={index}
            >
              <div
                className={`${index % 2 !== 0 ? "w-full h-[30%] mr-0 mb-2 border-l-2 border-cybertruckGrayBorder" : "h-full w-1/2 mr-2"} bg-cybertruckSlideBg bg-center bg-cover bg-no-repeat`}
                style={{
                  backgroundImage:
                    index % 2 === 0 ? `url(${e.image})` : undefined,
                }}
              >
                {index % 2 !== 0 && (
                  <div className="h-full flex justify-between items-center px-5">
                    <div className="w-[35%] p-5">
                      <p className="text-white text-2xl">
                        {e.title.split("-")[0]}
                      </p>
                      <p className="text-cybertruckGrayText">
                        {e.title.split("-")[1]}
                      </p>
                    </div>
                    <div className="w-[65%] text-cybertruckGrayText leading-7 p-5">
                      {e.description}
                    </div>
                  </div>
                )}
              </div>
              <div
                className={`${index % 2 !== 0 ? "w-full h-[70%] ml-0 mt-2" : "h-full w-1/2 ml-2 border-b-2 border-cybertruckGrayBorder"} bg-cybertruckSlideBg bg-center bg-cover bg-no-repeat`}
                style={{
                  clipPath: `${index % 2 !== 0 ? "polygon(0 0, 100% 0, 100% 30%, 100% 93%, 96% 100%, 0 100%, 0% 70%, 0% 30%)" : ""}`,
                  backgroundImage:
                    index % 2 !== 0 ? `url(${e.image})` : undefined,
                }}
              >
                {index % 2 === 0 && (
                  <div className="flex flex-col p-5">
                    <div>
                      <p className="text-white text-2xl">
                        {e.title.split("-")[0]}
                      </p>
                      <p className="text-cybertruckGrayText">
                        {e.title.split("-")[1]}
                      </p>
                    </div>
                    <div className="text-cybertruckGrayText leading-7 py-5">
                      {e.description}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End Slideshow Section */}
    </div>
  );
}
