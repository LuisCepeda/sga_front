import { Select, SelectItem } from "@nextui-org/react";
import { departments } from '@/constants/project'
import { useEffect, useState } from "react";
import { getInfoByDepartment } from "@/lib/actions/project-actions";


interface Municipality {
    "region": string,
    "c_digo_dane_del_departamento": string,
    "departamento": string,
    "c_digo_dane_del_municipio": string,
    "municipio": string,
}
interface SelectMunicipalityProps {
    onSelect: (value: any) => void;
    isDisabled: boolean;
    department: string | undefined;
    defaultSelect: string
}
export default function SelectMunicipality({ onSelect, isDisabled, department, defaultSelect }: SelectMunicipalityProps) {
    const [posibleMunicipality, setPosibleMunicipality] = useState<Municipality[]>()
    const [selectedMunicipality, setSelectedMunicipality] = useState<any>(defaultSelect)

    const handleChange = (value: object) => {
        setSelectedMunicipality(value)
        onSelect(value)
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await getInfoByDepartment(department)
            setPosibleMunicipality(data)
        }
        fetchData()
    }, [department])

    return (
        <>
            {
                posibleMunicipality
                    ?
                    <div className="flex w-full max-w-xs flex-col gap-2">
                        <Select
                            label="Municipio"
                            labelPlacement="outside"
                            variant="bordered"
                            placeholder="Seleccione el municipio"
                            isDisabled={isDisabled}
                            selectedKeys={[defaultSelect]}
                            className="max-w-xs"
                            size="md"
                            value={selectedMunicipality}
                            onChange={handleChange}
                        >
                            {
                                (!isDisabled)
                                    ? posibleMunicipality.map(municipality => (
                                        <SelectItem key={municipality.municipio} value={municipality.municipio} textValue={municipality.municipio}>
                                            {municipality.municipio}
                                        </SelectItem>
                                    ))

                                    : <SelectItem key="no-department" value="no-department" >Elija un departamento primero</SelectItem>
                            }
                        </Select>
                    </div>
                    : <p>cargando</p>
            }

        </>
    );


}