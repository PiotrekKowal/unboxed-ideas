export const FIND_EXAMPLE = 'FIND_EXAMPLE';

export function findExample(searchFraze) {
  return {
    type: FIND_EXAMPLE,
    data: searchFraze,
  };
}
