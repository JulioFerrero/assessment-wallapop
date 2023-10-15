"use client";
import { useRouter } from 'next/navigation'
import {useState} from "react";
import {useQueryState} from "next-usequerystate";
import {BaseButton} from "@/lib/types";
export function Filter() {
    const [order, setOrder] = useQueryState("order", { shallow: false });
    const [orderBy, setOrderBy] = useQueryState("orderBy", { shallow: false });
    const [activeOrder, setActiveOrder] = useState(order)
    const [activeButton, setActiveButton] = useState(orderBy)


    function BaseButton({ order, id, content, className, onClick } : BaseButton) {
        return (
            <button type="button" onClick={() => {
                if(id){
                    if (activeButton === id) {
                        setOrderBy(null, {shallow: false})
                    } else {
                        setOrderBy(id, {shallow: false})
                    }
                }

                if(order){
                    if (activeOrder === order) {
                        setOrder(null, {shallow: false})
                    } else {
                        setOrder(order, {shallow: false})
                    }
                }
                onClick()
            }} className={`${className} ${id === activeButton || order === activeOrder ? "bg-blue-700 dark:bg-blue-700 text-white hover:text-white" : "bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"} px-4 py-2 text-sm font-medium text-gray-900 border-gray-200 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:focus:ring-blue-500 dark:focus:text-white w-full lg:w-fit`}>
                {content}
            </button>
        )
    }

    return(
        <div className="flex gap-4 flex-wrap">
            <div className="inline-flex rounded-md shadow-sm w-full lg:w-fit" role="group">
                <BaseButton order="asc" content="Ascendant" className="border rounded-l-lg" onClick={() => {
                    setActiveOrder(activeOrder !== "asc" ? "asc" : "")
                }}/>
                <BaseButton order="desc" content="Descendent" className="border rounded-r-lg" onClick={() => {
                    setActiveOrder(activeOrder !== "desc" ? "desc" : "")
                }}/>
            </div>
            <div className="inline-flex rounded-md shadow-sm w-full lg:w-fit" role="group">
                <BaseButton id="title" content="Title" className="border rounded-l-lg" onClick={() => {
                    setActiveButton(activeButton !== "title" ? "title" : "")
                }}/>
                <BaseButton id="description" content="Desc" className="border" onClick={() => {
                    setActiveButton(activeButton !== "description" ? "description" : "")
                }}/>
                <BaseButton id="email" content="Email" className="border" onClick={() => {
                    setActiveButton(activeButton !== "email" ? "email" : "")
                }}/>
                <BaseButton id="price" content="Price" className="border rounded-r-lg" onClick={() => {
                    setActiveButton(activeButton !== "price" ? "price" : "")
                }}/>
            </div>
        </div>
    )
}
