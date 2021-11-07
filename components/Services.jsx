
import Link from 'next/link'
import styles  from '../styles/Services.module.css'
const Services = ({services}) => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
            <h1 className={styles.title}>What I Can Do?</h1>
            <h1 className={styles.subtitle}>Services I can help you with</h1>
            <div className={styles.services}>
                {services.map((service)=>(
                    <Link key={service.id} href ={`/products/${service.name}`}>
                    {service.title}
                    </Link>
                ))}
            </div>
            </div>
        </div>
    )
}

export default Services
