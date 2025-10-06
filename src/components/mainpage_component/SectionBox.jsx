import { Link } from "react-router-dom"

export default function SectionBox({dataList}) {
 return (
    <div className="bg-no-repeat bg-cover bg-center h-screen w-ful flex justify-center items-center" style={{backgroundImage: `url(${dataList.poster})`}} >
        <div className="h-[75%] w-[50%] flex flex-col justify-between">
            <div className={`text-center ${dataList.black_text ? 'text-back' : 'text-white'}`}>
                <p className="text-4xl">{dataList.title}</p>
                <p className="text-l mt-2">{dataList.subTitle}</p>
                <p className="text-sm mt-2">{dataList.description}</p>
            </div>
            <div className="flex justify-between items-center text-center">
                <Link to={`${dataList.buttons[0].link}`} className="w-[49%] bg-white text-black py-2 rounded-md">{dataList.buttons[0].label}</Link>
                <Link to={`${dataList.buttons[1].link}`} className="w-[49%] bg-black text-white py-2 rounded-md">{dataList.buttons[1].label}</Link>
            </div>
        </div>
    </div>
 )  
}