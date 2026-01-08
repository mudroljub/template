import ships from '../../assets/ships.jpg'
import styles from './Template.module.css'
import Timer from '../Timer/Timer'

interface Template1Props {
    expiredIn?: string;
}

export default function Template1({expiredIn}: Template1Props) {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div>
                    <h1 className={styles.title}>Enemy Attacks!</h1>
                    {expiredIn && <Timer expiredIn={expiredIn} />}
                    <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tenetur nesciunt maiores, sed ipsam molestias, ducimus tempora magni, ipsum doloribus maxime laboriosam eos ratione! Sit quis repellendus cumque enim eligendi.</span><span>Maxime perferendis esse dolor accusantium quod sint molestias placeat ipsum laboriosam, deleniti maiores dolores magni? Qui optio eveniet sit blanditiis vel. Officiis cupiditate dolorum delectus ullam quidem commodi quod quas.</span></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eaque sed provident, veritatis inventore iste rerum blanditiis aliquid sint culpa, totam esse sit dignissimos deleniti quaerat itaque tempore odio mollitia?</p>
                </div>
                <div>
                    <button>Get Started</button>
                    <button>Read More</button>
                </div>
            </div>
            <div className={styles.item}>
                <img src={ships} className={styles.img} alt="ships" />
            </div>
        </div>
    )
}