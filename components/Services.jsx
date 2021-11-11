import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Services.module.css";

const Services = ({ services }) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.title}>What I Can Do?</h1>
        <h1 className={styles.subtitle}>Services I can help you with</h1>
        <div className={styles.services}>
          {services.map((service) => (
            <Link passHref key={service.id} href={`/products/${service.name}`}>
              <div className={styles.service}>
                <div className={styles.desc}>{service.desc}</div>
                <span className={styles.cat}>{service.title}</span>
                <div className={styles.media}>
                  {service.video ? (
                    <video
                      src={`/img/${service.video}`}
                      autoPlay
                      loop
                      muted
                      className={styles.video}
                    />
                  ) : (
                    <Image
                      alt=""
                      src={`/img/${service.photo}`}
                      width="100%"
                      height="100%"
                      layout="responsive"
                      objectFit="cover"
                    />
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
