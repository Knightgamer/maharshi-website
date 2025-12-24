"use client";
import Image from "next/image";

export type HeaderProps = {
  onOpenArticle: (article: string) => void,
  timeout: boolean,
};

export default function Header({ onOpenArticle, timeout }: HeaderProps) {
  return (
    <header id="header" style={timeout ? { display: "none" } : {}}>
      <div className="logo">
<Image src="/static/images/maharshi-favicon.avif" alt="Maharshi Packaging Limited" width={0} height={0} priority className="headerLogoImg" sizes="(max-width: 720px) 48px, 60px" />
      </div>

      <div className="content">
        <div className="inner">
          <h1>Maharshi Packaging Limited</h1>
          <p>
            Leading manufacturer of corrugated boxes in Kenya
          </p>
        </div>
      </div>

      <nav>
        <ul>
          <li> <a style={{ cursor: "pointer"}} onClick={() => onOpenArticle("intro")}> Intro </a> </li>
          <li> <a style={{ cursor: "pointer"}} onClick={() => onOpenArticle("work")}> Work </a></li>
          <li> <a style={{ cursor: "pointer"}} onClick={() => onOpenArticle("about")}>About </a> </li>
          <li> <a style={{ cursor: "pointer"}} onClick={() => onOpenArticle("contact")}> Contact </a></li>
        </ul>
      </nav>
    </header>
  );
}
 