export const FIND_CONTRADICTION = 'FIND_CONTRADICTION';

export function findContradiction(searchFraze) {
  return {
    type: FIND_CONTRADICTION,
    data: searchFraze,
  };
}
