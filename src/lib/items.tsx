import {Item, Order, SearchQuery} from "@/lib/types";

export async function searchItems({query} : SearchQuery) {
    const items = await getItems()
    return items.filter((item: Item) => Object.values(item).some(value =>
        typeof value === 'string' ? value.toLowerCase().includes(query.toLowerCase()) : String(value) === query
    ));
}

export async function getItems() {
    const fetchItems = await fetch("https://frontend-tech-test-data.s3-eu-west-1.amazonaws.com/items.json", {cache: "no-cache"});
    if (!fetchItems.ok) {
        throw new Error('Failed to fetch data')
    }
    const {items} = await fetchItems.json();
    return items.map((item: Item, index: number) => {
        return {...item, price: parseInt(item.price), key: index}
    })
}

export function orderItems({key, order}: Order) {
    return function innerSort(a: any, b: any) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
            // property doesn't exist on either object
            return 0;
        }

        const varA = (typeof a[key] === 'string')
            ? a[key].toUpperCase() : a[key];
        const varB = (typeof b[key] === 'string')
            ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
            comparison = 1;
        } else if (varA < varB) {
            comparison = -1;
        }
        return (
            (order === 'desc') ? (comparison * -1) : comparison
        );
    };
}
