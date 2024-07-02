export interface Project {
    name: string;
    resolution: string;
}

export interface Location {
    longitude_degrees: number;
    latitude_degrees: number;
    municipality: string;
    village: string;
    department: string;
}

export interface TreeSpecies {
    id?: number,
    commonName: string;
    scientificName: string;
    quantity: number;
}

export interface ReforestationProject {
    _id?: string;
    project: Project;
    location: Location;
    propertyType: string;
    treeSpecies?: TreeSpecies[];
    designatedPlantingAreaInMeters: number;
    status: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
}

export type bodyCluster = {
    data: Coordinate[];
    eps: number;
    min_samples: number;
}

type projectStatus = 'Completado' | 'Activo' | 'Planeado' | 'Pausado';

export interface ProjectsSummary {
    finishedProjects?: number
    activeProjects?: number
    plannedProjects?: number
    pausedProjects?: number
    numberOfSpecies?: number
}
