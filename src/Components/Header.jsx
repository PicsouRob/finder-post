import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

import profil from '../Images/profil.svg';
import { menu } from '../Utils/data';
import LogoLink from './Logo';
import MenuBurger from './Menu';
import { useScrollToTop } from '../Utils/checkScrollToTop';
import DropDownUp from './DropDownUp';

function Header({ user }) {
    console.log(user);
    const [dropdown, setDropdown] = useState(false);
    const { showScroll } = useScrollToTop();

    return (
        <div class={ `${ showScroll ? "fixed shadow- bg-white z-20" : "relative bg-[#0e1e25] border-b-gray-700" } w-full py-3 z-20 border-b` } id="outer-container">
            <div class="flex items-center justify-between max-w-7xl px-6 mx-auto lg:px-8">
                <LogoLink />
                <div class="flex gap-x-8 md:gap-x-16 items-center">
                    <div class={ `${ showScroll ? "text-black" : "text-white" } hidden md:flex md:gap-x-8` }>
                        { menu.map(({ title, to, state }, index) => (
                            <NavLink to={ to } state={ { jobValue: '', cityValue: 'Ville' } }
                                class="cursor-pointer"
                                activeStyle={ { color: "#ff7a59" } }
                                key={ index }
                            >
                                <span class="transition text-[14px] font-sans hover:text-red-900">{ title }</span>
                            </NavLink>
                        )) }
                    </div>
                    { user ? (
                        <div class="rounded-full" >
                            <div class="hover:opacity-80 cursor-pointer"
                                onClick={ () => setDropdown(!dropdown) }
                            >
                                { user.image ? <img src={ user.image ? user.image : profil }
                                    alt="" class="w-8 h-8 rounded-full"
                                /> : <div class="w-8 h-8 bg-black text-white rounded-full uppercase font-bold flex items-center justify-center">
                                    { user.name.substring(0, 1) }
                                </div> }
                            </div>
                            <DropDownUp dropdown={ dropdown } setDropdown={ setDropdown }
                                user={ user }
                            />
                        </div>
                    ) : (
                        <div class={ `${ showScroll ? "text-black" : "text-white" } flex gap-x-0 md:gap-x-6 font-sans text-[14px]` }>
                            <Link to="auth/register"
                                class="hidden md:block p-2 rounded-md hover:text-gray-500"
                            >S'inscrire</Link>
                            <Link to="/auth/login"
                                class="p-2 block border-1 rounded-md hover:text-gray-500"
                            >Se Connecter</Link>
                        </div>
                    ) }
                    <MenuBurger showScroll={showScroll} />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ({ user }) => {
    return { user };
}

export default connect(mapStateToProps)(Header);