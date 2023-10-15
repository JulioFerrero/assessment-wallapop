"use client"

import {useQueryState} from "next-usequerystate";

export function LoadMore() {
    const [limit, setLimit] = useQueryState("limit", { shallow: false, scroll: false });
    function loadMore() {
        const newLimit = limit ? Number(limit)+5 : 10
        setLimit(newLimit+"", {shallow: false, scroll: false })
    }
    return (
        <button onClick={loadMore} className="border w-full lg:w-fit rounded-l-lg rounded-r-lg bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 px-4 py-2 text-sm font-medium text-gray-900 border-gray-200 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:focus:ring-blue-500 dark:focus:text-white">
            More
        </button>
    )
}
