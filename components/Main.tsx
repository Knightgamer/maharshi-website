"use client";

import Image from "next/image";

export type MainProps = {
  isArticleVisible: boolean;
  article: string;
  articleTimeout: boolean;
  onCloseArticle: () => void;
  timeout: boolean;
};

export default function Main({ article, articleTimeout, onCloseArticle, timeout }: MainProps) {
  const close = <div className="close" onClick={onCloseArticle} />;

  return (
    <div id="main" style={timeout ? { display: "flex" } : { display: "none" }}>
      <article id="intro" className={`${article === "intro" ? "active" : ""} ${articleTimeout ? "timeout" : ""}`} style={{ display: "none" }}>
        <h2 className="major">Intro</h2>

        <span className="image main">
          <Image src="/static/images/intro.avif" alt="" width={1200} height={200} priority />
        </span>

        <p>Maharshi Packaging Limited specializes in premium corrugated box manufacturing throughout Kenya. Our state-of-the-art facility produces custom packaging solutions designed to protect your products during storage and transportation. With advanced machinery and quality materials, we deliver packaging that meets international standards while supporting local businesses across Nairobi and beyond.</p>
        <p>Since 2018, we&apos;ve been committed to providing exceptional corrugated packaging solutions for diverse industries including e-commerce, manufacturing, agriculture, and retail sectors. Our expert team works closely with clients to understand specific requirements, ensuring every box is precisely engineered for optimal performance. We utilize eco-friendly materials sourced from sustainable forests, combining environmental responsibility with superior protection. From small businesses to large enterprises, our flexible production capabilities accommodate orders of all sizes. With competitive pricing, reliable delivery schedules, and dedicated customer support, Maharshi Packaging has become Kenya&apos;s trusted partner for quality packaging solutions that drive business success.</p>

        {close}
      </article>

      <article id="work" className={`${article === "work" ? "active" : ""} ${articleTimeout ? "timeout" : ""}`} style={{ display: "none" }}>
        <h2 className="major">Work</h2>
        <span className="image main">
          <Image src="/static/images/work.avif" alt="" width={1200} height={200} />
        </span>

        <p>Our manufacturing process utilizes cutting-edge technology and premium materials. From design consultation to final delivery, we ensure every corrugated box meets strict quality standards, providing reliable protection.</p>

        <p>We serve diverse industries including retail, e-commerce, agriculture, pharmaceuticals, and electronics sectors. Our production facility handles custom orders with precision engineering and attention to detail. Each packaging solution is tailored to specific product requirements, ensuring optimal fit and protection. From concept development through manufacturing and delivery, our experienced team maintains consistent quality control standards throughout every production stage.</p>

        {close}
      </article>

      <article id="about" className={`${article === "about" ? "active" : ""} ${articleTimeout ? "timeout" : ""}`} style={{ display: "none" }}>
        <h2 className="major">About</h2>

        <span className="image main">
          <Image src="/static/images/about.avif" alt="" width={1200} height={200} />
        </span>

        <p>Our manufacturing process utilizes cutting-edge technology and premium materials. From design consultation to final delivery, we ensure every corrugated box meets strict quality standards, providing reliable protection.</p>

        <p>We serve diverse industries including retail, e-commerce, agriculture, pharmaceuticals, and electronics sectors. Our production facility handles custom orders with precision engineering and attention to detail. Each packaging solution is tailored to specific product requirements, ensuring optimal fit and protection. From concept development through manufacturing and delivery, our experienced team maintains consistent quality control standards throughout every production stage.</p>

        {close}
      </article>

      <article id="contact" className={`${article === "contact" ? "active" : ""} ${articleTimeout ? "timeout" : ""}`} style={{ display: "none" }}>
        <h2 className="major">Contact</h2>
        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-item">
              <h3>Company</h3>
              <p>Maharshi Packaging Limited</p>
            </div>

            <div className="info-item">
              <h3>Address</h3>
              <p>
                Graylands Godowns, Opposite Flexipac Limited
                <br />
                Athi River, Nairobi County
                <br />
                Kenya
              </p>
            </div>

            <div className="info-item">
              <h3>Contact Person</h3>
              <p>Biren Patel</p>
            </div>

            <div className="info-item">
              <h3>Phone</h3>
              <p>
                <a href="tel:+254721536999">+254 721 536 999</a>
              </p>
            </div>

            <div className="info-item">
              <h3>Email</h3>
              <p>
                <a href="mailto:maharshipac@gmail.com">maharshipac@gmail.com</a>
              </p>
            </div>

            <div className="info-item">
              <h3>Business Hours</h3>
              <p>
                Monday - Friday: 8:00 AM - 5:00 PM
                <br />
                Saturday: 8:00 AM - 1:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7369.454925366289!2d37.00121507703925!3d-1.449166735830129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f7574ac7e792f%3A0x4eb393da3073b7f6!2sMaharshi%20Packaging%20Limited!5e1!3m2!1sen!2ske!4v1766579516103!5m2!1sen!2ske&style=feature:all|element:geometry|color:0xf5f5f5&style=feature:all|element:labels.text.fill|color:0x616161&style=feature:all|element:labels.text.stroke|color:0xf5f5f5&style=feature:water|element:geometry|color:0xc9c9c9&style=feature:water|element:labels.text.fill|color:0x9e9e9e" width="100%" height="450" style={{ border: 0, filter: "grayscale(100%) contrast(1.2)" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Maharshi Packaging Limited Location"></iframe>
          </div>
        </div>

        {close}
      </article>
    </div>
  );
}
