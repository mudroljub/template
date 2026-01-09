import classnames from 'classnames';

import shared from './Template.module.css'
import styles from './Template2.module.css'
import Timer from '../Timer/Timer'

interface Template2Props {
    endDate?: string;
    bgImage?: string;
    image?: string;
}

export default function Template2({ endDate, image, bgImage }: Template2Props) {
    return (
        <div
            className={classnames(shared.container, styles.container2, { [shared.bgImage]: Boolean(bgImage) })}
            style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
        >
            <div className={classnames(shared.imgWrapper)}>
                {image &&
                    <img src={image} className={shared.img} alt="ships" />
                }
            </div>
            <div className={styles.flex}>
                <div className={styles.column}>
                    <div>
                        <h1 className={shared.title}>Get new ships for secret manoeuvres battle type!</h1>
                        {endDate && <Timer endDate={endDate} />}
                    </div>
                </div>
                <div className={styles.column}>
                    <div>
                        <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tenetur nesciunt maiores, sed ipsam molestias, ducimus tempora magni, ipsum doloribus maxime laboriosam eos ratione! Sit quis repellendus cumque enim eligendi.</span><span>Maxime perferendis esse dolor accusantium quod sint molestias placeat ipsum laboriosam, deleniti maiores dolores magni? Qui optio eveniet sit blanditiis vel. Officiis cupiditate dolorum delectus ullam quidem commodi quod quas.</span></p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eaque sed provident, veritatis inventore iste rerum blanditiis aliquid sint culpa, totam esse sit dignissimos deleniti quaerat itaque tempore odio mollitia?</p>
                    </div>
                    <div>
                        <button>Get Started</button>
                        <button>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}