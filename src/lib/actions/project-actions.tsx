'use server'

import { makeHttpRequest } from "@/lib/utils"
import { Location, Project, bodyCluster } from "@/types/project"
import { ReforestationProject } from '../../types/project'
import { departments } from "@/constants/project"
export async function getReforestationProjects() {
    try {
        const res = await makeHttpRequest({ url: `${process.env.NEXT_PUBLIC_REFORESTATION_PROJECTS_API}`, method: 'GET' })
        if (res.Status.code === 200) return res.Data
    } catch (error) {
        console.error('fetching error:', error);
        throw new Error('Failed to fetch projects data.');
    }
}

export async function getReforestationProjectById(id: string) {
    try {
        const res = await makeHttpRequest({ url: `${process.env.NEXT_PUBLIC_REFORESTATION_PROJECTS_API}/${id}`, method: 'GET' })
        if (res.Status.code === 200) return res.Data
    } catch (error) {
        console.error('fetching error:', error);
        throw new Error('Failed to fetch project data.');
    }
}

export async function getProjectsStatusSummary() {
    try {
        const finishedProjectsResponse = await makeHttpRequest({ url: `${process.env.NEXT_PUBLIC_REFORESTATION_PROJECTS_API}?status=Completado`, method: 'GET' })
        const activeProjectsResponse = await makeHttpRequest({ url: `${process.env.NEXT_PUBLIC_REFORESTATION_PROJECTS_API}?status=Activo`, method: 'GET' })
        const plannedProjectsResponse = await makeHttpRequest({ url: `${process.env.NEXT_PUBLIC_REFORESTATION_PROJECTS_API}?status=Planeado`, method: 'GET' })
        //const pausedProjectsResponse = await makeHttpRequest({url:`${process.env.NEXT_PUBLIC_REFORESTATION_PROJECTS_API }?status=Pausado`, method:'GET'})

        const finishedProjects = finishedProjectsResponse.Data?.length
        const activeProjects = activeProjectsResponse.Data?.length
        const plannedProjects = plannedProjectsResponse.Data?.length
        //const pausedProjects = pausedProjectsResponse.Data?.length

        return { finishedProjects, activeProjects, plannedProjects, }//pausedProjects }
    } catch (error) {
        console.error('Error fetching project data for status summary', error)
    }
}

export async function getTreesSummary() {
    try {
        const projectsData = await getReforestationProjects()
        const trees = projectsData.flatMap((project: ReforestationProject) => project.treeSpecies!.map(especie => especie.scientificName));
        const uniqueTrees = new Set(trees)
        return uniqueTrees
    } catch (error) {
        console.error('Error fetching project data for tree information.')
    }
}


export async function getClusters(body: bodyCluster): Promise<number[] | undefined> {

    try {
        const res = await makeHttpRequest({ url: `http://localhost:3000/api/clusters`, method: 'POST', body })
        return res?.clusters
    } catch (error) {
        console.error('Error fetching clusters:', error)
        return undefined
    }
}

export async function getInfoByDepartment(department: string) {
    try {
        const res = await makeHttpRequest({ url: `http://localhost:3000/api/info-geo-distribution?department=${department}`, method: 'GET' })
        return res
    } catch (error) {
        console.error('Error fetching departments data.')
    }
}




export async function createProject(data) {
    try {
        const { projectName,
            resolution,
            latitude,
            longitude,
            village,
            plantingArea,
            selectedDepartment,
            selectedMunicipality,
            selectedProjectStatus,
            selectedPropertyType,
            treeSpecies
        } = data

        const project: Project = {
            name: projectName,
            resolution
        }

        const location: Location = {
            latitude_degrees: latitude,
            longitude_degrees: longitude,
            department: selectedDepartment,
            municipality: selectedMunicipality,
            village,
        }

        const treeSpeciesList = treeSpecies.map(({ id, quantity, ...rest }) => ({
            ...rest,
            quantity: parseInt(quantity)
        }))

        const projectBody: ReforestationProject = {
            project,
            location,
            designatedPlantingAreaInMeters: plantingArea,
            status: selectedProjectStatus,
            propertyType: selectedPropertyType,
            treeSpecies: treeSpeciesList
        }


        const newProjectResponse = await makeHttpRequest({ url: `${process.env.NEXT_PUBLIC_REFORESTATION_PROJECTS_API}`, method: 'POST', body: projectBody })

        if (newProjectResponse.Status.code !== 201) throw new Error('Error al crear el proyecto')
        return newProjectResponse.Data
    } catch (error) {
        console.error('Error POSTing a project')
    }
}


export async function updateProject(projectId, data) {
    try {
        const { projectName,
            resolution,
            latitude,
            longitude,
            village,
            plantingArea,
            selectedDepartment,
            selectedMunicipality,
            selectedProjectStatus,
            selectedPropertyType,
            treeSpecies
        } = data

        const project: Project = {
            name: projectName,
            resolution
        }

        const location: Location = {
            latitude_degrees: latitude,
            longitude_degrees: longitude,
            department: selectedDepartment,
            municipality: selectedMunicipality,
            village,
        }

        const treeSpeciesList = treeSpecies.map(({ id, quantity, ...rest }) => ({
            ...rest,
            quantity: parseInt(quantity)
        }))

        const projectBody: ReforestationProject = {
            project,
            location,
            designatedPlantingAreaInMeters: plantingArea,
            status: selectedProjectStatus,
            propertyType: selectedPropertyType,
            treeSpecies: treeSpeciesList
        }


        const newProjectResponse = await makeHttpRequest({ url: `${process.env.NEXT_PUBLIC_REFORESTATION_PROJECTS_API}/${projectId}`, method: 'PATCH', body: projectBody })
        console.log('newProjectResponse.Status.Code', newProjectResponse.Status.code)
        if (newProjectResponse.Status.code !== 200) throw new Error('Error al editar el proyecto')

        return newProjectResponse.Data
    } catch (error) {
        console.error('Error PATCHing a project')
    }
}

export async function deleteProject(projectId: string) {

    try {
        const response = await makeHttpRequest({ url: `${process.env.NEXT_PUBLIC_REFORESTATION_PROJECTS_API}/${projectId.toString()}`, method: 'DELETE' })
        console.log('response', response)
        return true
    } catch (error) {
        console.error('Error DELETing a project')
    }
}