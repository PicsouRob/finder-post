import React from 'react';
import { data } from '../Utils/infoData';

function Info() {
    return (
        <div class="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 space-y-16">
            <div class="space-y-2 flex flex-col text-center">
                <h1 class="font-semibold text-2xl md:text-3xl">
                Besoin de faire quelque chose?
                </h1>
                <span class="text-lg">
                Services les plus consultés et les plus vendus de tous les temps
                </span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 sm:gap-x-5 md:gap-x-10">
                { data.map((item, index) => (
                    <div key={ index } class="flex flex-col items-start justify-center border rounded-lg py-8 px-4 gap-y-4 group hover:bg-principal">
                        <div
                            class="w-12 h-12 shadow-sm flex items-center justify-center" style={ { backgroundColor: item.color } }
                        >
                            { item.icon }
                        </div>
                        <h3 class="font-semibold text-base group-hover:text-white">{ item.title }</h3>
                        <span class="text-[14px] group-hover:text-gray-500">{ item.text }</span>
                    </div>
                )) }
            </div>
        </div>
    );
}

export default Info;