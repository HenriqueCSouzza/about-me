import React from "react";
import { ComponentProps } from "react";
import { FaLink, FaGithub } from "react-icons/fa6";
import Chip, { ChipVariantProps } from "../design/Chip";
import { ProjectType } from "@/data/projectDetails";
import Text from "@/components/design/Text";
import Title from "@/components/design/Title";

type ProjectProps = ComponentProps<"article"> & ProjectType;

function Project({
  title,
  image,
  description,
  technologies,
  previewLink,
  githubLink,
}: ProjectProps) {
  return (
    <article className="shadow-xl shadow-slate-300 dark:shadow-slate-900 dark:bg-dark-card  border dark:border-transparent rounded-xl">
      <picture>
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full bg-no-repeat rounded-t-xl bg-contain max-h-48 md:max-h-44"
        />
      </picture>
      <div className="p-4">
        <Title tag="h1" size="h6" className="">
          {title}
        </Title>
        <Text className="pt-4 h-20">{description}</Text>
        <div className="pt-4">
          <Text className="font-bold"> TechStack</Text>
          <span className="flex gap-1 flex-wrap">
            {React.Children.toArray(
              technologies.map(
                ({
                  label,
                  color,
                }: {
                  label: string;
                  color?: ChipVariantProps["color"];
                }) => <Chip color={color}>{label}</Chip>
              )
            )}
          </span>
        </div>

        <div className="flex justify-between items-center mt-5 min-h-6">
          {previewLink && (
            <div className="flex items-center">
              <FaLink className="text-dark-heading dark:text-white text-xl" />
              <a
                href={previewLink}
                target="_blank"
                rel="noreferrer noopener"
                className="underline pl-2 font-light dark:text-white"
              >
                Live Preview
              </a>
            </div>
          )}
          {githubLink && (
            <div className="flex items-center">
              <FaGithub className="text-dark-heading dark:text-white text-xl" />

              <a
                href={githubLink}
                target="_blank"
                rel="noreferrer noopener"
                className="underline pl-2 font-light dark:text-white"
              >
                View Code
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default Project;
