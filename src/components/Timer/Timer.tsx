import styles from './Timer.module.css'

function timeLeft(targetIso: string): string {
  const diff: number = new Date(targetIso).getTime() - Date.now()
  if (diff <= 0) return "Offer time expired"

  const totalSeconds: number = Math.ceil(diff / 1000)
  const days: number = Math.floor(totalSeconds / 86400)
  const hours: number = Math.floor((totalSeconds % 86400) / 3600)
  const minutes: number = Math.floor((totalSeconds % 3600) / 60)
  const seconds: number = totalSeconds % 60

  if (days >= 1) return `${days} ${days === 1 ? "day" : "days"}`
  if (hours >= 1) return `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`
  if (minutes >= 1) return `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`
  return `${seconds} s`
}

interface TimerProps {
    expiredIn: string;
}

export default function Timer({ expiredIn }: TimerProps) {
    return (
        <div>
            <div>Until end:</div>
            <div className={styles.value}>{timeLeft(expiredIn)}</div>
        </div>
    )
}