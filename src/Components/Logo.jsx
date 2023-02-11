import React from 'react';
import { Link } from 'react-router-dom';

function LogoLink({ showScroll }) {
    return (
        <div>
            <Link to="/">
                <div class="flex gap-x-1 font-sans items-center">
                    <div class="flex items-center justify-center bg-green-700 rounded-full h-8 w-8 rotate-3">
                        <span class="font-bold text-white rotate-3">F</span>
                    </div>
                    <span class={ `${showScroll ? "text-black" : "text-white"} font-bold text-xl md:text-2xl` }>Finder</span>
                </div>
            </Link>
        </div>
    )
}

export default LogoLink;