import Link from "next/link";
import React from "react";
import Image from "next/image";
import bannerImg from "@/app/assets/banner1.jpg";
import { Button } from "../ui/button";
import { News } from "@/types/news";

interface NewCardProps {
  post: News;
}

function NewCard({ post }: NewCardProps) {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <Link href={"/"}>
        <Image
          placeholder="blur"
          src={bannerImg}
          alt="banner"
          className="mb-5 md:h-56 rounded hover:scale-105 cursor-pointer transition-all duration-200 w-full object-cover"
        />
      </Link>
      <div>
        <h2 className="text-xl font-semibold my-3">
          {post.author.substring(0, 65)}
        </h2>
        <p className="mb-4 ">{post.category.substring(0, 25)}</p>
        <p className="mb-4 ">{post.date.substring(0, 25)}</p>
        <Link href={"/"}>
          <Button>Read More</Button>
        </Link>
      </div>
    </div>
  );
}

export default NewCard;
