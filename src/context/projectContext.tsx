'use client'
import { getClusters, getProjectsStatusSummary, getReforestationProjects, getTreesSummary } from '@/lib/actions/project-actions';
import { calculateCoordinatesCenter } from '@/lib/utils';
import { ProjectsSummary, ReforestationProject } from '@/types/project';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ProjectDataContextType {
    projects: ReforestationProject[]
    clusters?: number[] | undefined
    coordsCenter: Coordinate | undefined
    projectsSummary?: ProjectsSummary
    isLoading: boolean
}

interface ProjectDataProviderProps {
    children: ReactNode;
}



const ProjectDataContext = createContext<ProjectDataContextType | undefined>(undefined);



export function useProjectData() {
    const context = useContext(ProjectDataContext)
    if (context === undefined) {
        throw new Error('useProjectData debe usarse dentro de un ProjectDataProvider')
    }
    return context
};


export function ProjectDataProvider({ children }: ProjectDataProviderProps) {
    const [projects, setProjects] = useState<ReforestationProject[]>([])
    // const [clusters, setClusters] = useState<number[]>()
    const [isLoading, setIsLoading] = useState(true)
    const [coordsCenter, setCoordsCenter] = useState<Coordinate | undefined>([5.141663, -73.591070])
    const [projectsSummary, setProjectsSummary] = useState<ProjectsSummary>({
        finishedProjects: 0,
        activeProjects: 0,
        plannedProjects: 0,
        pausedProjects: 0,
        numberOfSpecies: 0.
    })
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const projects = await getReforestationProjects()
                const summary = await getProjectsStatusSummary()
                const trees = await getTreesSummary()

                setProjects(projects)
                setProjectsSummary({ ...summary, numberOfSpecies: trees?.size })

            } catch (error) {
                console.log('error fetching projects', error)
            }
        }
        fetchProjects()

    }, [])

    useEffect(() => {
        // const fetchClusters = async (coords: Coordinate[]) => {
        //     try {
        //         const clusterResponse = await getClusters({
        //             data: coords,
        //             eps: 0.1,
        //             min_samples: 2
        //         })
        //         setClusters(clusterResponse)
        //     } catch (error) {
        //         console.log('error fetching clusters', error)
        //     }
        // }
        const coords: Coordinate[] = projects.map(project => ([
            project.location.latitude_degrees, project.location.longitude_degrees
        ]
        ))

        // fetchClusters(coords)
        setCoordsCenter(calculateCoordinatesCenter(coords))
        setIsLoading(false);


    }, [projects])

    return (
        <>
            <ProjectDataContext.Provider value={{
                projects,
                // clusters,
                coordsCenter,
                projectsSummary,
                isLoading
            }} >
                {children}
            </ProjectDataContext.Provider>
        </>
    );
};
