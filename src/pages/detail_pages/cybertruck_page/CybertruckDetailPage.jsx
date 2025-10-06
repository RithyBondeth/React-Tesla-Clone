import { useState } from "react";
import Navbar from "../../../components/navbar_components/Navbar";

export default function CybertruckDetailPage({dataList}) {

    const [switchPriceButton, setSwitchPriceButton] = useState('Purchase Price')
    const [clickSpecBox, setClickSpecBox] = useState(0)
    const [priceList, setPriceList] = useState(dataList.order_data.purchase_prices)
    const [selectCheckBox, setSelectCheckBox] = useState(null)

    const checkBoxOnChange = (index) => {
        setSelectCheckBox((prev) => (index === prev ? null : index))
    }

    return (
        <div>
            {/* Navbar Section */}
            <Navbar isDetail={true} isWhiteText={true} isBlurBg={true}/>
            {/* End Navbar Section */}

            <div className="flex justify-center items-center overflow-hidden">
                {/* Poster Section */}
                <div 
                    className="h-screen w-2/3 bg-center bg-cover bg-no-repeat"
                    style={{backgroundImage: `url(${dataList.order_data.poster})`}}
                />
                {/* End Poster Section */}

                {/* Spec Section */}
                <div className="h-screen w-1/3 bg-cybertruckBlackBg px-5 flex flex-col justify-start items-center overflow-scroll">
                    <div className="w-full pt-20 text-2xl uppercase text-cybertruckGrayText">Reserve Now</div>
                    <div className="w-full my-5 flex justify-center items-start border-t-2 border-cybertruckGrayBorder">
                        <div 
                            className={`w-1/2 ${switchPriceButton === "Purchase Price" ? "border-cybertruckGrayBorder bg-cybertruckGrayBg" : "border-cybertruckBlackBg"} border-t-4  px-5 py-4 cursor-pointer uppercase text-cybertruckGrayText`}
                            onClick={() => {
                                setSwitchPriceButton("Purchase Price")
                                setPriceList(dataList.order_data.purchase_prices)
                            }}
                        >
                            Purchase Price
                        </div>
                        <div 
                            className={`w-1/2 ${switchPriceButton === "Probable Saving" ? "border-cybertruckGrayBorder bg-cybertruckGrayBg" : "border-cybertruckBlackBg"} border-t-4 px-5 py-4 cursor-pointer uppercase text-cybertruckGrayText`}
                            onClick={() => {
                                setSwitchPriceButton("Probable Saving")
                                setPriceList(dataList.order_data.saving_prices)
                            }} 
                        >
                            Probable Saving*
                        </div>
                    </div>
                    
                    {/* Price Section */}
                    {priceList.map((e, index) => (
                        <div className={`relative w-full my-2 p-3 pb-5 cursor-pointer ${clickSpecBox === index && 'bg-cybertruckGrayBg'}`} key={index} onClick={() => setClickSpecBox(index)}>
                            {clickSpecBox !== index && <div className="absolute left-0 bottom-0 w-20 h-20 border-l-[1px] border-b-[1px] border-cybertruckGrayBorder"/>}
                            <div className="flex justify-between items-center py-2 text-cybertruckGrayText">
                                <p>{e.price}</p>
                                <input 
                                    type="checkbox" name="price" value={e.name} id={e.index} 
                                    checked={index === selectCheckBox}
                                    onChange={() => checkBoxOnChange(index)}
                                    className="h-7 w-7 border-[1px] border-cybertruckGrayBorder" 
                                    style={{"clip-path": "polygon(0 0, 80% 0%, 100% 20%, 100% 80%, 100% 100%, 20% 100%, 0 100%, 0% 20%)"}}
                                />
                            </div>
                            <p className="text-2xl text-cybertruckGrayText">{e.option}</p>
                            <ul className="mt-4 px-2 list-['-']">
                            {e.description.map((element, index) => (
                                <li className="text-cybertruckGrayText text-xs py-1" key={index}>{element}</li>
                            ))}
                            </ul>
                            {index === dataList.order_data.purchase_prices.length - 1 && <p className="text-[10px] text-cybertruckGrayText px-2">†With rollout subtracted.</p>}
                        </div>
                    ))}
                    {/* End Price Section */}
                        
                    {/* Footer Section */}
                    <div className="p-5 pt-0">
                        {priceList === dataList.order_data.purchase_prices &&  <div className="w-full text-cybertruckGrayText text-xs mt-2 mb-5">{dataList.order_data.purchase_price_description}</div>}
                        {priceList === dataList.order_data.saving_prices &&  <div className="w-full text-cybertruckGrayText text-xs mt-2 mb-5">{dataList.order_data.saving_price_description}</div>}
                        <div className="text-cybertruckGrayText my-5">YOU WILL BE INVITED WHEN YOUR CYBERTRUCK IS READY TO BE CONFIGURED</div>
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col">
                                <p className="text-white text-sm pb-1">Due Today</p>
                                <p className="text-cybertruckGrayText text-xs pt-1">Fully Refundable</p>
                            </div>
                            <p className="text-white text-sm">$250</p>
                        </div>
                        <div className="w-full py-2 my-5 border-[1px] border-cybertruckGrayBorder text-center text-cybertruckGrayText text-sm uppercase cursor-pointer hover:text-white">Order With Card</div>
                    </div>
                    {/* End Footer Section */}
                </div>
                {/* End Spec Section */}
            </div>
        </div>
    )
}