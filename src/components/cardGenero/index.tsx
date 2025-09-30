'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

export default function CardGenero() {
    const [selecionado, setSelecionado] = useState<number | null>(null);
    
    const generos = [
        { id: 1, nome: 'KPOP', cor: 'bg-kpop' },
        { id: 2, nome: 'POP', cor: 'bg-pop' },
        { id: 3, nome: 'ROCK', cor: 'bg-rock' },
        { id: 4, nome: 'JAZZ', cor: 'bg-jazz' },
        { id: 5, nome: 'CLÁSSICA', cor: 'bg-classica' },
        { id: 6, nome: 'MPB', cor: 'bg-mpb' }
    ];

    const handleSelecionar = (id: number) => {
        setSelecionado(selecionado === id ? null : id);
    };
    
    return(
        <div className="bg-white w-full flex flex-col items-center justify-center p-4"> 
            <h1 className="text-2xl md:text-md text-icones font-semibold font-montserrat p-2">
               GÊNERO MUSICAL
            </h1>
            <div className="space-y-3 w-full max-w-md"> 
                {generos.map((genero) => (
                    <div key={genero.id} className="flex flex-row gap-3 items-center">
                        <button
                            onClick={() => handleSelecionar(genero.id)}
                            className={`flex items-center justify-center w-6 h-6 border-2 transition-all duration-200 ${
                                selecionado === genero.id 
                                    ? 'bg-white border-texto text-texto' 
                                    : 'bg-fundo border-texto text-transparent'
                            }`}
                        >
                            {selecionado === genero.id && <Check className="w-6 h-6" />}
                        </button>
                        <div className={`${genero.cor} rounded-lg px-6 py-3 min-w-[120px] text-center flex justify-center text-white font-bold`}>
                            {genero.nome}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}