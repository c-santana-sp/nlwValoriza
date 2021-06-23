import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repositories/TagRepository";


export class TagService {
  async execute(name: string) {

    const tagRepository = getCustomRepository(TagRepository);

    if (!name) {
      throw new Error("Incorrect name!");
    }

    const tagAlreadyExists = await tagRepository.findOne({
      name
    });

    if (tagAlreadyExists) {
      throw new Error("Tag Already Exists!");
    }

    const tag = tagRepository.create({
      name
    });

    await tagRepository.save(tag);

    return tag;
  }
}
