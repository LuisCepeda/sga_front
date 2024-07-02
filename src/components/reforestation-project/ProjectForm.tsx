'use client'

import { ReforestationProject, TreeSpecies } from "@/types/project"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from 'react-hook-form'

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Checkbox, Input } from "@nextui-org/react"

import SelectStatus from "./SelectStatus"
import SelectDepartment from "./SelectDepartment"
import SelectMunicipality from "./SelectMunicipality"
import SelectPropertyType from "./SelectPropertyType"
import TreeList from "./TreeList"

import { createProject, updateProject } from "@/lib/actions/project-actions"

import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema } from "@/constants/schemas"


interface Props {
    existingProject?: ReforestationProject
}
export default function ProjectForm({ existingProject }: Props) {
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(formSchema) })
    const router = useRouter()

    const [projectName, setProjectName] = useState(existingProject ? existingProject?.project.name : "")
    const [resolution, setResolution] = useState(existingProject ? existingProject?.project.resolution : "")
    const [plantingArea, setPlantingArea] = useState<number>(existingProject ? existingProject.designatedPlantingAreaInMeters : 0)
    const [isResolutionEnabled, setIsResolutionEnabled] = useState(existingProject?.project.resolution ? true : false);
    const [selectedProjectStatus, setSelectedProjectStatus] = useState<string>(existingProject ? existingProject.status : "")
    const [selectedDepartment, setSelectedDepartment] = useState<string>(existingProject ? existingProject.location.department : "")
    const [selectedMunicipality, setSelectedMunicipality] = useState<string>(existingProject ? existingProject.location.municipality : "")
    const [village, setVillage] = useState<string>(existingProject ? existingProject.location.village : "")
    const [selectedPropertyType, setSelectedPropertyType] = useState<string>(existingProject ? existingProject.propertyType : "")
    const [lat, setLat] = useState(existingProject ? existingProject.location.latitude_degrees : 0)
    const [lng, setLng] = useState(existingProject ? existingProject.location.longitude_degrees : 0)
    const [treeSpecies, setTreeSpecies] = useState<TreeSpecies[]>(existingProject ? existingProject.treeSpecies!.map((item, index) => ({
        id: index + 1,
        ...item
    })) : [
        {
            id: 1,
            commonName: "",
            scientificName: "",
            quantity: 0,
        },
    ]);



    const addTreeSpecies = () => {
        const newId = treeSpecies.length ? treeSpecies[treeSpecies.length - 1].id! + 1 : 1;
        setTreeSpecies([
            ...treeSpecies,
            {
                id: newId,
                commonName: "",
                scientificName: "",
                quantity: 0,
            },
        ]);
    };

    const removeTreeSpecies = (id: number) => {
        const filteredTreeSpecies = treeSpecies.filter(tree => tree.id !== id)
        setTreeSpecies(filteredTreeSpecies)
    }

    const handleTreeChange = (treeId: number, field: string, value: string) => {
        const updatedTasks = treeSpecies.map(tree => {
            if (tree.id === treeId) {
                return { ...tree, [field]: value };
            }
            return tree;
        });
        setTreeSpecies(updatedTasks);
    };

    const handleProjectStatusSelectChange = (value: any) => {
        setSelectedProjectStatus(value.target.value)
    }

    const handleDepartmentSelectChange = (value: any) => {
        setSelectedDepartment(value.target.value)
    }
    const handleMunicipalitySelectChange = (value: any) => {
        setSelectedMunicipality(value.target.value)
    }
    const handlePropertyTypeSelectChange = (value: any) => {
        setSelectedPropertyType(value.target.value)
    }


    const handleCheckboxChange = () => {
        setIsResolutionEnabled(!isResolutionEnabled);
    };


    const onSubmit = handleSubmit(async (data) => {
        const projectData = {
            ...data,
            resolution: isResolutionEnabled ? data.resolution : '',
            selectedDepartment,
            selectedMunicipality,
            selectedProjectStatus,
            selectedPropertyType,
            treeSpecies
        }

        try {
            const response = existingProject
                ? await updateProject(existingProject._id, projectData)
                : await createProject(projectData)

            if (response) {
                router.push('/dashboard')
            }
        } catch (error) {
            console.log('error', error)
        }
    })


    return (
        <>
            <form className="grid gap-6" onSubmit={onSubmit}>
                <Card className="max-w-[900px]">
                    <CardHeader className="flex gap-3">
                        <CardTitle>Proyecto de reforestación{projectName ? `:${projectName}` : ""}</CardTitle>
                        <CardDescription>Rellena los detalles acerca de un nuevo proyecto.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 md:items-end">
                            <div className="space-y-2 pt-3">
                                <Input
                                    id="project-name"
                                    label="Nombre del proyecto"
                                    labelPlacement="outside"
                                    placeholder="Ingrese el nombre del proyecto"
                                    value={projectName}
                                    onValueChange={(e) => setProjectName(e)}
                                    {...register("projectName")}
                                    isClearable
                                    isRequired
                                    aria-invalid={errors.projectName ? "true" : "false"}
                                    isInvalid={errors?.projectName ? true : false}
                                    errorMessage={errors?.projectName?.message?.toString()}
                                />
                            </div>
                            <div className="space-y-2 pt-3">
                                <Checkbox
                                    size="sm"
                                    isSelected={existingProject?.project.resolution ? true : false}
                                    onChange={handleCheckboxChange} >
                                    ¿Cuenta con resolución?
                                </Checkbox>
                                <Input
                                    id="resolution"
                                    placeholder="Ingrese la resolución"
                                    isDisabled={!isResolutionEnabled}
                                    value={resolution}
                                    onValueChange={(e) => setResolution(e)}
                                    {...register('resolution')}
                                    isClearable
                                    aria-invalid={errors.resolution ? "true" : "false"}
                                    isInvalid={errors?.resolution ? true : false}
                                    errorMessage={errors?.resolution?.message?.toString()}
                                />

                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 pt-3">
                            <div className="space-y-2 pt-3">
                                <Input
                                    id="planting-area"
                                    label="Area proyectada(m²)"
                                    labelPlacement="outside"
                                    placeholder="Ingrese el area proyectada"
                                    value={plantingArea.toString()}
                                    onValueChange={(e) => setPlantingArea(parseFloat(e !== '' ? e : "0"))}
                                    {...register('plantingArea', { valueAsNumber: true })}
                                    isClearable
                                    isRequired
                                    aria-invalid={errors.plantingArea ? "true" : "false"}
                                    isInvalid={errors?.plantingArea ? true : false}
                                    errorMessage={errors?.plantingArea?.message?.toString()}
                                />
                            </div>
                            <div className="space-y-2 pt-3">
                                <SelectStatus onSelect={handleProjectStatusSelectChange} defaultSelect={selectedProjectStatus} />
                            </div>
                            <div className="space-y-2 pt-3">
                                <SelectPropertyType onSelect={handlePropertyTypeSelectChange} defaultSelect={selectedPropertyType} />
                            </div>

                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3">
                            <div className="space-y-2 pt-3">
                                <SelectDepartment onSelect={handleDepartmentSelectChange} defaultSelect={selectedDepartment} />

                            </div>
                            <div className="space-y-2 pt-3">
                                <SelectMunicipality onSelect={handleMunicipalitySelectChange} isDisabled={selectedDepartment ? false : true} department={selectedDepartment} defaultSelect={selectedMunicipality}></SelectMunicipality>
                            </div>
                            <div className="space-y-2 pt-3">
                                <Input
                                    id="village"
                                    label="Vereda"
                                    labelPlacement="outside"
                                    placeholder="Ingrese la vereda"
                                    value={village}
                                    onValueChange={(e) => setVillage(e)}
                                    {...register('village')}
                                    isClearable
                                    aria-invalid={errors.village ? "true" : "false"}
                                    isInvalid={errors?.village ? true : false}
                                    errorMessage={errors?.village?.message?.toString()}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3">
                            <div className="space-y-2 pt-3">
                                <Input
                                    id="latitude"
                                    label="Latitud"
                                    labelPlacement="outside"
                                    placeholder="Ingrese el latitud de la ubicación"
                                    value={lat.toString()}
                                    onValueChange={(e) => setLat(parseFloat(e !== '' ? e : "0"))}
                                    {...register('latitude', { valueAsNumber: true })}
                                    isClearable
                                    isRequired
                                    aria-invalid={errors.latitude ? "true" : "false"}
                                    isInvalid={errors?.latitude ? true : false}
                                    errorMessage={errors?.latitude?.message?.toString()}
                                />
                            </div>
                            <div className="space-y-2 pt-3">
                                <Input
                                    id="longitude"
                                    label="Longitud"
                                    labelPlacement="outside"
                                    placeholder="Ingrese el longitud de la ubicación"
                                    value={lng.toString()}
                                    onValueChange={(e) => setLng(parseFloat(e !== '' ? e : "0"))}
                                    {...register('longitude', { valueAsNumber: true })}
                                    isClearable
                                    isRequired
                                    aria-invalid={errors.longitude ? "true" : "false"}
                                    isInvalid={errors?.longitude ? true : false}
                                    errorMessage={errors?.longitude?.message?.toString()}
                                />
                            </div>
                        </div>
                        <div >

                            <TreeList treeSpeciesList={treeSpecies} addTree={addTreeSpecies} removeTree={removeTreeSpecies} updateTree={handleTreeChange} />
                        </div>

                    </CardContent>
                    <CardFooter>

                        <Button type="button" className="ml-auto" onClick={() => { router.back() }}>
                            Volver
                        </Button>
                        <Button type="submit" className="ml-auto">
                            {existingProject ? "Editar Proyecto" : "Crear proyecto"}
                        </Button>
                    </CardFooter>
                </Card >
            </form>

        </>
    )
}