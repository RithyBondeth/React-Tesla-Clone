import { useState } from "react";
import Navbar from "../../../components/navbar_components/Navbar";
import { autoPilotVideoList } from "../../../data/mainpage_data";

export default function ModelCarDetailPage({dataList, slideClickIndex}) {

  var [imageIndex, setImageIndex] = useState(0)
  var [videoIndex, setVideoIndex] = useState(0)
  var [isShowSlideButton, setIsShowSlideButton] = useState(false)

  var [colorInfo, setColorInfo] = useState({
    colorName: dataList.order_data.colors[0].color_name,
    colorPrice: dataList.order_data.colors[0].color_price,
    colorIndex: 0,
  })

  var [optionIndex, setOptionIndex] = useState(0)

  var [wheelInfo, setWheelInfo] = useState({
    wheelIndex: 0,
    wheelName: dataList.order_data.wheels[0].wheel_name, 
    wheelPrice: dataList.order_data.wheels[0].wheel_price,
    wheelDescription: dataList.order_data.wheels[0].wheel_description
  })

  var [interiorInfo, setInteriorInfo] = useState({
    interiorIndex: null,
    interiorClickIndex: 0,
    interiorName: dataList.order_data.interiors[0].interior_description,    
    interiorPrice: dataList.order_data.interiors[0].interior_price,
  })

  var [showAutoPilot, setShowAutoPilot] = useState(null);

  var colorCode = (colorName) => {
    switch(colorName) {
      case "Slealth Grey":
        return 0;
      case "Pearl White":
        return 1;
      case "Deep Blue Metallic":
        return 2;
      case "Solid Black":
        return 3;
      case "Ultra Red":
        return 4;
      case "Lunar Silver":
        return 5;
      default:
        return null;
    } 
  }

  var forwardClick = () => {
    if(imageIndex < dataList.order_data.colors[0].wheel1_cars.length - slideClickIndex.forward) {
      setImageIndex(imageIndex++)
    }else{
      setImageIndex(0)
    }
  }

  var backClick = () => {
    if(imageIndex < 0) {
      setImageIndex(dataList.order_data.colors[0].wheel1_cars.length - slideClickIndex.back)
    }else if(imageIndex <= dataList.order_data.colors[0].wheel1_cars.length) {
      setImageIndex(imageIndex--) 
    }
  }

  var forwardVideoClick = () => {
    if(videoIndex < autoPilotVideoList.length) {
      setVideoIndex(videoIndex++)
    }else{
      setVideoIndex(0)
    }
  }

  var backVideoClick = () => {
    if(videoIndex < 0) {
      setVideoIndex(autoPilotVideoList.length - 1)
    }else if(videoIndex <= autoPilotVideoList.length){
      setVideoIndex(videoIndex--)
    } 
  }

  return (
    <>
      {/* Navbar Section */}
      <Navbar isDetail={true} isWhiteText={false}/>
      {/* End Navbar Section */}

      <div className="h-full w-screen flex items-center justify-center">
        {/* Slide Box */}
        {(wheelInfo.wheelIndex === 0 && interiorInfo.interiorIndex === null && showAutoPilot === null) ? 
        <div  className="h-screen w-2/3 bg-center bg-cover bg-no-repeat relative" 
                style={{backgroundImage: `url(${dataList.order_data.colors[colorCode(colorInfo.colorName)].wheel1_cars[imageIndex]})`}}
                onMouseOver={() => setIsShowSlideButton(true)}
                onMouseOut={() => setIsShowSlideButton(false)}
            >
            {isShowSlideButton && <div className="material-symbols-outlined absolute left-10 top-[50%] translate-y-[-50%] rounded-md text-md bg-gray-200 p-2 cursor-pointer" onClick={() => backClick()}>arrow_back_ios</div>}
            {isShowSlideButton &&<div className="material-symbols-outlined absolute right-10 top-[50%] translate-y-[-50%] rounded-md text-md bg-gray-200 p-2 cursor-pointer" onClick={() => forwardClick()}>arrow_forward_ios</div>}
        </div> 
        : (wheelInfo.wheelIndex === 1 && interiorInfo.interiorIndex === null && showAutoPilot === null) ? 
        <div  className="h-screen w-2/3 bg-center bg-cover bg-no-repeat relative" 
                style={{backgroundImage: `url(${dataList.order_data.colors[colorCode(colorInfo.colorName)].wheel2_cars[imageIndex]})`}}
                onMouseOver={() => setIsShowSlideButton(true)}
                onMouseOut={() => setIsShowSlideButton(false)}
            >
            {isShowSlideButton && <div className="material-symbols-outlined absolute left-10 top-[50%] translate-y-[-50%] rounded-md text-md bg-gray-200 p-2 cursor-pointer" onClick={() => backClick()}>arrow_back_ios</div>}
            {isShowSlideButton &&<div className="material-symbols-outlined absolute right-10 top-[50%] translate-y-[-50%] rounded-md text-md bg-gray-200 p-2 cursor-pointer" onClick={() => forwardClick()}>arrow_forward_ios</div>}
        </div> 
        : interiorInfo.interiorIndex !== null ? 
        <div  
          className="h-screen w-2/3 bg-center bg-cover bg-no-repeat relative" 
          style={{backgroundImage: `url(${dataList.order_data.interiors[interiorInfo.interiorIndex].interior_images[colorInfo.colorName]})`}}
        />
        : showAutoPilot !== null ? 
        <div className="h-screen w-2/3 relative" onMouseOver={() => setIsShowSlideButton(true)} onMouseOut={() => setIsShowSlideButton(false)}>
          <video src={autoPilotVideoList[videoIndex].video} autoplay="autoplay" loop="true" muted  className="min-h-full"/>
          <div className="absolute bottom-5 left-0 right-0 text-center text-gray-500 z-10">{autoPilotVideoList[videoIndex].technology}</div>
          {isShowSlideButton && <div className="material-symbols-outlined absolute left-10 top-[50%] translate-y-[-50%] rounded-md text-md bg-gray-200 p-2 cursor-pointer" onClick={() => backVideoClick()}>arrow_back_ios</div>}
          {isShowSlideButton &&<div className="material-symbols-outlined absolute right-10 top-[50%] translate-y-[-50%] rounded-md text-md bg-gray-200 p-2 cursor-pointer" onClick={() => forwardVideoClick()}>arrow_forward_ios</div>} 
        </div>
        : null}
        {/* End Slide Box */}
        
        <div className="h-screen w-1/3 overflow-scroll">
          {/* Title Box */}
          <div className="flex flex-col justify-center items-center pt-20 pb-3">
            <p className="text-3xl font-bold">{dataList.title}</p>
          </div>
          {/* End Titte Box */}

           {/* Machine Box */}
          <div className="flex justify-center items-center p-3">
            <div className="flex flex-col justify-center items-center">
              <p className="text-lg font-bold">{dataList.order_data.options[optionIndex].option_machine[0]}</p>
              <p className="text-sm">Range (EPA est.)</p>
            </div>
            <div className="flex flex-col justify-center items-center px-5">
              <p className="text-lg font-bold">{dataList.order_data.options[optionIndex].option_machine[1]}</p>
              <p className="text-sm">Top Speed</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-lg font-bold">{dataList.order_data.options[optionIndex].option_machine[2]}</p>
              <p className="text-sm">0-60 mph</p>
            </div>
          </div>
          {/* End Machine Box */}

          {/* Price Box */}
          <div className="flex flex-col justify-center items-center px-5 py-3">
            <div className="w-full text-sm text-gray-500 mb-1">{dataList.order_data.options[optionIndex].option_description}</div>
            {dataList.order_data.options.map((e, index) => (
              <div 
                className={
                  `w-full flex justify-between items-cenxter text-sm mt-2 py-3 px-2 border border-gray-500 rounded-md cursor-pointer duration-300 
                  ${optionIndex === index ? 'border-2 border-blue-500 text-black font-bold' : 'text-gray-500'}
                `} 
                key={index} 
                onClick={() => setOptionIndex(index)}
              >
                <p>{e.option_name}</p>
                <p>{e.option_price}</p>
              </div>
            ))}
            <div className="py-2 px-4 mt-4 mb-1 rounded-lg bg-gray-200 cursor-pointer">Feature Details</div>
          </div>
          {/* End Price Box */}

          {/* Paint Box */}
          <div className="flex flex-col justify-center items-center py-5">
            <p className="text-3xl font-bold">Paint</p> 
            <div className="flex justify-center items-center mt-4 mb-2">
              {dataList.order_data.colors.map((e, index) => (
                 <div 
                  key={index}
                  className={`h-12 w-12 rounded-[50%] bg-center bg-no-repeat bg-cover mx-1 cursor-pointer border-2 ${colorInfo.colorIndex === index && 'border-2 border-blue-500'}`}
                  style={{backgroundImage: `url(${e.color_icon})`}}
                  onClick={() => {
                    setColorInfo({
                      colorName: e.color_name,
                      colorPrice: e.color_price,
                      colorIndex: index,
                    })
                    dataList.order_data.interiors.map((e, _index) => (
                      setInteriorInfo({
                        interiorIndex: null,
                        interiorClickIndex: _index,
                        interiorName: e.interior_description,
                        interiorPrice: e.interior_price
                      })
                    ))
                    setShowAutoPilot(null)
                  }}
                 />
              ))}
            </div>
            <div className="flex justify-center items-center text-sm">
              <div className="font-bold">{colorInfo.colorName}</div>
              <div className="text-gray-500 px-2">{colorInfo.colorPrice}</div>
            </div>
          </div>
          {/* End Paint Box */}
                
          {/* Wheel Box */}
          <div className="flex flex-col justify-center items-center py-5">
            <p className="text-3xl font-bold">Wheels</p>
            <div className="flex justify-center items-center mt-4 mb-2">
            {dataList.order_data.wheels.map((e, index) => (
              <div
                key={index}
                className={`h-12 w-12 rounded-[50%] bg-center bg-no-repeat bg-cover mx-1 cursor-pointer border-2 ${wheelInfo.wheelIndex === index && 'border-2 border-blue-500'}`}
                style={{backgroundImage: `url(${e.wheel_icon})`}}
                onClick={() => {
                  setWheelInfo({
                    wheelIndex: index, 
                    wheelName: e.wheel_name, 
                    wheelPrice: e.wheel_price, 
                    wheelDescription: e.wheel_description
                  })
                  dataList.order_data.interiors.map((e, _index) => (
                    setInteriorInfo({
                      interiorIndex: null,
                      interiorClickIndex: _index,
                      interiorName: e.interior_description,
                      interiorPrice: e.interior_price
                    })
                  ))
                  setShowAutoPilot(null)
                }} 
              />
            ))}
            </div> 
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center items-center text-sm">
                <div className="font-bold">{wheelInfo.wheelName}</div>
                <div className="text-gray-500 px-2">{wheelInfo.wheelPrice}</div>
              </div>
              {wheelInfo.wheelDescription.map((e, index) => (
                <div key={index} className="text-sm text-gray-500 pt-1">{e}</div>
              ))}
              <div className="py-2 px-4 mt-4 rounded-lg bg-gray-200 cursor-pointer">Learn More</div>
            </div>
          </div>
          {/* End Wheel Box */}

          {/* Interior Box */} 
          <div className="flex flex-col items-center justify-center py-5">
            <p className="text-3xl font-bold">Interior</p>
            <div className="flex justify-center items-center mt-4 mb-2">
            {dataList.order_data.interiors.map((e, index) => (
              <div
                key={index}
                className={`h-12 w-12 rounded-[50%] bg-center bg-cover bg-no-repeat mx-1 cursor-pointer border-2 ${interiorInfo.interiorClickIndex === index && 'border-2 border-blue-500'}`}
                style={{backgroundImage: `url(${e.interior_icon})`}}
                onClick={() => {
                  setInteriorInfo({
                    interiorIndex: index,
                    interiorClickIndex: index,
                    interiorName: e.interior_description,
                    interiorPrice: e.interior_price
                  })
                  setShowAutoPilot(null)
                }}
              />
            ))}
            </div>
            <div className="flex justify-center items-center text-sm">
                <div className="font-bold">{interiorInfo.interiorName}</div>
                <div className="text-gray-500 px-2">{interiorInfo.interiorPrice}</div>
            </div>
          </div>
          {/* End Interior Box */} 

          {/* Auto Pilot Box */}
          <div className="flex flex-col items-center justify-center py-5">
            <div className="text-center">
              <p className="text-3xl font-bold">Full Self-Driving Capability</p>
              <p className="text-sm">$8,000</p>
            </div>
            <div className="text-gray-500 text-sm px-5 py-2 mt-2">Receive a 30 day trial of Full Self-Driving Capability with a new vehicle purchase.</div>
            <div className="text-gray-500 text-sm px-5 py-2">Your car will be able to drive itself almost anywhere with minimal driver intervention and will continuously improve</div>
            <ul className="w-full text-gray-500 text-sm px-10 pb-2 list-disc [&>li]:my-2">
              <li>Navigate on Autopilot</li>
              <li>Auto Lane Change</li>
              <li>Autopark</li>
              <li>Summon</li>
              <li>Smart Summon</li>
              <li>Autosteer on city streets</li>
              <li>Traffic Light and Stop Sign Control</li>
            </ul>
            <div className="text-gray-500 text-xs leading-5 px-5">
              The currently enabled features require active driver supervision and do not make the vehicle autonomous. The activation and use of these features are 
              dependent on achieving reliability far in excess of human drivers as demonstrated by billions of miles of experience, as well as regulatory approval, 
              which may take longer in some jurisdictions. As these self-driving features evolve, your car will be continuously upgraded through over-the-air software 
              updates.
            </div>
            <div className="py-2 px-4 mt-4 mb-1 rounded-lg bg-gray-200 cursor-pointer" 
                onClick={() => {
                  setShowAutoPilot(!null)
                  setInteriorInfo({interiorIndex: null})
                  setVideoIndex(0)
                }}
            >
              Feature Details
            </div>
          </div>
          {/* End Auto Pilot Box */} 

          {/* Charging Box */} 
          <div className="flex flex-col items-center justify-center py-5">
            <p className="text-3xl font-bold">Charging</p>
            <div className="flex justify-center items-center my-5">
              <p className="material-symbols-outlined text-blue-500">info</p>
              <p className="ml-2 text-sm">Home charging equipment is not included</p>
            </div>
            <div className="w-full px-5">
            {[{label: "Universal Wall Connector", price: "$580"}, {label: "Mobile Connector", price: "$250"}].map((e, index) => (
              <div className="flex justify-between items-center py-2" key={index}>
                <div className="flex justify-center items-center">
                  <input 
                    type="checkbox" name="charging" value={e.label} id={index}
                    className="h-7 w-7 cursor-pointer border-[1px] border-gray-500"
                  />
                  <p className="ml-2">{e.label}</p>
                </div>
                <p>{e.price}</p>
              </div>
            ))}
            </div>
            <div className="py-2 px-4 mt-4 rounded-lg bg-gray-200 cursor-pointer">Learn More</div>
          </div>
          {/* End Charging Box */} 

          {/* Accessories Box */} 
          <div className="flex flex-col items-center justify-center py-5">
            <p className="text-3xl font-bold">Accessories</p>
            <div className="w-full px-5 mt-3">
            {dataList.order_data.accessories.map((e, index) => (
              <div className="flex justify-between items-center py-2" key={index}>
                <div className="flex justify-center items-center">
                  <input type="checkbox" className="h-7 w-7 cursor-pointer border-[1px] border-gray-500" name={e.accessories_description} id={index}/>
                  <p className="ml-2">{e.accessories_description}</p>
                </div>
                <p>{e.accessories_price}</p>
              </div>
            ))}
            </div>
            <div className="py-2 px-4 mt-4 rounded-lg bg-gray-200 cursor-pointer">Learn More</div>
          </div> 
          {/* End Accessories Box */}

          {/* Order Box */}
          <div className="flex flex-col justify-center items-center py-5 mb-40">
            <p className="text-3xl font-bold">{dataList.order_data.last_orders[0]}</p>
            <p className="text-sm text-gray-500 my-3">{dataList.order_data.last_orders[1]}</p>
            <div className="flex justify-center items-start px-5">
              {dataList.order_data.last_orders[2] === "" ? null : <p className="material-symbols-outlined text-green-500">check</p>}
              <p className="text-sm ml-2">{dataList.order_data.last_orders[2]}</p>
            </div>
            <div className="w-[90%] py-2 mt-4 rounded-lg bg-blue-500 text-white text-center cursor-pointer">Continue</div>
          </div>
          {/* End Order Box */}
        </div>
      </div>
    </>
  )
}