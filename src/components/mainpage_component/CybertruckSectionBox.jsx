import { Link } from "react-router-dom"

export default function CybertruckSectionBox({dataList}) {
    return (
        <div className="h-screen w-full flex justify-center items-center bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url(${dataList.poster})`}}>
            <div className="h-[80%] w-[50%] flex flex-col justify-between">
                <img src={dataList.title.image} alt={dataList.title.text} className="h-20"/>
                <div className="flex justify-between items-center text-center">
                    <Link to={dataList.buttons[0].link} className="w-[49%] bg-black opacity-80 text-gray-700 text-sm font-bold uppercase py-3 border-t-4 border-gray-700 hover:text-gray-500 hover:opacity-70">Order Now</Link>
                    <Link to={dataList.buttons[1].link} className="w-[49%] bg-black opacity-80 text-gray-700 text-sm font-bold uppercase py-3 border-[1px] border-gray-700 hover:text-gray-500 hover:opacity-70">Learn More</Link>
                </div>
            </div>
        </div>
    )
}
