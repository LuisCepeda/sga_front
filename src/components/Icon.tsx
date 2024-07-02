
import L from 'leaflet'
delete (L.Icon.Default.prototype as any)._getIconUrl

export const Icon = L.icon({
    iconUrl: require('../assets/brote.svg'),
    iconRetinaUrl: require('../assets/brote.svg'),
    iconAnchor: undefined,
    shadowUrl: undefined,
    shadowSize: undefined,
    shadowAnchor: undefined,
    iconSize: [35, 35],
    className: "leaflet-venue-icon"

})

export const ChevronDown = ({ fill, size, height, width, ...props }) => {
    return (
        <svg
            fill="none"
            height={size || height || 24}
            viewBox="0 0 24 24"
            width={size || width || 24}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
        </svg>
    );
};
