import { Card, CardHeader, CardBody } from "@nextui-org/react";

import { getProjectsStatusSummary, getTreesSummary } from '@/lib/actions/project-actions';

import { Sprout, Trees } from 'lucide-react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { ProjectsSummary } from '@/types/project';

export default async function CardsGroup() {
  const summary = await getProjectsStatusSummary()
  const trees = await getTreesSummary()

  const projectsSummary: ProjectsSummary = { ...summary, numberOfSpecies: trees?.size }

  return (
    <>
      {
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {
            (!projectsSummary || Object.keys(projectsSummary).length === 0)
              ? <>
                <p className="mt-4 text-gray-400">No data available.</p>
              </>
              : <>
                <Card className="w-[200px] mx-auto flex flex-col items-center justify-center ">
                  <CardHeader className="flex gap-3 justify-center">
                    <p className='text-xl text-center '>{projectsSummary.finishedProjects} </p>
                    <CheckCircleIcon />
                  </CardHeader>
                  <CardBody className="text-center">
                    <p className='text-md'>Proyectos finalizados</p>
                  </CardBody>
                </Card>

                <Card className="w-[200px] mx-auto flex flex-col items-center justify-center ">
                  <CardHeader className="flex gap-3 justify-center">
                    <p className='text-xl text-center '>{projectsSummary.activeProjects} </p>
                    <TrendingUpIcon />
                  </CardHeader>
                  <CardBody className="text-center">
                    <p className='text-md'>Proyectos activos</p>
                  </CardBody>
                </Card>

                <Card className="w-[200px] mx-auto flex flex-col items-center justify-center ">
                  <CardHeader className="flex gap-3 justify-center">
                    <p className='text-xl text-center '>{projectsSummary.plannedProjects} </p>
                    <Sprout />
                  </CardHeader>
                  <CardBody className="text-center">
                    <p className='text-md'>Proyectos planeados</p>
                  </CardBody>
                </Card>

                <Card className="w-[200px] mx-auto flex flex-col items-center justify-center ">
                  <CardHeader className="flex gap-3 justify-center">
                    <p className='text-xl text-center '>{projectsSummary.numberOfSpecies} </p>
                    <Trees />
                  </CardHeader>
                  <CardBody className="text-center">
                    <p className='text-md'>Especies plantadas</p>
                  </CardBody>
                </Card>
              </>
          }
        </div>
      }
    </>
  )
}
