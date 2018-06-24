import contradictions from 'constants/triz/contradictions';
import trizMatrix from 'constants/triz/matrix';
import principles from 'constants/triz/inventivePrinciples';
import suggestions from 'constants/triz/suggestions';

export default class Solution {
  constructor(keeper, flaw) {
    this.keeper = keeper;
    this.flaw = flaw;
  }

  get whatToKeep() {
    return contradictions[this.keeper];
  }

  get whatToImprove() {
    return contradictions[this.flaw];
  }

  get propositions() {
    return trizMatrix[this.flaw][this.keeper].map(id => principles[id]);
  }

  get examples() {
    return trizMatrix[this.flaw][this.keeper].map(id => suggestions[id]);
  }
}

export function summaryOfSolutions(keepers, flaws) {
  const solution = [];

  flaws.forEach(flaw => {
    keepers.forEach(keep => {
      if (flaw !== keep) {
        const newSet = new Solution(flaw, keep);
        if (newSet.propositions.length) {
          solution.push(newSet);
        }
      }
    });
  });
  return solution;
}
