export default function FaqsComponent({ faqs }) {
    return (
        <div className="flex px-[5vw] py-[120px]">
            <div className="w-2/5">
                <h2 className="text-[#003057] text-4xl font-bold">Have a question?</h2>
                <h3 className="text-[#8DC63F] text-3xl py-8">Our frequently asked questions</h3>
                <p className="text-[#818080] text-xl pb-8">FAQ's; Some commonly asked questions.</p>
                <a className="px-6 py-4 bg-[#8DC63F] text-white rounded-full" href="#">Contact us</a>
            </div>
            <div className="w-3/5">
                {
                    faqs.map((item) => (
                        <div>
                            <h3>{item.faqs.question}</h3>
                            <div dangerouslySetInnerHTML={{ __html: item.faqs.answer }}></div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}