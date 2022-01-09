// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [
  {
    id: 1,
    name: "Human1",
    sex: "female",
    age: 27,
    health: 3,
  },
  {
    id: 2,
    name: "Human2",
    sex: "male",
    age: 31,
    health: 5,
  },
  {
    id: 3,
    name: "Human3",
    sex: "female",
    age: 17,
    health: 8,
  },
];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: any[] = [
  {
    id: 1,
    name: "T1",
    wings: 4,
    wheels: 2,
    clan: "one",
  },
  {
    id: 2,
    name: "T2",
    wings: 8,
    wheels: 4,
    clan: "two",
  },
  {
    id: 3,
    name: "T3",
    wings: 6,
    wheels: 4,
    clan: "three",
  },
];
