import styles from '../../../styles/FounderFlipCards.module.css';

export default function FounderFlipCardsComponent({ founderFlipCardItems }) {
    return (
        <div className={styles.flipCardContainer}>
            <h2 className="text-6xl max-w-[800px] text-[#003057]"><span className="text-[#8DC63F] font-bold">We can help you if you are a founder</span> that wants to…</h2>
            <div className="flex justify-center py-24">
                {
                    founderFlipCardItems.map((item) => (
                        <div key={item.id} className={styles.flipCard}>
                            <div className={styles.flipCardInner}>
                                <div className={styles.flipCardFront} style={{ backgroundImage:`url(${item.founderFlipCard.backgroundImage.mediaItemUrl})` }}>
                                    <div className={styles.flipCardFrontInner}>
                                        <h3>{item.founderFlipCard.title}</h3>
                                    </div>
                                </div>
                                <div className={styles.flipCardBack} style={{ backgroundImage:`url(${item.founderFlipCard.backgroundImage.mediaItemUrl})` }}>
                                    <div className={styles.flipCardBackInner}>
                                        <p>{item.founderFlipCard.paragraph}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            
            <h4 className="text-[#003057] text-2xl">We can help you with any of these options,</h4>
            <h4 className="text-[#8DC63F] text-2xl">get in touch to find out how</h4>
        </div>
    );
}