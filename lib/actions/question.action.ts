"use server";

import Question from "@/database/question.model";
import Tag from "@/database/tags.model";
import { connectToDatabase } from "../mongoose";

export async function createQuestion(params: any) {
  // eslint-disable-next-line no-empty
  try {
    connectToDatabase();

    const { title, content, tags, author, path } = params;

    // Create question

    const question = await Question.create({
      title,
      content,
      author,
    });

    const tagDocuments = [];

    // Create tags or get them if they already exist

    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { questions: question._id } },
        { upsert: true, new: true }
      );

      tagDocuments.push(existingTag._id);
    }

    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocuments } },
    });

    // Create an interaction record for the user's ask question action

    // Increment author's reputation by +5 points for creating a question
  } catch (error) {}
}
