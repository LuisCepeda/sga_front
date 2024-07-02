import { Select, SelectItem } from "@nextui-org/react";
import { departments } from '@/constants/project'
import { useState } from "react";



export default function SelectDepartment({ onSelect, defaultSelect }) {
    const [selectedDepartment, setSelectedDepartment] = useState<any>(defaultSelect)

    const handleChange = (value: object) => {
        setSelectedDepartment(value)
        onSelect(value)
    }


    return (
        <>
            <div className="flex w-full max-w-xs flex-col gap-2">
                <Select
                    label="Departamento"
                    labelPlacement="outside"
                    variant="bordered"
                    placeholder="Seleccione el departamento"
                    selectedKeys={[defaultSelect]}
                    className="max-w-xs"
                    size="md"
                    value={selectedDepartment}
                    onChange={handleChange}
                >
                    {departments.map((department) => (
                        <SelectItem key={department} value={department} textValue={department}>
                            {department}
                        </SelectItem>
                    ))}
                </Select>
            </div>


        </>
    );


}