import { Select, SelectItem } from "@nextui-org/react";
import { propertyTypes } from '@/constants/project'
import { useState } from "react";


export default function SelectPropertyType({ onSelect, defaultSelect }) {
    const [selectedPropertyType, setSelectedPropertyType] = useState<any>(defaultSelect)

    const handleChange = (value: object) => {
        setSelectedPropertyType(value)
        onSelect(value)
    }

    return (
        <div className="flex w-full max-w-xs flex-col gap-2">
            <Select
                label="Tipo de propiedad"
                labelPlacement="outside"
                variant="bordered"
                placeholder="Seleccione el tipo de propiedad"
                selectedKeys={[defaultSelect]}
                size="md"
                className="max-w-xs"
                value={selectedPropertyType}
                onChange={handleChange}
            >
                {propertyTypes.map((propertyType) => (
                    <SelectItem key={propertyType} value={propertyType} textValue={propertyType}>
                        {propertyType}
                    </SelectItem>
                ))}
            </Select>
        </div>
    );


}