import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import Email from '../../icons/email.svg';
import Lock from '../../icons/lock.svg';
import eye from '../../icons/eye.svg';
import eyeOff from '../../icons/eye-off.svg';
import LogoLink from '../../Components/Logo';
import SignFooter from './SignFooter';
import SignLeft from './SignLeft';
import SignTop from './SignTop';

const validation = Yup.object().shape({
    email: Yup.string().email('Addresse email incorrect')
        .required("L'email est obligatoire"),
    password: Yup.string().min(6, 'Le mot de passe doit être au moins de 6 caractères')
        .required("Le mot de passe est obligatoire")
});

function SignIn() {
    const navigate = useNavigate();
    const [isShow, setIsShow] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef();

    useEffect(() => {
        document.title = 'Finder | Login';
    }, []);

    const keyPress = useCallback((e) => {
        if (e.key === "Enter") {
            formRef.current.handleSubmit();
        }
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    const userLogin = async (values) => {
        await setIsLoading(true);
        axios.post('/auth/login', values)
            .then(async (res) => {
                if (res.data.error) {
                    setError(res.data.error);
                    setIsLoading(false);
                } else {
                    setIsLoading(false);
                    console.log('success');
                    await navigate('/');
                    await window.location.reload();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
            }).catch((err) => {
                setIsLoading(false);
                console.log(err);
            });
    }

    return (
        <div class="relative grid grid-cols-1 lg:grid-cols-2">
            <SignLeft />
            <div class="flex-1 mx-auto w-full">
                <div className="md:max-w-2xl lg:max-w-3xl mx-auto">
                    <div class="w-full flex flex-col px-8 pt-10 lg:px-14 xl:px-24">
                        <div class="flex gap-x-1 font-sans items-center justify-center">
                            <div class="flex items-center justify-center bg-green-700 rounded-full h-8 w-8 rotate-3">
                                <span class="font-bold text-white rotate-3">F</span>
                            </div>
                            <span class="text-black font-bold text-xl md:text-2xl">Finder</span>
                        </div>
                        <div class="pt-6 pb-4">
                            <SignTop title="Hi, Bienvenue!"
                                text="Connectez-vous maintenant pour gérer vos compétences en toute simplicité"
                            />
                            <Formik
                                initialValues={{ email: '', password: '' }}
                                validationSchema={validation}
                                onSubmit={(values) => userLogin(values)}
                                innerRef={formRef}
                            >
                                {({ values, errors, handleSubmit, handleChange, touched }) => (
                                    <form onSubmit={handleSubmit} class="w-full space-y-2">
                                        <div class="pt-4 w-full">
                                            <label for="email" class="font-light">Adresse e-mail</label>
                                            <div class="flex overflow-hidden items-center py-0 mt-2 w-full rounded-lg border border-grayy-400 transition-all focus-within:border-orange-500 h-12 px-2 md:px-3">
                                                <div class="flex justify-center items-center">
                                                    <img alt="email" src={Email} class="w-6 h-6 pointer-events-none" />
                                                </div>
                                                <input type="text" name="email"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    placeholder="Adresse e-mail"
                                                    class="px-4 py-4.5 w-full focus:outline-none font-light border-0 focus:ring-0 my-2"
                                                />
                                            </div>
                                            {errors.email && touched.email && (
                                                <p class="text-red-700 pt-1">{errors.email}</p>
                                            )}
                                            {!errors.email && error.includes('utilisateur') && (
                                                <p class="text-red-700 pt-1">{error}</p>
                                            )}
                                        </div>
                                        <div class="pt-4 w-full">
                                            <label for="password" class="font-light">Mot de passe</label>
                                            <div class="flex overflow-hidden items-center mt-2 w-full rounded-lg border border-grayy-400 transition-all focus-within:border-orange-500 h-12 px-2 md:px-3">
                                                <div class="flex justify-center items-center">
                                                    <img alt="email" src={Lock} class="w-6 h-6 pointer-events-none" />
                                                </div>
                                                <input type={`${isShow ? "text" : "password"}`} placeholder="Mot de passe"
                                                    class="px-4 py-4.5 w-full focus:outline-none font-light border-0 focus:ring-0 my-2"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    name="password"
                                                />
                                                <div class="flex justify-center items-center cursor-pointer"
                                                    onClick={() => setIsShow(!isShow)}
                                                >
                                                    {isShow && values.password.length > 0 && (
                                                        <img alt="email" src={eyeOff} class="w-6 h-6" />
                                                    )}
                                                    {!isShow && values.password.length > 0 && (
                                                        <img alt="email" src={eye} class="w-6 h-6" />
                                                    )}
                                                </div>
                                            </div>
                                            {errors.password && touched.password && (
                                                <p class="text-red-700 pt-1">{errors.password}</p>
                                            )}
                                            {!errors.password && error.includes('passe') && (
                                                <p class="text-red-700 pt-1">{error}</p>
                                            )}
                                        </div>
                                        <div class="flex justify-between items-center pt-3">
                                            <div class="flex items-center">
                                                <input type="checkbox" name="remember"
                                                    class="w-5 h-5 text-orange-50 bg-white rounded border border-gray-400 focus:outline-none focus:ring-orange-500 focus:ring-1 focus:bg-orange-500 self-center"
                                                />
                                                <span for="remember" class="pl-2 font-light text-gray-900  text-sm">
                                                    Souviens-toi de moi
                                                </span>
                                            </div>
                                            <span class="text-blue-500 hover:text-teal-600 text-sm">Mot de passe oublié</span>
                                        </div>
                                        <div class="pt-6">
                                            <button class="py-4 w-full text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:ring-4 focus:ring-red-100 focus:outline-none h-12 flex items-center justify-center uppercase font-medium"
                                                type="submit"
                                            >
                                                {isLoading && <i class="fa fa-spinner fa-spin mr-3"></i>}
                                                S'identifier
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                            <div class="pt-4 pb-3">
                                <div class="font-light text-center text-gray-500 space-x-1 flex items-center justify-center">
                                    <div>Pas encore de compte?</div>
                                    <Link to="/auth/register">
                                        <span class="font-normal text-teal-500 hover:text-teal-600">
                                            Créer un compte
                                        </span>
                                    </Link>
                                </div>
                                <SignFooter />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;