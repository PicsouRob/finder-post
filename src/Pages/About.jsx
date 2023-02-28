import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Footer from '../Components/Footer';
import Header from '../Components/Header';
import image from '../Images/list.svg';
import { aboutData } from '../Utils/helpers';
import fond from '../Images/fondd.jpg';
import signImages from './../Images/sign.jpg';
import FindLink from './Home/FindLink';
import Services from './Home/Services';
import Testimonial from './Home/Testimonial';
import Trusted from './Home/Trusted';

function About({ user }) {
    const navigate = useNavigate();
    const addPath = user._id ? "/api/job/add" : "/auth/login";

    useEffect(() => {
        document.title = "À propos de Nous";
    }, []);

    return (
        <div class="">
            <Header />
            <div class="relative gap-y-16 py-16 mx-auto bg-cover bg-no-repeat"
                style={ { backgroundImage: `linear-gradient(rgba(0, 0, 0, 85%), rgba(0, 0, 0, 0.8)), url(/services.jpg)` } }
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex items-center justify-center bg-cover gap-x-8">
                    <div class="w-full lg:w-2/3 grid grid-cols-1 px-6 lg:px-8 py-16 md:py-16 text-center gap-6 place-items-center">
                        <h1 class="text-3xl md:text-3xl font-bold text-white">À propos de Finder</h1>
                        <span class="mt-4 md:mt-0 text-white leading-8">FinderHt est une communauté où vous pouvez trouver des travailleurs indépendants pour tout type de travail, par exemple un designer, un photographe, un développeur, un professionnel du marketing ou autre, vous pouvez aussi ajouter vos compétences en tant que professionnel afin que des clients puissent vous contacter pour un future boulot et nous valorisons votre confiance et votre sécurité comme notre priorité numéro un. <br /><br />Les possibilités sont infinies. Nous avons des pigistes ambaucheurs qui travaillent dans tous les domaines techniques, professionnels et créatifs imaginables.</span>
                        <div className="flex flex-wrap items-center justify-center gap-x-8">
                            <button class="bg-white text-black px-6 py-2.5 md:py-4 rounded-lg font-medium my-3 md:my-0 cursor-pointer hover:opacity-90"
                                onClick={ () => navigate('/api/job/find') }
                            >
                                Trouver des talents
                            </button>
                            <button class="bg-black text-white px-6 py-2.5 md:py-4 rounded-lg font-medium my-3 md:my-0 cursor-pointer hover:opacity-90"
                                onClick={ () => navigate('/api/job/find') }
                            >
                                Chercher du travail
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative py-16 h-auto bg-gray-100"
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 class="text-2xl lg:text-3xl font-semibold pb-12 text-center">Comment ça marche?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-3 h-auto place-items-center">
                        <div className="relative">
                            <img src="/images/h12.png" alt="h12" className="" />
                            <img src="/images/h13.png" alt="h13" className="absolute top-0" />
                            <img src="/images/h14.png" alt="h14" className="absolute -bottom-5" />
                        </div>
                        <div class="flex flex-col gap-y-6">
                            { aboutData.map((item, index) => (
                                <div key={ index } class="">
                                    <h3 class="text-[17px] font-bold py-2.5">{ item.id } - { item.title }</h3>
                                    <span class="">{ item.text }</span>
                                </div>
                            )) }
                        </div>
                    </div>
                </div>
            </div>
            <Services />
            <div class="relative py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="w-full flex flex-col md:flex-row md:justify-between items-center">
                        <div class="pb-4 w-full md:w-1/2">
                            <h2 class="text-3xl md:text-3xl font-bold text-black pb-2 md:pb-0">Alors qu'est-ce que tu attends?</h2>
                            <span class="mt-4 md:mt-0 w-full md:w-2/3">Publiez un projet aujourd'hui et obtenez des offres des clients partout dans le pays ou recherchez un freelancer pour votre boulot.</span>
                        </div>
                        <div class="flex items-center flex-col md:flex-row gap-x-10">
                            <div class="border border-black px-3 py-2.5 rounded-lg hover:bg-black hover:text-white font-medium my-3 md:my-0 cursor-pointer"
                                onClick={ () => navigate(addPath) }
                            >
                                Publier une offre
                            </div>
                            <div onClick={ () => navigate("/api/job/find") }
                                class="border border-black px-3 py-2.5 rounded-lg hover:bg-black hover:text-white font-medium my-4 md:my-0 cursor-pointer"
                            >
                                Recherche Freelancer
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative py-16 bg-gray-100 text-black"
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div class="flex-col space-y-3 leading-6">
                        <h2 class="text-3xl md:text-3xl font-bold pb-2 md:pb-0">Aide supplémentaire</h2>
                        <span class="mt-4 md:mt-0">
                            Vous ne savez pas par où commencer ? Consultez les liens ci-dessous:
                        </span>
                    </div>
                    <div class="flex flex-col md:flex-row md:justify-between pt-6 gap-y-8 items-center w-full">
                        <Link to="/help_search"
                            class="text-xl underline  hover:opacity-80 cursor-pointer w-full md:w-1/2"
                        >
                            Comment embaucher avec finderht.com
                        </Link>
                        <Link to="/help_post"
                            class="text-xl underline  hover:opacity-80 cursor-pointer w-full md:w-1/2"
                        >
                            Conseils pour publier des projets
                        </Link>
                    </div>
                </div>
            </div>
            <Testimonial />
            <Trusted />
            <FindLink />
            <Footer />
        </div>
    );
}

const mapStateToProps = ({ user }) => {
    return { user };
}

export default connect(mapStateToProps)(About);