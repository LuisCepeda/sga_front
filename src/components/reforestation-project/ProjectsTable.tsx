import { useProjectData } from "@/context/projectContext";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/table";
import { Button, Chip, Tooltip, User, getKeyValue } from "@nextui-org/react";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PreviewIcon from '@mui/icons-material/Preview';
import React from "react";
import Link from "next/link";
import { deleteProject } from "@/lib/actions/project-actions";


const statusColorMap = {
    active: "success",
    paused: "danger",
    vacation: "warning",
};


export default function ProjectsTable() {
    const { projects } = useProjectData()
    console.log(projects)
    const columns = [
        {
            key: "project",
            label: "Nombre"
        },
        {
            key: "status",
            label: "Estado"
        },
        {
            key: "createdAt",
            label: "Creado en"
        },
        {
            key: "updatedAt",
            label: "Actualizado en"
        },
        {
            key: "actions",
            label: "Acciones",
        },
    ]




    return (
        <>
            <Table aria-label="Tabla de proyectos">
                <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>

                {
                    projects ?
                        <TableBody items={projects}>
                            {projects.map((item) => (
                                <TableRow key={item._id}>
                                    <TableCell>{item.project.name}</TableCell>
                                    <TableCell>{item.status}</TableCell>
                                    <TableCell>{item.createdAt}</TableCell>
                                    <TableCell>{item.updatedAt}</TableCell>
                                    <TableCell>
                                        <div className="relative flex items-center gap-2">
                                            <Tooltip content="Detalles">
                                                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                                    <PreviewIcon />
                                                </span>
                                            </Tooltip>
                                            <Tooltip content="Editar proyecto">
                                                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                                    <Link href={`/dashboard/projects/edit/${item._id}`} >
                                                        <EditIcon />
                                                    </Link>
                                                </span>
                                            </Tooltip>
                                            <Tooltip color="danger" content="Eliminar proyecto">
                                                <span className="text-lg text-danger cursor-pointer active:opacity-50"
                                                    onClick={async () => {

                                                        const res = await deleteProject(item._id!);

                                                    }}>
                                                    <DeleteIcon />
                                                </span>
                                            </Tooltip>
                                        </div></TableCell>
                                </TableRow>
                            ))

                            }
                        </TableBody>
                        : <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
                }
            </Table>
        </>
    )
}
