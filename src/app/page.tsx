import Container from "@/app/_components/container";
// import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
// import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { PostPreviews } from "@/app/_components/post-previews";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <Intro />
        {/* <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        /> */}
        {<PostPreviews posts={allPosts} />}
      </Container>
    </main>
  );
}
