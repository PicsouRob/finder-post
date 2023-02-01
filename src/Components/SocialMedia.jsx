import React from 'react';
import { SocialIcon } from 'react-social-icons';

function SocialMedia(props) {
    const { color, footer } = props;

    return (
        <div class={`${footer ? "space-x-2" : " space-x-4"} flex items-center`}>
            <SocialIcon color={color} bgColor="transparent" className={`${footer ? "h-6 w-6" : ""}`} fgColor={color} url="https://twitter.com/PicsouRoberto" />
            <SocialIcon color={color} bgColor="transparent" className={`${footer ? "h-6 w-6" : ""}`} fgColor={color} url="https://facebook.com/roberto.phanord" />
            <SocialIcon color={color} bgColor="transparent" className={`${footer ? "h-6 w-6" : ""}`} fgColor={color} class="bg-red-800" url="https://instagram.com/iampicsou" />
        </div>
    )
}

export default SocialMedia;