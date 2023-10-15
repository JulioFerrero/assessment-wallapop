import Image from 'next/image'
import {Heart} from "@/components/Heart";
import {LoadMore} from "@/components/LoadMore";
import {ListInterface} from "@/lib/types";
export function List({items, limit} : ListInterface) {
    const newLimit = Number(limit) || 5
    return (
        <div className="flex items-center flex-col pt-10">
            <div className="min-h-[60vh] flex flex-wrap gap-[16px] justify-center pb-10">
                {items.slice(0, newLimit).map((item, index) => {
                    return (
                        <div key={index} className="border group cursor-pointer overflow-hidden relative text-gray-50 h-72 w-56  rounded-2xl hover:duration-700 duration-700">
                            <div className="w-56 h-72 text-gray-800 relative">
                                <div className="z-[1] absolute w-full flex flex-row justify-end">
                                    <Heart keyItem={item.key}/>
                                </div>
                                <Image sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={true} alt={item.title} className="group pb-[3rem] h-full w-full object-cover" src={item.image} fill={true}/>
                            </div>
                            <div className="absolute rounded-2xl bg-gray-50 top-[14rem] w-56 h-72 p-3 flex flex-col gap-2 group-hover:top-10 group-hover:duration-600 duration-500">
                                <div className="flex flex-col gap-1">
                                    <span className="text-gray-950 font-bold text-sm">{item.price}€</span>
                                    <span className="text-gray-800 text-sm line-clamp-[1]">{item.title}</span>
                                </div>
                                <p className="text-neutral-800 text-xs line-clamp-[9]">{item.description}</p>
                                <p className="text-neutral-800 text-xs">{item.email}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <LoadMore/>
        </div>
    )
}
