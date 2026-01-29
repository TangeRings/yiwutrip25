"use client";

import { CldImage } from "next-cloudinary";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 bg-white/30" data-scroll-section>
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* Left Column - Nicole Profile */}
                    <div className="space-y-12 lg:pt-0">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="h-[1px] w-8 bg-accent-orange" />
                                    <h2 className="text-[14px] font-semibold tracking-[0.15em] uppercase text-accent-orange">
                                        Lead Guide
                                    </h2>
                                </div>
                                <h3 className="font-display font-bold text-[30px] lg:text-[36px] leading-tight text-accent-navy">
                                    Nicole C. Wang
                                </h3>
                            </div>

                            <div className="text-accent-navy/80 leading-[1.7] text-[16px] lg:text-[17px]">
                                {/* Profile Image - Smaller and Floated */}
                                <div className="float-left mr-5 mb-4 w-32 h-32 sm:w-40 sm:h-40 relative rounded-2xl overflow-hidden shadow-lg border border-accent-navy/5">
                                    <CldImage
                                        src="touched_portrait_vn67jh"
                                        alt="Nicole C. Wang"
                                        fill
                                        className="object-cover object-[center_25%]"
                                        sizes="(max-width: 640px) 128px, 160px"
                                    />
                                </div>

                                <p className="mb-4">
                                    Professor Nicole C. Wang is an Assistant Professor of Practice in <span className="text-accent-navy font-semibold">Interactive Media Business (IMB)</span> at NYU Shanghai and a CFA Charterholder. Her work explores the intersections of AI, storytelling, and creative entrepreneurship, bringing deep practical insight into her teaching on entrepreneurship, SMEs, and brand building.
                                </p>
                                <p>
                                    Beyond academia, she is a social media content creator, an independent product manager, and a "vibe coder," dedicated to designing experiential learning through emerging technologies and AI-powered curricula.
                                </p>
                            </div>
                        </div>

                        {/* Course Subsection */}
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="h-[1px] w-8 bg-accent-orange" />
                                    <h2 className="text-[14px] font-semibold tracking-[0.15em] uppercase text-accent-orange">
                                        Course
                                    </h2>
                                </div>
                                <h3 className="font-display font-bold text-[24px] lg:text-[28px] text-accent-navy">
                                    Entrepreneurship Experienced
                                </h3>
                                <p className="text-accent-navy/70 leading-[1.75] text-[15px] lg:text-[16px]">
                                    This study trip is an integral part of the <span className="font-medium text-accent-navy">Entrepreneurship Experienced</span> course, where students apply lean startup methodologies in real-world contexts. By stepping into Yiwu's market, students move beyond theory to validate business concepts, negotiate with suppliers, and navigate the intricacies of global supply chains.
                                </p>
                            </div>

                            {/* Course Screenshot */}
                            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-lg border border-accent-navy/5 group cursor-pointer">
                                <CldImage
                                    src="ScreenShot_2026-01-29_201434_463_iezt9c"
                                    alt="Entrepreneurship Experienced Course Web Page"
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                />
                                <div className="absolute inset-0 bg-accent-navy/0 group-hover:bg-accent-navy/5 transition-colors duration-300" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - CEL & IMB Introduction */}
                    <div className="space-y-16 lg:pt-10 lg:border-l lg:border-accent-navy/10 lg:pl-16">
                        {/* CEL Section */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="h-[1px] w-8 bg-accent-orange" />
                                <h2 className="text-[14px] font-semibold tracking-[0.1em] uppercase text-accent-orange">
                                    About CEL
                                </h2>
                            </div>
                            <h3 className="font-display font-bold text-[28px] lg:text-[32px] text-accent-navy">
                                Community Engagement Learning
                            </h3>
                            <div className="space-y-5 text-accent-navy/70 leading-[1.75] text-[15px] lg:text-[16px]">
                                <p>
                                    NYU Shanghai's Community Engagement Learning (CEL) program bridges academic engagement with the surrounding environment, connecting students and faculty with local communities across China.
                                </p>
                                <p>
                                    By integrating academic learning with community-based research and service, CEL fosters reciprocal relationships that encourage students to explore China's rich culture, history, and development while gaining real-world problem-solving skills.
                                </p>
                            </div>
                        </div>

                        {/* IMB Section */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="h-[1px] w-8 bg-accent-orange" />
                                <h2 className="text-[14px] font-semibold tracking-[0.1em] uppercase text-accent-orange">
                                    About IMB
                                </h2>
                            </div>
                            <h3 className="font-display font-bold text-[28px] lg:text-[32px] text-accent-navy">
                                Interactive Media & Business
                            </h3>
                            <div className="space-y-5 text-accent-navy/70 leading-[1.75] text-[15px] lg:text-[16px]">
                                <p>
                                    The Interactive Media & Business (IMB) major at NYU Shanghai is an interdisciplinary program where innovation and business converge through emerging media and technology.
                                </p>
                                <p>
                                    Students learn to integrate innovative ideas with technology, creativity, and business principles to develop viable products and experiences. The program fosters a "design-and-build" mindset, preparing graduates to solve complex business problems through creative, tech-enabled solutions.
                                </p>
                            </div>
                        </div>

                        {/* Footer decoration */}
                        <div className="pt-12 border-t border-accent-navy/10 flex justify-between items-center text-[12px] uppercase tracking-[0.2em] text-accent-navy/40">
                            <span>Innovation</span>
                            <span className="text-accent-orange">★</span>
                            <span>Community</span>
                            <span className="text-accent-orange">★</span>
                            <span>Business</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
