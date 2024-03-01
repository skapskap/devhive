import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "How to create a new project in Next.js?",
    tags: [
      {
        _id: "1",
        name: "next.js",
      },
      { _id: "2", name: "web development" },
    ],
    author: {
      _id: "1",
      name: "João Victor",
      picture: "https://example.com/path/to/picture1.jpg",
    },
    upvotes: 10,
    views: 100,
    answers: [{}],
    createdAt: new Date("2021-09-01T00:00:00.000Z"),
  },
  {
    _id: "2",
    title: "How to manage state in React functional components?",
    tags: [
      { _id: "1", name: "react" },
      { _id: "2", name: "state management" },
      { _id: "3", name: "hooks" },
    ],
    author: {
      _id: "2",
      name: "Maria Silva",
      picture: "https://example.com/path/to/picture2.jpg",
    },
    upvotes: 15,
    views: 200,
    answers: [{}],
    createdAt: new Date("2022-06-15T00:00:00.000Z"),
  },
  {
    _id: "3",
    title: "How to implement user authentication in Django?",
    tags: [
      { _id: "1", name: "django" },
      { _id: "2", name: "python" },
      { _id: "3", name: "authentication" },
    ],
    author: {
      _id: "3",
      name: "Ahmed Khan",
      picture: "https://example.com/path/to/picture3.jpg",
    },
    upvotes: 20,
    views: 300,
    answers: [{}],
    createdAt: new Date("2022-03-10T00:00:00.000Z"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>

        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
          discussion. Your query could be the next bnig thing others learn from.
          Get involved!"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
