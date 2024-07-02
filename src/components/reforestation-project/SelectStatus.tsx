import { Select, SelectItem } from "@nextui-org/react";
import { projectStatus } from '@/constants/project'
import { useState } from "react";


export default function SelectStatus({ onSelect, defaultSelect }) {
    const [selectedProjectStatus, setSelectedProjectStatus] = useState<any>(defaultSelect)

    const handleChange = (value: object) => {
        setSelectedProjectStatus(value)
        onSelect(value)
    }

    return (
        <div className="flex w-full max-w-xs flex-col gap-2">
            <Select
                label="Estado del proyecto"
                labelPlacement="outside"
                variant="bordered"
                placeholder="Seleccione el estado del proyecto"
                selectedKeys={[defaultSelect]}
                size="md"
                className="max-w-xs"
                value={selectedProjectStatus}
                onChange={handleChange}
            >
                {projectStatus.map((status) => (
                    <SelectItem key={status} value={status} textValue={status}>
                        {status}
                    </SelectItem>
                ))}
            </Select>
        </div>
    );


}