import { TreeSpecies } from "@/types/project";
import TreeSpecie from "./TreeSpecie";
import { Button } from "@nextui-org/react";

interface Props {
    treeSpeciesList: any
    addTree: any
    removeTree: any
    updateTree: any
}

export default function TreeList({ treeSpeciesList, addTree, removeTree, updateTree }: Props) {


    return (

        <>
            <div className='flex flex-row items-center pr-2'>
                <div className='grid grid-cols-1'>
                    {
                        treeSpeciesList.map((tree: TreeSpecies) => (
                            <TreeSpecie
                                key={tree.id}
                                id={tree.id}
                                treeSpecie={tree}
                                onDeleteClick={removeTree}
                                updateTree={updateTree}
                            />
                        ))
                    }
                </div>
            </div>
            <div className='flex flex-col items-center pt-4'>
                <Button color='secondary' type="button" onClick={addTree}>Añadir especie</Button>

            </div>
        </>
    )
}