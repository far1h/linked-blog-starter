import React from "react";
import Author from "../../interfaces/author";
import Backlinks from "../misc/backlinks";
import PostBody from "./post-body";
import PostMeta from "./post-meta";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import BackPage from "../misc/backpage";

type Props = {
  title: string;
  content: string;
  date?: string;
  author?: Author;
  backlinks: {
    [k: string]: {
      title: string;
      excerpt: string;
    };
  };
};

function PostSingle({ title, date, author, content, backlinks }: Props) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto lg:max-w-none">
            <article>
            <BackPage />
              {/* Article header */}
              <header className="max-w-3xl mx-auto mb-20">
                <h1 className="h1 text-center mb-4 text-6xl">{title}</h1>
              </header>

              {/* Article content */}
              <div className="lg:flex lg:justify-between" data-sticky-container>
                {/* Main content */}
                <div className="max-w-2xl pb-8">
                

                  {author || date ? (
                    <>
                      <PostMeta author={author} date={date} />
                      <hr className="w-16 h-px pt-px bg-gray-200 dark:bg-gray-700 border-0 my-6" />
                    </>
                  ) : null}

                  <PostBody content={content} />
                </div>

                {/* Sidebar */}
                <aside className="relative lg:block lg:w-72 lg:ml-20 shrink-0">
                  {Object.keys(backlinks).length > 0 && (
                    <div>
                      <h4 className="text-lg font-bold leading-snug tracking-tight mb-4">
                        Backlinks
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                        {<Backlinks backlinks={backlinks} />}
                      </div>
                    </div>
                  )}
                </aside>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PostSingle;
