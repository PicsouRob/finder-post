import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../../Utils/blogData';

function Blog() {
    return (
        <div class="relative max-w-7xl mx-auto px-6 md:px-8 py-16 space-y-8">
            <div className="">
                <div class="flex items-center justify-between flex-wrap gap-y-4 pb-4">
                    <div>
                        <h1 class="font-semibold text-xl sm:text-2xl md:text-2xl">
                            Notre Blog
                        </h1>
                        <p class="mt-2 text-base">Voyez comment vous pouvez améliorer votre statut de carrière</p>
                    </div>
                    <div class="flex items-center border border-gray-700 p-1.5 rounded-sm">
                        <Link to="/" class="hover:underline hover:text-gray-900"
                        >
                            Tous les blogs
                        </Link>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {blogData.map((item, ind) => (
                    <div className="shadow-sm rounded-lg group cursor-pointer hover:bg-principal transition-all duration-300 ease-in-out">
                        <img src={ item.image } alt={ ind } className="rounded-t-lg h-[200px] w-full bg-cover" />
                        <div className="p-4 space-y-3 group-hover:text-white">
                            <p className="group-hover:text-white">{ item.date }</p>
                            <h1 className="text-xl font-medium">{ item.title}</h1>
                            <p className="text-[14px] group-hover:text-white">{ item.text }</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;