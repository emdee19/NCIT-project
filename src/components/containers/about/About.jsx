import React from "react";
import "./about.css";

export const About = () => {
    return (
        <>
            <section className="about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5" id="about" >
                            <h1>About NCIT</h1>
                            <p className="pt-4">
                                The institute was established in 2018 and is situated at a
                                distance of .5 kilometer from Mingora eastward on the road to
                                Jambil Kokarai.
                            </p>
                            <p>
                                The overall objectives of Technical Education and Vocational
                                Training policy is to provide the economy with qualified and
                                competitive workers and to train citizens to be able to
                                participate in sustainable growth and poverty reduction by
                                ensuring training opportunities to all social groups without
                                discrimination.
                            </p>
                            <p>
                                The main objectives of National Skill Strategy are:
                                <ul className="pt-4">
                                    <li>
                                        Providing Relevant Skills for Industrial and Economic
                                        Development.
                                    </li>
                                    <li>Improve Access, Equity and Employability.</li>
                                    <li>Assure Quality.</li>
                                </ul>
                            </p>
                            <p className="pt-2">
                                NCIT is Affiliated with:
                                <ul className="pt-4 fw-bold">
                                    <li>KP Board of Technical & Commerce Education, Peshawar</li>
                                    <li>Skill Development Council Peshawar, Pakistan</li>
                                </ul>
                            </p>
                            <div className="about-logos text-center pt-4">
                                <img src="src/assets/header-image-1.png" alt="" />
                                <img
                                    src="src/assets/header-image-2.png"
                                    alt=""
                                    className="ms-5"
                                />
                            </div>
                        </div>
                        <div className="col-lg-7 about-images g-lg-5 g-0 mt-md-3 mt-lg-5">
                            <div className="row about-images-row">
                                <div className="col-8 about-image1">
                                    {/* Image in background */}
                                </div>
                                <div className="col-4 about-image2">
                                    {/* Image in background */}
                                </div>
                            </div>
                            <div className="row mt-md-3 about-images-row">
                                <div className="col-4 about-image3">
                                    {/* Image in background */}
                                </div>
                                <div className="col-8 about-image4">
                                    {/* Image in background */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row about-bottom-side">
                        <div className="col-lg-4 order-2 order-lg-1 text-center text-lg-start mt-md-3 mt-lg-0">
                            <img src="src/assets/about-images/principal-image.png" alt="" className="principal-image" />
                        </div>
                        <div className="col-lg-8 order-1 order-lg-2 about-thoughts">
                            <h1 className="pt-2">Principal's Thoughts</h1>
                            <p className="pt-3">
                                Technical education is the backbone of the economy and
                                prosperity of a nation. Those nations can make progress and
                                advancement, who are found in this field.
                            </p>
                            <p>
                                Therefore I would like to appreciate your decision for getting
                                admission in our esteemed Institute which is a wide campus rich
                                Faculty, offer a unique opportunity of learning skill and
                                knowledge and a very friendly environment and terms of
                                well-equipped labs, workshops, trained and qualified faculty.
                                Based on ideological in scientific approach towards Technical
                                Education, we create the leader of tomorrow who can take leading
                                roles in the next generation building careers.
                            </p>
                            <p>
                                Further, I would advise the citizen of Pakistan in general and
                                residents of this area to join the steam of technical education
                                which is highly essential for the economy and self-reliance of a
                                nation. I hope that every student joining us becomes a leader,
                                contributes to society and taking a major role in the future.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
