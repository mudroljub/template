import classnames from 'classnames';

import shared from './Template.module.css'
import styles from './Template1.module.css'
import Timer from '../Timer/Timer'

interface Template1Props {
    expiredIn?: string;
}

export default function Template1({ expiredIn }: Template1Props) {
    return (
        <div className={classnames(shared.container)}>
            <div className={styles.column}>
                <div>
                    <h1 className={shared.title}>Enemy Attacks!</h1>
                    {expiredIn && <Timer expiredIn={expiredIn} />}
                    <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tenetur nesciunt maiores, sed ipsam molestias, ducimus tempora magni, ipsum doloribus maxime laboriosam eos ratione! Sit quis repellendus cumque enim eligendi.</span><span>Maxime perferendis esse dolor accusantium quod sint molestias placeat ipsum laboriosam, deleniti maiores dolores magni? Qui optio eveniet sit blanditiis vel. Officiis cupiditate dolorum delectus ullam quidem commodi quod quas.</span></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eaque sed provident, veritatis inventore iste rerum blanditiis aliquid sint culpa, totam esse sit dignissimos deleniti quaerat itaque tempore odio mollitia?</p>
                </div>
                <div>
                    <button>Get Started</button>
                    <button>Read More</button>
                </div>
            </div>
            <div className={classnames(styles.column, styles.imgWrapper)}>
                <img src={'/assets/present.png'} className={styles.img} alt="ships" />
            </div>
        </div>
    )
}