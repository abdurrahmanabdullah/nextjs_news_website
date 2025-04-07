import Banner from "@/components/shared/Banner";
import NewCard from "@/components/shared/NewCard";
import { News } from "@/types/news";

export default async function Home() {
  const data = await fetch("https://api.vercel.app/blog");
  const posts: News[] = await data.json();
  return (
    <div className="py-12">
      <Banner />

      <div className="my-12">
        <h2 className="text-2xl font-bold mb-8  ml-3">Latest News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post) => (
            <NewCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
