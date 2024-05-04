import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import { getAllPosts } from "@/lib/api";
import { PostPreviews } from "@/app/_components/post-previews";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <Intro />
        {<PostPreviews posts={allPosts} />}
      </Container>
    </main>
  );
}
