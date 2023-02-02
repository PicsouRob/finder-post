import React from 'react';

function ContentInfo() {
    const data = [
        "Connectez-vous à des pigistes ayant une expérience commerciale éprouvée",    
        "Faites-vous associer au talent parfait par un responsable de la réussite client",    
        "Qualité inégalée des emplois à distance, hybrides et flexibles",    
    ];
    
    return (
        <div class="bg-[#3e7a68] text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="relative">
                    <img src="/images/h12.png" alt="h12" className="" />
                    <img src="/images/h13.png" alt="h13" className="absolute top-0" />
                    <img src="/images/h14.png" alt="h14" className="absolute -bottom-5" />
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                    <div class="">
                        <h1 class="font-semibold text-xl sm:text-2xl md:text-3xl">
                        Rejoignez la meilleure place de marché au monde pour les travailleurs
                        </h1>
                        <p class="mt-3 text-base text-white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. </p>
                    </div>
                    <div className="space-y-5">
                        { data.map((item, ind) => (
                            <div className="flex items-start gap-x-6">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                                <p className="text-white">{ item }</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-5">
                        <button class="bg-principal px-4 py-3 rounded-lg hover:text-black hover:bg-white flex items-center gap-3">
                            <span className="">Trouver des talents</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentInfo;