import React, { useEffect, useState } from 'react'
import MenuBox from './MenuBox'
import { menuList } from '../../data/navbar_data'
import { Link } from 'react-router-dom';

export default function Navbar({isDetail, isWhiteText, isBlurBg}) {

  const [hoverIndex, setHoverIndex] = useState("none");
  const [_isWhiteText, setIsWhiteText] = useState(isWhiteText)

  const myOnMouseOver = (indexName) => {
    setTimeout(function() {
        setHoverIndex(indexName)
    }, 500)
  }
 
  const removeHoverIndex = () => {
   setTimeout(function() {
        setHoverIndex("none")
   }, 500) 
  }  

  const whiteTextOnMouse = () => {
    setTimeout(function() {
      setIsWhiteText(false)
    }, 500)
  }

  const whiteTextMouseOut = () => {
    setTimeout(function() {
      setIsWhiteText(isWhiteText)
    }, 500)
  }

  useEffect(() => {
    if(hoverIndex !== "none") {
      document.body.style.overflow = "hidden";
    }else{
      document.body.style.overflow = "scroll"; 
    }
  })

  return (
    <>
    <div className={`flex items-center justify-between absolute bg-transparent left-0 right-0 z-20 ${(_isWhiteText && isBlurBg) && 'backdrop-blur-xl backdrop-brightness-50'}`}>
        <Link to="/">
          <img src="/assets/tesla-logo.png" alt="tesla-logo" className={`h-[50px] w-[110px] ${_isWhiteText ? 'invert' : 'invert-0'}`}/>
        </Link>
        { isDetail 
          ? <div/> :   
          <div className="flex items-center">
              {menuList.map( (e, index) => (
                <div 
                  key={index} className={`py-1 px-3 ${_isWhiteText ? 'text-white' : 'text-black'} cursor-pointer rounded-lg hover:bg-[#F2F2F2] hover:duration-300`} 
                  onMouseOver={() => {
                    myOnMouseOver(e.name)
                    whiteTextOnMouse()
                  }}
                >
                  {e.name}
                </div>
              ))}
          </div>
        }
        <div className={`${_isWhiteText ? 'text-white' : 'text-black'}`}>
            {isDetail ? <div/> : <div className="material-symbols-outlined cursor-pointer p-1 mx-1 rounded-lg hover:bg-[#F2F2F2] hover:duration-300">help</div>}
            {isDetail ? 
              <div className={`flex justify-center items-center cursor-pointer p-2 mx-2 rounded-lg ${isBlurBg ? 'hover:bg-[#313131]' : 'hover:bg-[#F2F2F2]'} hover:duration-300`}>
                <div className="material-symbols-outlined">language</div>        
                <p>US</p>  
              </div> 
            : <div className="material-symbols-outlined cursor-pointer p-1 mx-1 rounded-lg hover:bg-[#F2F2F2] hover:duration-300">language</div>          }   
            {isDetail ? <div/> : <div className="material-symbols-outlined cursor-pointer p-1 mx-1 rounded-lg hover:bg-[#F2F2F2] hover:duration-300">account_circle</div>}
        </div>
    </div>
    { hoverIndex === "none" ? <div/> : <MenuBox menuList={menuList} tagName={hoverIndex}/> }
    { hoverIndex === "none" ? 
      <div/> 
      : <div className='h-screen w-full fixed bg-transparent backdrop-blur-sm' onMouseOver={() => {
          removeHoverIndex()
          whiteTextMouseOut()
        }}
      /> 
    }
    </>
  )
}