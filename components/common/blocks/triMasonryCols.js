import styles from '../../../styles/TriMasonryCols.module.css';
import Link from 'next/link';

export default function TriMasonryColsComponent({ triMasonryColsItems, xCol1Width, xCol2Width, yCol1Height, yCol2Height }) {
    return (
        <>
        {
            triMasonryColsItems.map((item) => (
                <div key={item.id} className="flex min-h-[800px]">
                    <div className="" style={{ width:`${xCol1Width}%` }}>
                        <div className="bg-black pl-[5vw] pr-5 flex items-center" style={{ height:`${yCol1Height}%` }}>
                            <h2 className="text-white text-6xl">{item.triMasonryColContent.mainTitleWhite}<span className="text-[#8DC63F] font-bold"> {item.triMasonryColContent.mainTitleGreen}</span></h2>
                        </div>
                        <div className="bg-white pl-[5vw] pr-[5vw] flex flex-col justify-center" style={{ height:`${yCol2Height}%` }}>

                            <h3 className="text-[#003057] text-5xl font-bold">{item.triMasonryColContent.subtitle}</h3>

                            <p className="py-7">{item.triMasonryColContent.paragraph}</p>

                            <Link className="bg-[#8DC63F] px-6 py-4 rounded-full max-w-[276px] text-center text-white" href={item.triMasonryColContent.buttonLink.uri}>{item.triMasonryColContent.buttonText}</Link>
                            
                        </div>
                    </div>
                    <div className="" style={{ width:`${xCol2Width}%`, backgroundImage:`url(${item.triMasonryColContent.image.mediaItemUrl})` }}>

                    </div>
                </div>
            ))
        }
        </>
    );
}