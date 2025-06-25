import { ResearchSearchWithCategories } from "@/components/includes/ResearchList";
import { ResearchSlideshow } from "@/components/includes/SlideShow";

export default function Home() {
  return (
    <>
      <ResearchSlideshow />
      <ResearchSearchWithCategories />
    </>
  );
}
