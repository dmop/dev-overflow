import Link from "next/link";
import React from "react";
import Image from "next/image";
import RenderTag from "./RenderTag";

const RightSidebar = () => {
  const hotQuestions = [
    {
      _id: 1,
      title: "How to use React Router Dom",
    },
    {
      _id: 2,
      title: "How to create a custom hook in React",
    },
    {
      _id: 3,
      title: "How can we use React Context API",
    },
    {
      _id: 4,
      title: "How the DOM works in React",
    },
  ];

  const popularTags = [
    {
      _id: "1",
      name: "javascript",
      totalQuestions: 2,
    },
    {
      _id: "2",
      name: "React",
      totalQuestions: 2,
    },
    {
      _id: "3",
      name: "Redux",
      totalQuestions: 3,
    },
    {
      _id: "4",
      name: "Vue",
      totalQuestions: 3,
    },
    {
      _id: "5",
      name: "Angular",
      totalQuestions: 2,
    },
  ];

  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div className="">
        <h3 className="h3-bold text-dark200_light900">
          Top Questions
          <div className="mt-7 flex w-full flex-col gap-[30px]">
            {hotQuestions.map((question) => (
              <Link
                href="/"
                key={question._id}
                className="flex cursor-pointer items-center justify-between gap-7"
              >
                <p className="body-medium text-dark500_light700">
                  {question.title}
                </p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="chevron-right"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            ))}
          </div>
        </h3>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
