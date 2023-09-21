import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function FooterComponent({ footerMenuItems }) {
    return (
        <footer className="flex flex-col w-full bg-[#0E4069] text-white px-[5vw] pt-[100px] pb-[60px]">
            <div className="flex w-2/3 pb-[60px]">
                <div className="w-1/2">
                    <Image
                        src='/header-logo.svg'
                        width={350}
                        height={112}
                        alt="Footer Logo"
                    />
                </div>
                <div className="w-1/2 flex items-center">
                    <h3 className="flex flex-col text-3xl"><span className="text-[#8DC63F] font-bold">Business coaching is</span><span> Future-proofing for Founders</span></h3>
                </div>
            </div>
            <div className="flex w-100">
                <div className="w-1/3">
                    <h3 className="text-[#8DC63F] text-2xl font-bold">Contact Us</h3>

                    <p className="max-w-[150px]">47A Bell Street, Henley on Thames, RG9 2BA</p>
                    <p className="py-5">info@thehenleycoachingpartnership.com</p>
                    <p>Company Reg: 07587359</p>
                </div>

                <div className="w-1/3">
                    <h4 className="text-[#8DC63F] text-2xl font-bold">Sitemap</h4>
                    <ul>
                        {
                            footerMenuItems.map((item) => (
                                <li>
                                    <Link className="" href={item.path}>{item.label}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="w-1/3">
                    <h3 className="text-2xl font-bold">Sign up for our newsletter</h3>
                    <p>Form goes here</p>
                </div>
            </div>

            <div className="flex justify-between pt-[60px]">
                <div>
                    <div className="flex">
                        <div className="flex w-[46px] h-[46px] align-center justify-center rounded-full bg-[#8DC63F]">
                            <Image
                                src='/icon-linkedin.svg'
                                width={15.144}
                                height={14.161}
                                alt="Footer LinkedIn Icon"
                            />
                        </div>

                        <div className="flex w-[46px] h-[46px] align-center justify-center rounded-full bg-[#8DC63F] mx-6">
                            <Image
                                src='/icon-phone.svg'
                                width={16.792}
                                height={17.108}
                                alt="Footer Phone Icon"
                            />
                        </div>

                        <div className="flex w-[46px] h-[46px] align-center justify-center rounded-full bg-[#8DC63F]">
                            <Image
                                src='/icon-email.svg'
                                width={17.512}
                                height={12.687}
                                alt="Footer Email Icon"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <p>©The Henley Coaching Partnership. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}