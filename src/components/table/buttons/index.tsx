'use client'

import { Eye, File, FileEdit, Trash } from "lucide-react";
import Link from "next/link";

export function VisualizarButton({id} : {id:number}) {
    return(
        <Link href={`/admin/gerenciamento/visualizar/${id}`}>
            <button className="text-texto hover:underline cursor-pointer">
                <Eye />
            </button>
        </Link>
    )
}

export function EditarButton({id} : {id:number}) {
    return(
        <Link href={`/admin/gerenciamento/editar/${id}`}>
            <button className="text-texto hover:underline cursor-pointer">
                <FileEdit />
            </button>
        </Link>
    )
}

export function DeletarButton({id} : {id:number}) {
    return(
            <button className="text-texto hover:underline cursor-pointer">
                <Trash />
            </button>
    )
}