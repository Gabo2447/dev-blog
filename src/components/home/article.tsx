import Title from "@/components/global/title";
import Section from "../global/section";
const article = () => {
  return (
    <Section>
      <Title as="h2" className="sm:text-3xl text-xl mb-4 text-blue-50">
        Latest Articles
      </Title>
    </Section>
  );
};

export default article;
