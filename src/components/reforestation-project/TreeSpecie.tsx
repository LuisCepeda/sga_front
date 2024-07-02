import { TreeSpecies } from "@/types/project";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

interface Props {
    id: number | undefined
    onDeleteClick: any
    treeSpecie?: TreeSpecies
}

export default function TreeSpecie({ id, onDeleteClick, treeSpecie, updateTree }: Props) {
    const [commonName, setCommonName] = useState<string>(treeSpecie!.commonName)
    const [scientificName, setScientificName] = useState<string>(treeSpecie!.scientificName)
    const [quantity, setQuantity] = useState<number>(treeSpecie!.quantity)

    const handleDeleteClick = () => {
        onDeleteClick(id)
    }
    const handleSpeciesChange = (field: string, value: string | number) => {
        if (field === "scientificName") setScientificName(value.toString())
        if (field === "commonName") setCommonName(value.toString())
        if (field === "quantity") setQuantity(parseInt(value))

        updateTree(id, field, value);

    };
    return (
        <>
            <div className="flex flex-row justify-between items-center gap-1 pt-0">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    <div className="space-y-2 pt-2">
                        <Input
                            id={`scientific-name-${id}`}
                            placeholder="Enter scientific name"
                            isClearable
                            radius="sm"
                            onChange={(e) => handleSpeciesChange('scientificName', e.target.value)}
                            value={scientificName}
                        ></Input>
                    </div>
                    <div className="space-y-2 pt-2">
                        <Input
                            id={`common-name-${id}`}
                            placeholder="Enter common name"
                            isClearable
                            radius="sm"
                            onChange={(e) => handleSpeciesChange('commonName', e.target.value)}
                            value={commonName}
                        ></Input>
                    </div>
                    <div className="space-y-2 pt-2">
                        <Input
                            id={`quantity-${id}`}
                            placeholder="Enter quantity"
                            isClearable
                            radius="sm"
                            type="number"
                            onValueChange={(e) => handleSpeciesChange('quantity', e)}
                            value={quantity.toString()}
                        ></Input>

                    </div>
                </div >
                <div className="grid grid-cols-1 gap-2">
                    <div className="space-y-2 pt-2">
                        <Button type="button" color="danger" onClick={handleDeleteClick}>
                            Borrar
                        </Button>
                    </div>
                </div >
            </div>
        </>
    )

}