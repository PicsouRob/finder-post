import React from 'react';
import { Link } from 'react-router-dom';

import { categories } from '../../Utils/data';

const SearchCategories = () => {
    return (
        <div class="relative max-w-7xl mx-auto px-6 md:px-8 pb-16 pt-10">
            <div class="flex items-center justify-between flex-wrap gap-y-4 pb-4">
                <div>
                    <h1 class="font-semibold text-xl sm:text-2xl md:text-2xl">
                        Recherche par catégories
                    </h1>
                    <p class="mt-2 text-base">Obtenez des inspirations à partir de plus de 1800 compétences</p>
                </div>
                <div class="flex items-center border border-gray-700 p-1.5 rounded-sm">
                    <Link to="/" class="hover:underline hover:text-gray-900"
                    >
                        Toutes catégories
                    </Link>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </div>
            <div class="py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 mx-auto">
                { categories.map(({ title, icon }, index) => (
                    <div class="flex items-center justify-center shado bg-[#0e1e2] border rounded-lg px-8 h-52 text-center group hover:bg-[#0e1e25] duration-300 transition-all ease-in" key={ index }>
                        <div class="grid place-items-center space-y-3">
                            <div class="w-16 h-16 rounded-full flex items-center justify-center bg-[#0e1e25] group-hover:bg-white">
                                { icon }
                            </div>
                            <p class="text-[15px] group-hover:text-white text-black">{ title }</p>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    );
}

export default SearchCategories;