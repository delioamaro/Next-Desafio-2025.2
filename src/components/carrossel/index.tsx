'use client'

import { useState } from "react";
import Title from "../title";
import CarroselCard from "./card";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Carrosel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const totalSlides = 3;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };
    
    return(
        <div>
            <div className="w-full space-y-12 py-6">
                <Title title="" subtitle="ÁLBUNS RECENTES"/>
            </div>
            <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
                <div className="flex transition-transform duration-300 ease-in-out" style={{transform: `translateX(-${currentSlide *100}%)`}}>
                    <div className="w-full flex-shrink-0 px-4">
                        <div className="max-w-sm mx-auto">
                            <CarroselCard />
                        </div>
                    </div>
                    <div className="w-full flex-shrink-0 px-4">
                        <div className="max-w-sm mx-auto">
                            <CarroselCard />
                        </div>
                    </div>
                    <div className="w-full flex-shrink-0 px-4">
                        <div className="max-w-sm mx-auto">
                            <CarroselCard />
                        </div>
                    </div>
                </div>
                <button 
                onClick={prevSlide}
                className="absolute left-30 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-lg transition-all z-10 cursor-pointer hidden bp-840:block"
                >
                    <ChevronLeft className="w-10 h-10 text-texto"/>
                </button>
                <button 
                onClick={nextSlide}
                className="absolute right-30 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-lg transition-all z-10 cursor-pointer hidden bp-840:block"
                >
                    <ChevronRight className="w-10 h-10 text-texto"/>
                </button>
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    {Array.from({length: totalSlides}).map((_, index) => (
                        <button 
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-6 h-6 rounded-full transition-all cursor-pointer ${index === currentSlide ? 'bg-icones' : 'bg-dashboard'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}