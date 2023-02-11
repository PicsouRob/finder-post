import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import SocialMedia from '../Components/SocialMedia';
import { contactData } from '../Utils/data';

const validation = Yup.object().shape({
    name: Yup.string().required("Votre Nom est obligatoire"),
    email: Yup.string().email('Addresse email incorrect')
        .required("L'email est obligatoire"),
    message: Yup.string().required("Le message est obligatoire")
});

function Contact() {
    const [isLoading, setIsLoading] = useState(false);
    emailjs.init(process.env.USER_ID);

    useEffect(() => {
        document.title = "Finder | Contact";
    }, []);

    const handleSubmitEmail = (values) => {
        const { name, email, message } = values;
        setIsLoading(true);
        let alert = `Votre message a été envoyé avec succès \n Merci de nous avoir contacté`;
        const templateParams = {
            from_name: name, email, message,
        }
        emailjs.send(process.env.SERVICES_ID, process.env.TEMPLATES_ID, templateParams, process.env.USER_ID)
            .then(async (response) => {
                await window.alert(alert);
                console.log('SUCCESS!', response.status, response.text);
                setIsLoading(false);
            }).catch((err) => {
                console.log('FAILED...', err);
                setIsLoading(false);
            });
    }

    return (
        <div>
            <Header />
            <div class="relative w-full">
                <div className="max-w-7xl mx-auto">
                    <div className="">
                        <div className="bg-principal md:rounded-lg md:mt-8 lg:mt-12 text-white py-8 px-6 lg:py-16 space-y-2 md:mx-8">
                            <div className="w-full md:w-1/2">
                                <h1 className="font-bold text-2xl lg:text-3xl leading-8 pb-2">Contactez-nous</h1>
                                <p className="text-white text-base lg:pr-10">Nous serions ravis de discuter de la manière dont nous pouvons vous aider.</p>
                            </div>
                        </div>
                        <div className="px-6 md:px-8">
                            <div class="grid md:grid-cols-2 gap-x-10 gap-y-12 py-12 md:px-12">
                                <div class="w-full">
                                    <div class="pb-3">
                                        <h1 class="text-2xl md:text-3xl font-bold pb-3">Restez en contact avec nous.</h1>
                                        <span class="">Pour demander un avis ou obtenir des informations sur notre société, contactez-nous directement ou remplissez le formulaire et nous vous répondrons dans les plus brefs délais.</span>
                                    </div>
                                    <div className='flex flex-col space-y-8 pt-4'>
                                        { contactData.map((data, ind) => (
                                            <div key={ ind }
                                                class="flex items-center my-3 h-10 gap-x-4 w-full cursor-pointer"
                                                onClick={ () => {
                                                    data.open != '' ? document.open(data.open) : {}
                                                }}
                                            >
                                                <img src={`/images/contact${ind+1}.png`} alt={ data.title } className="w-12 h-10" />
                                                <div className="space-y-3">
                                                    <h1 className="font-medium leading-8">{ data.title }</h1>
                                                    <span class="">{ data.text }</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <SocialMedia color="#fff" />
                                </div>
                                <div className="w-full md:shadow-md rounded-md p-4 border space-y-7 divide-y md:-mt-36 bg-white">
                                    <div className="space-y-3">
                                        <h1 className="font-semibold text-2xl">Parlez nous de vous</h1>
                                        <p className="text-base">Que vous ayez des questions ou que vous souhaitiez simplement dire bonjour, contactez-nous.</p>
                                    </div>
                                    <div className="pt-4">
                                        <Formik className=""
                                            initialValues={{ name: '', email: '', message: '' }}
                                            validationSchema={validation}
                                            onSubmit={(values) => handleSubmitEmail(values)}
                                        >
                                            {({ values, errors, handleSubmit, handleChange, touched }) => (
                                                <form class="w-full" onSubmit={ handleSubmit }>
                                                    <div className="grid lg:grid-cols-2 gap-y-4 gap-x-5">
                                                        <div className="">
                                                            <label class="font-medium">Nom et Prénom</label>
                                                            <input type="text" name="name"
                                                                value={values.name}
                                                                onChange={handleChange}
                                                                placeholder="Entrez votre nom complet"
                                                                class="px-3 py-3 w-full text-[15px] text-black placeholder:text-gray-600 focus:outline-none font-light border focus:ring-0 my-2 rounded-lg"
                                                            />
                                                            {errors.name && touched.name && (
                                                                <p class="text-red-700">{errors.name}</p>
                                                            )}
                                                        </div>
                                                        <div className="">
                                                            <label class="font-medium">Courrier électronique</label>
                                                            <input type="text" name="email"
                                                                value={values.email}
                                                                onChange={handleChange} placeholder="Entrez votre courrier"
                                                                class="px-3 py-3 w-full text-[15px] placeholder:text-gray-600 focus:outline-none font-light border focus:ring-0 my-2 rounded-lg"
                                                            />
                                                            {errors.email && touched.email && (
                                                                <p class="text-red-700">{errors.email}</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <label class="pt-3 font-medium">Message</label>
                                                    <textarea name="message"
                                                        value={values.message} onChange={handleChange}
                                                        placeholder="Entrez votre message"
                                                        class="px-4 pt-2 placeholder:text-gray-600 w-full focus:outline-none border focus:ring-0 text-[15px] my-2 rounded-lg resize-y h-60"
                                                    ></textarea>
                                                    {errors.message && touched.message && (
                                                        <p class="text-red-700">{errors.message}</p>
                                                    )}
                                                    <button type="submit"
                                                        class="flex items-center justify-center gap-x-2 w-full sm:w-40 bg-[#198754] rounded-md px-12 py-2.5 text-white font-medium mt-3 hover:bg-principal" disabled={isLoading}
                                                    >
                                                        {isLoading && <i class="fa fa-spinner fa-spin"></i>}
                                                        Envoyer
                                                    </button>
                                                </form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;