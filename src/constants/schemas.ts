import * as z from 'zod';

export const formSchema = z.object({
    projectName: z.string({ message: ' El nombre del proyecto es requerido' }).min(6, { message: ' El nombre del proyecto debe ser de al menos 6 caracteres' }),
    resolution: z.string().min(4, { message: 'Debe ingresar una resolución.' }).optional(),
    latitude: z.number({ message: 'El valor de la latitud debe ser un numero' }).min(-90, { message: ' El valor debe ser mínimo -90' }).max(90, { message: ' El valor debe ser máximo 90' }),
    longitude: z.number({ message: 'El valor de la longitud debe ser un numero' }).min(-180, { message: ' El valor debe ser mínimo -180' }).max(180, { message: ' El valor debe ser máximo 180' }),
    village: z.string(),
    plantingArea: z.number({ message: "El area proyectada es requerida" }).min(0, { message: 'Required' })
})


export const loginSchema = z.object({
    email: z.string().email({ message: 'Ingrese un correo valido' }),
    password: z.string().min(1, { message: 'Ingrese la contraseña' })
})