import {Modal} from "@/components/Modal";
import {Favorites} from "@/components/Favorites";
import {Search} from "@/components/Search";
import {searchItems} from "@/lib/items";

const FavoriteModalPage = async ({searchParams}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
    let items: any[];
    const search =
        typeof searchParams.search === 'string' ? searchParams.search : undefined
    const limit =
        typeof searchParams.limit === 'string' ? searchParams.limit : undefined
    if(search){
        items = await searchItems({ query: search })
    } else {
        items = await searchItems({query: ""})
    }

    return (
        <Modal>
            <main className="flex flex-col">
                <Search query={search}/>
                <Favorites items={items} limit={limit}/>
            </main>
        </Modal>
    );
};

export default FavoriteModalPage;
