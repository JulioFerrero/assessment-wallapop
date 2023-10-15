import {Search} from "@/components/Search";
import {List} from "@/components/List";
import {Filter} from "@/components/Filter";
import Link from "next/link";
import {orderItems, searchItems} from "@/lib/items";


const Home = async ({searchParams}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
    let items: any[];
    const search =
        typeof searchParams.search === 'string' ? searchParams.search : undefined
    const order =
        typeof searchParams.order === 'string' ? searchParams.order : undefined
    const orderBy =
        typeof searchParams.orderBy === 'string' ? searchParams.orderBy : undefined
    const limit =
        typeof searchParams.limit === 'string' ? searchParams.limit : undefined
    if(search){
        items = await searchItems({query: search})
    } else {
        items = await searchItems({query: ""})
    }
    if(order && orderBy){
        items = items.sort(orderItems({key: orderBy, order}))
    }

    return (
        <main className="flex min-h-screen flex-col p-6 lg:p-24">
            <Search query={search}/>
            <div className="flex pt-10 place-content-between flex-wrap gap-8">
                <Filter/>
                <Link className=" w-full lg:w-fit" href={"/favorite"}>
                    <button className="border rounded-l-lg rounded-r-lg bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 px-4 py-2 text-sm font-medium text-gray-900 border-gray-200 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:focus:ring-blue-500 dark:focus:text-white  w-full lg:w-fit">
                        Favorites
                    </button>
                </Link>

            </div>
            <List items={items} limit={limit}/>
        </main>
    )
}
export default Home
