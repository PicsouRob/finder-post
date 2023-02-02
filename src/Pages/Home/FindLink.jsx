import React from 'react';

function FindLink() {
    return (
        <div class="max-w-7xl px-6 mx-auto lg:px-8 my-12">
            <div class="bg-[#0e1e25] rounded-lg overflow-hidden">
                <div class="flex flex-col md:flex-row items-center relative">
                    <div class="space-y-4 text-white p-8 md:p-16">
                        <h1 class="text-3xl font-semibold">
                            Trouvez les talents nécessaires pour faire croître votre entreprise.
                        </h1>
                        <p class="text-[17px] text-white">Annoncez vos offres d'emploi à des millions d'utilisateurs mensuels et recherchez 15,8 millions de CV</p>
                        <button class="bg-white rounded-lg font-medium text-[14px] text-black py-3 hover:bg-[#3e7a68] px-4">
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
    );
}

export default FindLink;