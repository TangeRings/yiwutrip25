"use client";

import { CldImage } from "next-cloudinary";

export default function AboutSection() {
    return (
        <section id="about" className="flex items-start pt-28 lg:pt-32 pb-24 bg-white/30" data-scroll-section>
            <div className="container mx-auto px-6 lg:px-16 max-w-[1400px]">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* Left Column - Nicole Profile */}
                    <div className="space-y-8 lg:pt-0">
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="h-[1px] w-8 bg-accent-orange" />
                                    <h2 className="text-[12px] font-semibold tracking-[0.12em] uppercase text-accent-orange">
                                        Lead Guide
                                    </h2>
                                </div>
                                <h3 className="font-display font-bold text-[26px] lg:text-[30px] leading-tight text-accent-navy">
                                    <a href="https://tangerings.github.io/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-orange transition-colors">Nicole C. Wang</a>
                                </h3>
                            </div>

                            <div className="text-accent-navy/80 leading-[1.65] text-[14px] lg:text-[15px]">
                                {/* Profile Image - Smaller and Floated */}
                                <div className="float-left mr-5 mb-4 w-28 h-28 sm:w-32 sm:h-32 relative rounded-2xl overflow-hidden shadow-lg border border-accent-navy/5">
                                    <CldImage
                                        src="touched_portrait_vn67jh"
                                        alt="Nicole C. Wang"
                                        fill
                                        className="object-cover object-[center_25%]"
                                        sizes="(max-width: 640px) 128px, 160px"
                                    />
                                </div>

                                <p className="mb-4">
                                    Professor <a href="https://tangerings.github.io/" target="_blank" rel="noopener noreferrer" className="text-[#1E40AF] font-bold hover:text-accent-orange transition-colors underline decoration-[#1E40AF]/20 underline-offset-2">Nicole C. Wang</a> is an Assistant Professor of Practice in <span className="text-accent-navy font-semibold">Interactive Media Business (IMB)</span> at NYU Shanghai. Her work explores the intersections of AI, storytelling, and creative entrepreneurship, bringing deep practical insight into her teaching on entrepreneurship, SMEs, and brand building.
                                </p>
                                <p>
                                    Beyond academia, she is a social media content creator, an independent product manager, and a "vibe coder," dedicated to designing experiential learning through emerging technologies and AI-powered curricula.
                                </p>
                            </div>
                        </div>

                        {/* Course Subsection */}
                        <div className="space-y-5">
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="h-[1px] w-8 bg-accent-orange" />
                                    <h2 className="text-[12px] font-semibold tracking-[0.12em] uppercase text-accent-orange">
                                        Course
                                    </h2>
                                </div>
                                <h3 className="font-display font-bold text-[22px] lg:text-[24px] text-accent-navy">
                                    Entrepreneurship Experienced
                                </h3>
                            </div>

                            <div className="text-accent-navy/70 leading-[1.7] text-[14px] lg:text-[15px]">
                                {/* Course Screenshot - Smaller and Floated */}
                                <a
                                    href="https://sites.google.com/view/25fallentrepreneurship"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="float-left mr-5 mb-2 w-40 sm:w-48 aspect-[16/10] relative rounded-lg overflow-hidden shadow-md border border-accent-navy/5 group cursor-pointer block"
                                >
                                    <CldImage
                                        src="ScreenShot_2026-01-29_201434_463_iezt9c"
                                        alt="Entrepreneurship Experienced Course Web Page"
                                        fill
                                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.05]"
                                        sizes="(max-width: 640px) 160px, 192px"
                                    />
                                    <div className="absolute inset-0 bg-accent-navy/0 group-hover:bg-accent-navy/5 transition-colors duration-300" />
                                </a>

                                <p>
                                    This study trip is an integral part of the <a href="https://sites.google.com/view/25fallentrepreneurship" target="_blank" rel="noopener noreferrer" className="text-[#1E40AF] font-bold hover:text-accent-orange transition-colors underline decoration-[#1E40AF]/20 underline-offset-2">Entrepreneurship Experienced</a> course, where students apply lean startup methodologies in real-world contexts. By stepping into Yiwu's market, students move beyond theory to validate business concepts, negotiate with suppliers, and navigate the intricacies of global supply chains.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - CEL & IMB Introduction */}
                    <div className="space-y-12 lg:pt-8 lg:border-l lg:border-accent-navy/10 lg:pl-12">
                        {/* CEL Section */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="h-[1px] w-8 bg-accent-orange" />
                                <h2 className="text-[12px] font-semibold tracking-[0.08em] uppercase text-accent-orange">
                                    About CEL
                                </h2>
                            </div>
                            <h3 className="font-display font-bold text-[24px] lg:text-[26px] text-accent-navy">
                                Community Engagement Learning
                            </h3>
                            <div className="space-y-4 text-accent-navy/70 leading-[1.7] text-[14px] lg:text-[15px]">
                                <p>
                                    NYU Shanghai's <a href="https://shanghai.nyu.edu/undergraduate/community-engaged-learning" target="_blank" rel="noopener noreferrer" className="text-[#1E40AF] font-bold hover:text-accent-orange transition-colors underline decoration-[#1E40AF]/20 underline-offset-2">Community-Engaged Learning (CEL) program</a> serves as a vital bridge between academic study and the surrounding environment. By cultivating reciprocal relationships across Shanghai and greater China, the program integrates classroom learning with community-based research and service, empowering students and faculty to incorporate meaningful community engagement into their academic practices.
                                </p>
                            </div>
                        </div>

                        {/* IMB Section */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="h-[1px] w-8 bg-accent-orange" />
                                <h2 className="text-[12px] font-semibold tracking-[0.08em] uppercase text-accent-orange">
                                    About IMB
                                </h2>
                            </div>
                            <h3 className="font-display font-bold text-[24px] lg:text-[26px] text-accent-navy">
                                Interactive Media & Business
                            </h3>
                            <div className="space-y-4 text-accent-navy/70 leading-[1.7] text-[14px] lg:text-[15px]">
                                <p>
                                    The <a href="https://shanghai.nyu.edu/academics/majors/interactive-media-and-business" target="_blank" rel="noopener noreferrer" className="text-[#1E40AF] font-bold hover:text-accent-orange transition-colors underline decoration-[#1E40AF]/20 underline-offset-2">Interactive Media + Business (IMB) major</a> is where innovation + business meets through emerging media technology. It teaches how innovative ideas combine with technology, creativity and business principles to yield viable products, services, and experiences.
                                </p>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </section>
    );
}
