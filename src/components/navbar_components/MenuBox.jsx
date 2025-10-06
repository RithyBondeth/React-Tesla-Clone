import React, { useEffect, useState } from 'react'

export default function MenuBox(props) {

    const [index, setIndex] = useState(0);

    useEffect(() => {
        if(props.tagName === "Vehicles" || props.tagName === "vehicles")
        setIndex(0)
    else if(props.tagName === "Energy" || props.tagName === "energy")
        setIndex(1)
    else if(props.tagName === "Charging" || props.tagName === "charging")
        setIndex(2)
    else if(props.tagName === "Discover" || props.tagName === "discover")
        setIndex(3)
    else if(props.tagName === "Shop" || props.tagName === "shop")
        setIndex(4)

    }, [props.tagName])

    return (
        <div className="w-full h-fit flex items-center justify-center pt-16 bg-white duration-500 fixed z-10">
            { index !== 4 ?
            <div className="p-5 grid grid-cols-3">
                {props.menuList[index].items.products.map( (e, index) => (
                    <div key={index} className="w-fit flex flex-col items-center justify-center p-1 my-2">
                        <img src={e.productImage} alt="product" className="h-[120px] w-[220px] cursor-pointer"/>
                        <div className="flex flex-col justify-center items-center">
                            <p>{e.productName}</p>
                            <div className="w-fit flex items-center justify-center">
                                <p className="px-1 cursor-pointer underline text-gray-400 text-sm">{e.productDes[0]}</p>
                                <p className="px-1 cursor-pointer underline text-gray-400 text-sm">{e.productDes[1]}</p>
                            </div>
                        </div>
                    </div>
                ) )}
            </div>
            : index === 3 ? 
            <div className="hidden">B</div>
            :
            <div className="p-5 grid grid-cols-4">
                {props.menuList[index].items.products.map( (e, index) => (
                    <div key={index} className="w-fit flex flex-col items-center justify-center p-1 my-2">
                        <img src={e.productImage} alt="product" className="h-[120px] w-[220px] cursor-pointer"/>
                        <p>{e.productName}</p>
                    </div>
                ) )}
            </div> 
            }

            { index !== 3 ? 
            <div className="p-5">
                <ul>
                    {props.menuList[index].items.lists.map( (e, index) => <li key={index} className="cursor-pointer p-1 my-2">{e.listName}</li>)}
                </ul>
            </div>
            :
            <div className="p-5 flex justify-center items-start">
                <ul className="mx-3 p-3">
                    <caption className="text-gray-400 my-2">Resources</caption>
                    {props.menuList[index].items.lists.slice(0,5).map( (e, index) => <li key={index}>{e.listName}</li> )}
                </ul>
                <ul className="mx-3 p-3">
                    <caption className="text-gray-400 my-2 whitespace-nowrap">Location Services</caption>
                    {props.menuList[index].items.lists.slice(5,9).map( (e, index) => <li key={index}>{e.listName}</li> )}
                </ul>
                <ul  className="mx-3 p-3">
                    <caption className="text-gray-400 my-2">Resources</caption>
                    {props.menuList[index].items.lists.slice(9,12).map( (e, index) => <li key={index}>{e.listName}</li> )}
                </ul>
            </div>
            }
        </div>
  )
}