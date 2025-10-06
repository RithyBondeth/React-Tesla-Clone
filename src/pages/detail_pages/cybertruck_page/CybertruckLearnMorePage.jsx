import { Link } from "react-router-dom";
import Navbar from "../../../components/navbar_components/Navbar";
import { useState } from "react";

export default function CybertruckLearnMorePage({dataList}) {

    const [isHoverOnNav, setIsHoverOnNav] = useState(false)

  return (
    <div className="bg-cybertruckBlackBg">
        {/* Navbar Section */}
        <div onMouseOver={() => setIsHoverOnNav(true)} onMouseOut={() => setIsHoverOnNav(false)}>
            <Navbar isDetail={false} isWhiteText={true} isBlurBg={false}/>
        </div>
        {/* End Navbar Section */}

        {/* Poster Section */}
        <div className={`h-screen w-full bg-center bg-cover bg-no-repeat relative ${isHoverOnNav && '-z-10'}`} style={{backgroundImage: `url(${dataList.learn_more_data.poster})`}}>
            <Link to={dataList.buttons[0].link} className="absolute bottom-12 left-[50%] translate-x-[-50%] py-3 px-10 text-sm font-bold text-cybertruckGrayText uppercase bg-cybertruckGrayBg cursor-pointer border-t-4 border-cybertruckGrayBorder hover:opacity-80">Order Now</Link>
        </div>
        {/* End Poster Section */}

        {/* Specs Section */}
        <div className="h-screen w-full bg-center bg-cover bg-no-repeat relative" style={{backgroundImage: `url(${dataList.learn_more_data.spec_image})`}}>
            <div className="w-full absolute bottom-10 flex justify-center items-center">
                <div className="w-[150px] border-t-[1px] border-r-[1px] border-cybertruckGrayBorder">
                    <div className="mt-2 mr-2 py-3 px-2 flex flex-col items-start text-cybertruckGrayText bg-transparent backdrop-blur-lg backdrop-brightness-50">
                        <p className="text-2xl font-bold">{dataList.learn_more_data.spec_description["TOWING CAPACITY"]}<span className="uppercase text-sm ml-2">Lbs</span></p>
                        <p className="text-xs mt-2">TOWING CAPACITY</p>
                    </div>
                </div>
                <div className="w-[150px] border-t-[1px] mx-10 border-cybertruckGrayBorder">
                    <div className="mt-2 mx-2 py-3 px-2 flex flex-col items-start text-cybertruckGrayText bg-transparent backdrop-blur-lg backdrop-brightness-50">
                        <p className="text-2xl font-bold">{dataList.learn_more_data.spec_description["EST. RANGE"]}<span className="uppercase text-sm ml-2">Miles¹</span></p>
                        <p className="text-xs mt-2">EST. RANGE</p>
                    </div>
                </div>
                <div className="w-[150px] border-t-[1px] border-l-[1px] border-cybertruckGrayBorder">
                    <div className="mt-2 ml-2 py-3 px-2  flex flex-col items-start text-cybertruckGrayText backdrop-blur-lg backdrop-brightness-50">
                        <p className="text-2xl font-bold">{dataList.learn_more_data.spec_description["0-60 MPH"]}<span className="uppercase text-sm ml-2">sec²</span></p>
                        <p className="text-xs mt-2">0-60 MPH</p>
                    </div>
                </div>
            </div>
        </div> 
        {/* End Specs Section */}
        
        {/* Build For AnyPlanet Section */}
        <div className="mx-16 mt-20 flex flex-col items-center">
            <div className="relative">
                <video src={dataList.learn_more_data.build_for_anyplanet.video} autoplay="autoplay" loop="true" muted className="w-full p-5"/>
                <div className="relative flex items-start py-5 pb-10 mx-5">
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-dot"/>
                    <div className="w-1/3 flex justify-center items-center text-cybertruckGrayText">
                        <p className="uppercase text-md">{dataList.learn_more_data.build_for_anyplanet.title.split("-")[0]}</p>
                        <div className="w-[1px] h-5 mx-5 bg-cybertruckGrayText"/>
                        <p className="uppercase text-2xl">{dataList.learn_more_data.build_for_anyplanet.title.split("-")[1]}</p>
                    </div>
                    <div className="w-2/3 px-16 leading-8 text-cybertruckGrayText">{dataList.learn_more_data.build_for_anyplanet.description}</div>
                </div>
                <div className="h-24 w-24 absolute top-0 left-0 border-t-[1px] border-l-[1px] border-cybertruckGrayBorder"/>
                <div className="h-24 w-24 absolute top-0 right-0 border-t-[1px] border-r-[1px] border-cybertruckGrayBorder"/>
                <div className="h-80 w-80 absolute bottom-0 left-0 border-b-[1px] border-l-[1px] border-cybertruckGrayBorder"/>
            </div>
            <Link to={dataList.learn_more_data.build_for_anyplanet.guide_link} target="_blank" rel="noopener noreferrer" className="w-fit text-cybertruckGrayText text-xs font-bold uppercase py-3 px-5 my-5 border-2 border-cybertruckGrayBorder cursor-pointer">View Cybertruck Off-Road Guide</Link>
        </div>
        {/* End Build For AnyPlanet Section */}

        {/* NO PAINT-NO CHIPS Section*/}
        <div className="relative mx-32 mt-20 flex justify-between items-center">
            <div className="absolute top-0 left-0 h-20 w-20 border-t-[1px] border-l-[1px] border-cybertruckGrayBorder"/>
            <div className="absolute top-0 right-0 h-[30%] w-[50%] border-t-[1px] border-r-[1px] border-cybertruckGrayBorder"/>
            <div className="absolute bottom-0 right-0 h-20 w-20 border-b-[1px] border-r-[1px] border-cybertruckGrayBorder"/>
            <div className="absolute bottom-0 left-0 h-[30%] w-[50%] border-b-[1px] border-l-[1px] border-cybertruckGrayBorder"/>
            <div className="w-1/2 ml-5 my-5">
                <div className="relative w-full">
                    <video src={dataList.learn_more_data.nopaint_nochips.video} autoplay="autoplay" loop="true" muted className="h-full w-full object-fill pb-5 pr-5"/> 
                    <div className="absolute bottom-0 right-0 w-24 h-24 border-b-[1px] border-r-[1px] border-cybertruckGrayBorder"/>
                </div>
                <div className="relative w-full text-cybertruckGrayText flex flex-col justify-end items-end">
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-dot"/>
                    <p className="uppercase text-2xl pt-5">{dataList.learn_more_data.nopaint_nochips.title}</p>
                    <p className="text-sm text-right leading-10 py-5 pl-20">{dataList.learn_more_data.nopaint_nochips.description}</p>
                </div>
            </div>
            <div className="w-1/2 mr-5 my-5">
                <div className="relative w-full text-cybertruckGrayText flex flex-col items-start">
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-dot"/>
                    <p className="uppercase text-2xl pt-5">{dataList.learn_more_data.shatter_resistant.title}</p>
                    <p className="text-sm leading-10 py-5">{dataList.learn_more_data.shatter_resistant.description}</p>
                </div>
                <div className="relative w-full">
                    <video src={dataList.learn_more_data.shatter_resistant.video} autoplay="autoplay" loop="true" muted className="h-full w-full object-fill pt-5 pl-5"/>
                    <div className="absolute top-0 left-0 w-24 h-24 border-t-[1px] border-l-[1px] border-cybertruckGrayBorder"/>
                </div>
            </div> 
        </div>
        {/* End NO PAINT-NO CHIPS Section*/}

        {/* Beyond Prepared Section */}
        <div className="mx-16 mt-20 flex flex-col items-center">
            <div className="relative">
                <video src={dataList.learn_more_data.beyond_prepared.video} autoplay="autoplay" loop="true" muted className="w-full p-5"/>
                <div className="relative flex items-start py-5 pb-10 mx-5">
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-dot"/>
                    <div className="w-1/3 flex justify-center items-center text-cybertruckGrayText">
                        <p className="uppercase text-md">{dataList.learn_more_data.beyond_prepared.title.split("-")[0]}</p>
                        <div className="w-[1px] h-5 mx-5 bg-cybertruckGrayText"/>
                        <p className="uppercase text-2xl">{dataList.learn_more_data.beyond_prepared.title.split("-")[1]}</p>
                    </div>
                    <div className="w-2/3 px-16 leading-8 text-cybertruckGrayText">{dataList.learn_more_data.beyond_prepared.description}</div>
                </div>
                <div className="h-24 w-24 absolute top-0 left-0 border-t-[1px] border-l-[1px] border-cybertruckGrayBorder"/>
                <div className="h-24 w-24 absolute top-0 right-0 border-t-[1px] border-r-[1px] border-cybertruckGrayBorder"/>
                <div className="h-80 w-80 absolute bottom-0 left-0 border-b-[1px] border-l-[1px] border-cybertruckGrayBorder"/>
            </div>
        </div>
        {/* End Beyond Prepared Section */}

        {/* Advertises Section */}
        {dataList.learn_more_data.advertises.map((e, index) => (
            <div className={`relative mx-40 mt-20 p-5 ${index === dataList.learn_more_data.advertises.length - 1 && 'mb-20'} h-screen flex justify-center items-center`} key={index}>
                <div className="absolute top-0 left-0 h-20 w-20 border-t-[1px] border-l-[1px] border-cybertruckGrayBorder"/>
                <div className="absolute bottom-0 left-0 h-20 w-20 border-b-[1px] border-l-[1px] border-cybertruckGrayBorder"/>
                <div className="absolute bottom-0 right-0 h-[40%] w-[30%] border-b-[1px] border-r-[1px] border-cybertruckGrayBorder"/>
                <div className="w-[60%] h-full bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${e.image})`}}/>
                <div className="relative w-[40%] h-full">
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-dot"/>
                    <div className="flex flex-col justify-start text-cybertruckGrayText uppercase px-5">
                        <p className="text-3xl">{e.title.split("-")[0]}</p>
                        <p className="text-xl">{e.title.split("-")[1]}</p>
                    </div>
                    <p className="text-cybertruckGrayText leading-10 p-5">{e.description}</p>
                </div>
            </div>
        ))}
        {/* End Advertises Section */}

        {/* Into The Wild Section */}
        <div className="relative h-screen w-full bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${dataList.learn_more_data.into_thewild.image})`}}>
            <div className="absolute top-10 left-20 w-1/4 p-5 border-t-4 border-white bg-black opacity-80" style={{"clip-path": "polygon(0 0, 100% 0, 100% 20%, 100% 90%, 90% 100%, 0 100%, 0% 80%, 0% 20%)"}}>
                <div className="flex flex-col uppercase">
                    <p className="text-cybertruckGrayText ">{dataList.learn_more_data.into_thewild.title.split("-")[0]}</p>
                    <p className="text-white text-2xl">{dataList.learn_more_data.into_thewild.title.split("-")[1]}</p>
                </div>
                <p className="pt-5 leading-8 text-sm text-cybertruckGrayText">{dataList.learn_more_data.into_thewild.description}</p>
            </div>
        </div>
        {/* End Into The Wild Section */}

        {/* Power Your Side Section */}
        <div className="relative mx-16 mt-20 p-5 h-screen flex justify-center items-center">
            <div className="absolute top-0 left-0 w-[30%] h-[30%] border-t-[1px] border-l-[1px] border-cybertruckGrayBorder"/>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-[1px] border-r-[1px] border-cybertruckGrayBorder"/>
            <div className="relative h-full w-[35%] mr-3">
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-dot"/>
                <div className="flex flex-col justify-start px-5 uppercase">
                    <p className="text-cybertruckGrayText">{dataList.learn_more_data.power_yourside.title.split("-")[0]}</p>
                    <p className="text-white text-2xl">{dataList.learn_more_data.power_yourside.title.split("-")[1]}</p>
                </div>
                <p className="text-cybertruckGrayText leading-7 px-5 my-5">{dataList.learn_more_data.power_yourside.description}</p>
            </div>
            <div className="h-full w-[65%] ml-3 bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${dataList.learn_more_data.power_yourside.image})`}}/>
        </div>
        {/* End Power Your Side Section */}

        {/* Dopamine On Tap Section */}
        <div className="mx-16 mt-20 flex flex-col items-center">
            <div className="relative">
                <video src={dataList.learn_more_data.dopamine_ontap.video} autoplay="autoplay" loop="true" muted className="w-full p-5"/>
                <div className="relative flex items-start py-5 pb-10 mx-5">
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-dot"/>
                    <div className="w-1/3 flex justify-center items-center text-cybertruckGrayText">
                        <p className="uppercase text-md">{dataList.learn_more_data.dopamine_ontap.title.split("-")[0]}</p>
                        <div className="w-[1px] h-5 mx-5 bg-cybertruckGrayText"/>
                        <p className="uppercase text-2xl">{dataList.learn_more_data.dopamine_ontap.title.split("-")[1]}</p>
                    </div>
                    <div className="w-2/3 px-16 leading-8 text-cybertruckGrayText">{dataList.learn_more_data.dopamine_ontap.description}</div>
                </div>
                <div className="h-24 w-24 absolute top-0 left-0 border-t-[1px] border-l-[1px] border-cybertruckGrayBorder"/>
                <div className="h-24 w-24 absolute top-0 right-0 border-t-[1px] border-r-[1px] border-cybertruckGrayBorder"/>
                <div className="h-80 w-80 absolute bottom-0 left-0 border-b-[1px] border-l-[1px] border-cybertruckGrayBorder"/>
            </div>
        </div>
        {/* End Dopamine On Tap Section */}

        {/* Inside Outside Section */}
        <div className="relative mx-16 mt-20 p-5 h-screen flex justify-center items-center">
            <div className="absolute top-0 left-0 w-[30%] h-[30%] border-t-[1px] border-l-[1px] border-cybertruckGrayBorder"/>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-[1px] border-r-[1px] border-cybertruckGrayBorder"/>
            <div className="relative h-full w-[35%] mr-3">
                <div className="absolute top-0 right-0 bottom-0 left-0 bg-dot"/>
                <div className="flex flex-col justify-start px-5 uppercase">
                    <p className="text-cybertruckGrayText">{dataList.learn_more_data.inside_outside.title.split("-")[0]}</p>
                    <p className="text-white text-2xl">{dataList.learn_more_data.inside_outside.title.split("-")[1]}</p>
                </div>
                <p className="text-cybertruckGrayText leading-7 px-5 my-5">{dataList.learn_more_data.inside_outside.description}</p>
            </div>
            <div className="h-full w-[65%] ml-3 bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${dataList.learn_more_data.inside_outside.image})`}}/>
        </div>
        {/* End Inside Outside Section */}

        {/* Slideshow Section */}
        <div className="h-screen w-full relative">
            <div className="absolute top-10 bottom-10 right-0 w-[90%] flex justify-start items-center overflow-x-scroll"> 
            {dataList.learn_more_data.slideshows.map((e, index) => (
                <div className={`h-full min-w-[80%] mr-16 flex ${index%2 !== 0 && 'flex-col'} justify-center items-center`} style={{"clip-path": `${index%2 !== 0 ? '' : 'polygon(5% 0, 80% 0%, 100% 0, 100% 100%, 80% 100%, 20% 100%, 0 100%, 0 7%)'}`}} key={index}>
                    <div className={`${index&2 !== 0 ? 'w-full h-[30%] mr-0 mb-2 border-l-2 border-cybertruckGrayBorder' : 'h-full w-1/2 mr-2'} bg-cybertruckSlideBg bg-center bg-cover bg-no-repeat`} style={{backgroundImage: `url(${index%2 === 0 && e.image})`}}>
                    {index%2 !== 0 && 
                        <div className="h-full flex justify-between items-center px-5">
                            <div className="w-[35%] p-5">
                                <p className="text-white text-2xl">{e.title.split("-")[0]}</p>
                                <p className="text-cybertruckGrayText">{e.title.split("-")[1]}</p>
                            </div>
                            <div className="w-[65%] text-cybertruckGrayText leading-7 p-5">{e.description}</div>
                        </div>
                    }
                    </div>
                    <div className={`${index&2 !== 0 ? 'w-full h-[70%] ml-0 mt-2' : 'h-full w-1/2 ml-2 border-b-2 border-cybertruckGrayBorder'} bg-cybertruckSlideBg bg-center bg-cover bg-no-repeat`} style={{"clip-path": `${index%2 !== 0 ? 'polygon(0 0, 100% 0, 100% 30%, 100% 93%, 96% 100%, 0 100%, 0% 70%, 0% 30%)' : ''}`, backgroundImage: `url(${index%2 !== 0 && e.image})`}}>
                    {index%2 === 0 && 
                        <div className="flex flex-col p-5">
                            <div>
                                <p className="text-white text-2xl">{e.title.split("-")[0]}</p>
                                <p className="text-cybertruckGrayText">{e.title.split("-")[1]}</p>
                            </div>
                            <div className="text-cybertruckGrayText leading-7 py-5">{e.description}</div>
                        </div>
                    }
                    </div>
                </div>
            ))}            
            </div>
        </div>
        {/* End Slideshow Section */}
    </div>
  )
}