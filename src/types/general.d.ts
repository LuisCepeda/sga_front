type HttpMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';


type Coordinate = [number, number];

type NavigationLink = {
    name: string
    href: string
    icon?: any
    iconComponent?: any
}