import classnames from 'classnames';

import styles from './Template.module.css'
import Timer from '../Timer/Timer'

interface Template2Props {
    expiredIn?: string;
    bgImage?: string;
}

export default function Template2({ expiredIn, bgImage }: Template2Props) {
    return (
        <div
            className={classnames(styles.container, styles.container2)}
            style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
        >
            <div className={styles.item}>
                <div>
                    <h1 className={styles.title}>Get new ships for secret manoeuvres battle type!</h1>
                    {expiredIn && <Timer expiredIn={expiredIn} />}
                </div>
            </div>
            <div className={styles.item}>
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
    )
}