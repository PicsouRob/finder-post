import React from 'react';
import { Link } from 'react-router-dom';

import SocialMedia from './SocialMedia';
import { about, categories, support } from '../Utils/footerData.js';

function Footer() {
    return (
        <div class="relative bg-[#0e1e25] py-2">
            <div class="max-w-7xl px-6 lg:px-8 mx-auto divide-y divide-gray-700 text-gray-500">
                <div class="flex items-center justify-between flex-wrap py-3 text-[15px] md:text-[17px] font-medium text-white">
                    <div class="flex gap-3">
                        <span class="">Terms of Service</span>
                        <span class="">Privacy Policy</span>
                        <span class="">Site Map</span>
                    </div>
                    <div class="flex gap-3 items-center">
                        <span class="">Suivez-nous</span>
                        <SocialMedia color="#fff" footer={ true } />
                    </div>
                </div>
                <div class="py-6">
                    <div class="flex flex-wrap justify-between sm:item text-white gap-y-10 gap-x-6">
                        <FooterContent data={ about } title="À propos de" />
                        <FooterContent data={ categories } title="Catégories" />
                        <FooterContent data={ support } title="Support" />
                        <div class="">
                            <h1 class="font-semibold text-[15px] text-white mb-4">S'abonner</h1>
                            <div class="bg-gray-800 rounded-md px-3 md:px-3 py-3">
                                <input placeholder="Votre E-mail" class="bg-transparent text-[13px] focus:outline-none" />
                                <button class="font-semibold text-[14px]">Envoyer</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-between text-gray-500 py-3">
                    <p class="text-gray-500">Copyright © 2021 - All Rights Reserved</p>
                    <select class="bg-[#11242c] border border-gray-800 py-1 px-2 rounded-sm">
                        <option selected value="Francais">Francais</option>
                        <option value="Anglais">Anglais</option>
                        <option value="Espagnol">Espagnol</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

const FooterContent = ({ data, title }) => {
    return (
        <div class="">
            <h1 class="font-semibold text-[15px] text-white mb-4">{ title }</h1>
            <div class="space-y-3">
                { data.map((data, index) => (
                    <div key={index} class="text-gray-500 text-[14x] cursor-pointer hover:text-white">
                        <span class="">{ data.title }</span>
                    </div>
                ))}
            </div>
        </div>  
    );
}

export default Footer;