"use client";

export type FooterProps = {
  timeout: boolean;
};

export default function Footer({ timeout }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" style={timeout ? { display: "none" } : {}}>
      <p className="copyright">
        &copy; {currentYear} Maharshi Packaging Limited. All Rights Reserved.
        {" | "}
        <a href="tel:+254721536999">+254 721 536 999</a>
        {" | "}
        <a href="mailto:maharshipac@gmail.com">maharshipac@gmail.com</a>
      </p>
    </footer>
  );
}
