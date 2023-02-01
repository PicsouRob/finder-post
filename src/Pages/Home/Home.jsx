import React, { useState, useEffect } from 'react';

import Header from '../../Components/Header';
import SocialMedia from '../../Components/SocialMedia';
import Footer from '../../Components/Footer';
import Info from '../../Components/Info';
import InputField from './InputField';
import SearchCategories from './SearchCategories';
import Services from './Services';
import Testimonial from './Testimonial';

function Home(props) {
    const [jobValue, setJobValue] = useState('');
    const [cityValue, setCityValue] = useState('Ville');

    useEffect(() => {
        document.title = "Finder | Accueil";
    }, []);

    return (
        <div>
            <Header />
            <div class="relative overflow-hidden bg-[#0e1e25]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 py-16 lg:py-24 sm:py-12 md:py-16 max-w-7xl px-6 mx-auto lg:px-8">
                    <div class="space-y-3 flex flex-col justify-center">
                        <div class="flex items-center space-x-3 text-[12px] text-white">
                            <hr class="border-4 w-16" />
                            <span className="">Trouver un freelance</span>
                            <hr class="border-4 w-16" />
                        </div>
                        <h1 class="text-4xl xl:text-5xl tracking-tight leading-normal font-bold text-indigo-900">
                            <span class="block xl:inline text-white">Utilisez vos compétences pour gagner plus d'emplois.</span>
                        </h1>
                        <p class="my-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Ou Trouver des Embaucheurs autour de vous pour vos travaux.</p>
                        <InputField value={jobValue} setValue={setJobValue}
                            setSelectCity={cityValue} selectCity={setCityValue}
                        />
                        <hr class="my-2 border-0 bg-transparent" />
                        <SocialMedia color="#fff" />
                    </div>
                    <div className="relative h-[550px] flex justify-center items-center">
                        <img src="/slider53.png" alt="slider" className="absolute bottom-24 md:bottom-0 left-0 z-10 animate-bounce transition duration-300" />
                        <img src="/slider61.png" alt="slider61" className="absolute bottom-0 h-[200px]" />
                        <img src="/slider62.png" alt="slider62" className="absolute bottom-0 h-full" />
                        <img src="/slider63.png" alt="slider63" className="absolute -bottom-6 right-0 hover:animate-bounce transition duration-300" />
                        <img src="/slider64.png" alt="slider64" className="absolute right-7" />
                        <img src="/slider65.png" alt="slider65" className="absolute top-0 md:top-9 left-0 md:left-9" />
                        <img src="/slider66.png" alt="slider66" className="absolute top-0 right-6 md:right-16 animate-Pulse transition duration-300" />
                    </div>
                </div>
            </div>
            <Info />
            <SearchCategories />
            <Services />
            <Testimonial />
            <div class="max-w-7xl px-6 mx-auto lg:px-8">
                <div class="bg-[#0e1e25] rounded-lg mb-8  overflow-hidden">
                    <div class="flex flex-col md:flex-row items-center relative">
                        <div class="space-y-4 text-white p-8 md:p-16">
                            <h1 class="text-3xl font-semibold">
                                Trouvez les talents nécessaires pour faire croître votre entreprise.
                            </h1>
                            <p class="text-[17px] text-white">Annoncez vos offres d'emploi à des millions d'utilisateurs mensuels et recherchez 15,8 millions de CV</p>
                            <button class="bg-white rounded-lg font-medium text-[14px] text-black py-3 hover:opacity-80 px-4">
                                <span>Commencer</span>
                            </button>
                        </div>
                        <div class="relative h-full flex items-center justify-center flex-end w-full">
                            <img src="/slider61.png" alt="slider61" className=" h-[200px] absolute -bottom-16" />
                            <img src="/slider62.png" alt="slider62" className="h-[400px] z-10" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;