import React from 'react';
import { services } from '../../Utils/homeData';

function Services() {
    return (
        <div class="bg-principal text-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
                <div className="flex flex-col md:flex-row items-center justify-start gap-12 md:gap-8">
                    <div className="space-y-5 md:w-1/2">
                        <h1 className="text-3xl font-semibold">Tout un monde de talents indépendants à portée de main</h1>
                        <div className="space-y-10 pt-8">
                            { services.map((item, ind) => (
                                <div key={ ind } className="flex items-start gap-x-4">
                                    <img src={ item.icon } alt={ ind } className="h-12" />
                                    <div className="space-y-2">
                                        <span className="font-semibold text-[17px]">{ item.title }</span>
                                        <p className="text-base text-gray-500">{ item.text }</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img src="/services.jpg" alt="services" className="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;