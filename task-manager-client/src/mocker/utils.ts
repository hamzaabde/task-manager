import { faker } from "@faker-js/faker";

export function randomName() {
  return faker.lorem.sentence();
}

export function randomDescription() {
  return faker.lorem.paragraph();
}

export function randomColumnLength() {
  const MAX = 6;
  const MIN = 2;
  const PRECISION = 1;

  return faker.datatype.number({ max: MAX, min: MIN, precision: PRECISION });
}
