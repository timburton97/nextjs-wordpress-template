import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function FooterComponent() {
    return (
        <footer class="w-full bg-[#0E4069] text-white">
            <div class="flex w-100">
                <div class="w-1/3">
                    <Image
                        src='/header-logo.svg'
                        width={350}
                        height={112}
                        alt="Footer Logo"
                    />

                    <h3 class="text-[#8DC63F]">Contact Us</h3>

                    <p>47A Bell Street, Henley on Thames, RG9 2BA</p>
                    <p>info@thehenleycoachingpartnership.com</p>
                    <p>Company Reg: 07587359</p>

                    <div class="flex">
                        <div class="flex w-[46px] h-[46px] align-center justify-center rounded-full bg-[#8DC63F]">
                            <Image
                                src='/icon-linkedin.svg'
                                width={15.144}
                                height={14.161}
                                alt="Footer LinkedIn Icon"
                            />
                        </div>

                        <div class="flex w-[46px] h-[46px] align-center justify-center rounded-full bg-[#8DC63F]">
                            <Image
                                src='/icon-phone.svg'
                                width={16.792}
                                height={17.108}
                                alt="Footer Phone Icon"
                            />
                        </div>

                        <div class="flex w-[46px] h-[46px] align-center justify-center rounded-full bg-[#8DC63F]">
                            <Image
                                src='/icon-email.svg'
                                width={17.512}
                                height={12.687}
                                alt="Footer Email Icon"
                            />
                        </div>
                    </div>
                </div>

                <div class="w-2/3 flex">
                    <div class="w-1/2">
                        <h3><span class="text-[#8DC63F]">Business coaching is</span> Future-proofing for Founders</h3>
                        <h4 class="text-[#8DC63F]">Sitemap</h4>
                        <ul>
                            //footer menu loop here
                        </ul>
                    </div>

                    <div class="w-1/2">
                        <h3>Sign up for our newsletter</h3>
                        <p>Form goes here</p>
                    </div>
                </div>
            </div>

            <div>

            </div>
        </footer>
    )
}