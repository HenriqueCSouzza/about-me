import Image from "next/image";
import { personalDetails } from "@/data/info";
import workDetails from "@/data/workDetails";
import Title from "@/components/design/Title";
import React from "react";
import Work from "@/components/Work";

type LangType = "en-US" | "pt-BR";
interface HomePageType {
  params: {
    lang?: LangType;
  };
}

export default async function HomePage({ params }: HomePageType) {
  const { presentation, name, tagline, job, phraseJob } = personalDetails;

  const lang = params?.lang || "pt-BR";
  return (
    <main className="container mx-auto max-width">
      <section className="text-center md:text-left flex-col-reverse gap-16 md:gap-6 md:flex-row flex justify-between items-center">
        <div>
          <Title size="h4" tag="h1">
            {presentation[lang] + " " + name[lang]}
          </Title>
          <Title size="h4" tag="h1">
            {phraseJob[lang]}{" "}
            <span className="bg-clip-text bg-gradient text-transparent">
              {job[lang]}
            </span>
          </Title>
          <Title size="h4" tag="h2">
            {tagline[lang]}
          </Title>
        </div>
        <div className="flex justify-center items-center ">
          <Image
            className="w-1/2 md:ml-auto rounded-full"
            src="/images/profile.jpg"
            width="350"
            height="350"
            alt="Henrique Souza"
          />
        </div>
      </section>
    </main>
  );
}
