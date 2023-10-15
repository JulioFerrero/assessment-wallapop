export interface Query {
    query: string | undefined
}
export interface SearchQuery {
    query: string
}
export interface KeyItem {
    keyItem: number
}

export interface Item {
    title: string,
    description: string,
    price: string,
    email: string,
    image: string,
    key: number
}

export interface Order {
    key: string,
    order: string
}

export interface ListInterface {
    items: [Item] | Item[]
    limit: string | undefined
}

export interface BaseButton {
    order?: string | undefined,
    id?: string | undefined,
    content: string,
    className: string,
    onClick: () => void
}
