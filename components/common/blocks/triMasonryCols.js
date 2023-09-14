import styles from '../../../styles/TriMasonryCols.module.css';

export default function TriMasonryColsComponent({ triMasonryColsItems, xCol1Width, xCol2Width, yCol1Height, yCol2Height, justParagraph }) {
    return (
        <>
        {
            triMasonryColsItems.map((item) => (
                <div key={item.id} className="">
                    <div className="" style={{ width:`${xCol1Width}%` }}>
                        <div className="bg-black" style={{ height:`${yCol1Height}%` }}>
                            <h2>{item.triMasonryColContent.mainTitleWhite}<span>{item.triMasonryColContent.mainTitleGreen}</span></h2>
                        </div>
                        <div className="bg-white" style={{ height:`${yCol2Height}%` }}>
                            
                            { renderSubtitle({justParagraph}, {item}) }

                            <p>{item.triMasonryColContent.paragraph}</p>

                            
                        </div>
                    </div>
                    <div className="" style={{ width:`${xCol2Width}%` }}>

                    </div>
                </div>
            ))
        }
        </>
    );
}

function renderSubtitle(justParagraph, item) {
    if ({justParagraph}) {
        return (null)
    } else {
        return (
            <h3>{item.triMasonryColContent.subtitle}</h3>
        )
    }
}