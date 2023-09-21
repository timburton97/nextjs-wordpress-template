export default function MasonryTestimonialsComponent({ testimonials }) {
    return (
        <>
            <div className="flex min-h-[700px]">
                <div className="w-5/12 bg-cover" style={{ backgroundImage:`url('/AJ204024.png')` }}>

                </div>
                <div className="w-7/12 flex flex-col">
                    <div className="flex flex-col grow pl-[5vw] justify-center">
                        <h2 className="text-[#003057] text-5xl font-bold max-w-[650px]">Our tailored programs cover both leadership and business coaching.</h2>
                        <p className="text-[#818080] text-xl max-w-[600px] py-7">Bringing the next generation of leaders to their optimum level is down to your investment in them.</p>
                        <a className="text-white px-6 py-4 rounded-full bg-[#8DC63F] text-center max-w-[276px]" href="#">Want to know more?</a>
                    </div>
                    <div className="h-[120px] bg-[#003057]">
                        {
                            testimonials.map((item) => (
                                <div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}