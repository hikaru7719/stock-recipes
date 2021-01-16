import { Recipe } from "../src/model";

test("Recipe#toJSON", () => {
  const obj = {
    name: "test",
    url: "https://xxx.com/aaa/bbb/ccc",
    date: new Date("2021-01-01"),
    spanOfTime: "morning",
    imagePath: "https://xxx.com/xxx/yyy/zzz",
    xxx: "xxx",
    yyy: "xxx",
  };
  const recipe = Object.assign(new Recipe(), obj);
  expect(JSON.stringify(recipe.toJSON())).toBe(
    '{"name":"test","url":"https://xxx.com/aaa/bbb/ccc","date":"2021-01-01T00:00:00.000Z","spanOfTime":"morning","imagePath":"https://xxx.com/xxx/yyy/zzz"}'
  );
});

test("Recipe#of", () => {
  const obj = {
    name: "test",
    url: "https://xxx.com/aaa/bbb/ccc",
    date: new Date("2021-01-01"),
    spanOfTime: "morning",
    imagePath: "https://xxx.com/xxx/yyy/zzz",
    xxx: "xxx",
    yyy: "xxx",
  };
  const recipe = Recipe.of(obj);
  expect(JSON.stringify(recipe)).toBe(
    '{"name":"test","url":"https://xxx.com/aaa/bbb/ccc","date":"2021-01-01T00:00:00.000Z","spanOfTime":"morning","imagePath":"https://xxx.com/xxx/yyy/zzz"}'
  );
});
