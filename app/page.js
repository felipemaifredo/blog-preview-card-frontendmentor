import Image from "next/image";
import "./page.css";
import imgBlog from "@/blog-preview-card-main/assets/images/illustration-article.svg"
import imgAvatar from "@/blog-preview-card-main/assets/images/image-avatar.webp"

export default function Home() {
  return (
    <main>
      <div className="card-blog">
        <Image
          src={imgBlog}
        />
        <div className="content-card-blog">
          <p className="tag">Learning</p>
          <p className="published">Published 21 dec 2023</p>
          <p className="title">HTML & CSS Foundations</p>
          <p className="description">These languages are the backbone Of every
            website. defining structure, content, and
            presentation.</p>
        </div>
        <div className="avatar-container">
          <Image
            src={imgAvatar}
          />
          <p>Greg Hooper</p>
        </div>
      </div>
    </main>
  );
}
