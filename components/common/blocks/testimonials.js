export default function TestimonialsComponent({ testimonials }) {
    return (
        <div className="bg-[#003057] px-[10vw] py-[100px]">
            <h2 className="text-white text-4xl font-bold text-center pb-[60px]">What our clients have said...</h2>
            <div className="flex">
            {
                testimonials.map((item) => (
                    <div className="w-1/3 px-4 first:pl-0 last:pr-0">
                        <div className="bg-[#0E4069] min-h-[280px] p-9 flex items-center">
                            <p className="text-center text-2xl text-white font-bold">"{item.hcpTestimonials.testimonial}"</p>
                        </div>
                        <h5 className="text-center pt-[60px] text-white">{item.hcpTestimonials.author}</h5>
                    </div>
                ))
            }
            </div>
        </div>
    );
}