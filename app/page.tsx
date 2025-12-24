"use client";

import { useEffect, useRef, useState } from "react";

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Page() {
  const [isArticleVisible, setIsArticleVisible] = useState(false);
  const [timeout, setTimeoutState] = useState(false);
  const [articleTimeout, setArticleTimeout] = useState(false);
  const [article, setArticle] = useState("");
  const [loading, setLoading] = useState("is-loading");

  const mountTimeoutRef = useRef<number | null>(null);
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    mountTimeoutRef.current = window.setTimeout(() => setLoading(""), 100);

    return () => {
      if (mountTimeoutRef.current) window.clearTimeout(mountTimeoutRef.current);
      timersRef.current.forEach((t) => window.clearTimeout(t));
      timersRef.current = [];
    };
  }, []);

  const handleOpenArticle = (nextArticle: string) => {
    setIsArticleVisible((v) => !v);
    setArticle(nextArticle);

    timersRef.current.push(window.setTimeout(() => setTimeoutState((t) => !t), 325));
    timersRef.current.push(window.setTimeout(() => setArticleTimeout((t) => !t), 350));
  };

  const handleCloseArticle = () => {
    setArticleTimeout((t) => !t);

    timersRef.current.push(window.setTimeout(() => setTimeoutState((t) => !t), 325));
    timersRef.current.push(
      window.setTimeout(() => {
        setIsArticleVisible((v) => !v);
        setArticle("");
      }, 350)
    );
  };

  return (
    <div className={`body ${loading} ${isArticleVisible ? "is-article-visible" : ""}`}>
      <div id="wrapper">
        <Header onOpenArticle={handleOpenArticle} timeout={timeout} />
        <Main isArticleVisible={isArticleVisible} timeout={timeout} articleTimeout={articleTimeout} article={article} onCloseArticle={handleCloseArticle} />
        <Footer timeout={timeout} />
      </div>

      <div id="bg" />
    </div>
  );
}
