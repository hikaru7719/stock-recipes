import { plainToClass, classToPlain, Expose, Type } from "class-transformer";
import "reflect-metadata";

type SpanOfTime = "morning" | "noon" | "evening" | "other";

export class Recipe {
  id: string;
  @Expose()
  name: string;
  @Expose()
  url: string;
  @Expose()
  @Type(() => Date)
  date: Date;
  @Expose()
  spanOfTime: SpanOfTime;
  @Expose()
  imagePath: string;

  constructor() {
    //no action
  }

  public toJSON(): unknown {
    return classToPlain(this, { strategy: "excludeAll" });
  }

  public static of(obj: unknown): Recipe {
    return plainToClass(Recipe, obj, { strategy: "excludeAll" });
  }
}
