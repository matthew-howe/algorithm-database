const numActions = 2;
const numCards = 3;

function fn() {
  // Run Iterations of counterfactual regret minimization

  const informationSetMap = {};
  const numIterations = 10000;
  let expectedGameValue = 0;

  for (let i = 0; i < numIterations; i++) {
    expectedGameValue += cfr(informationSetMap);

    for (let key in informationSetMap) {
      key.nextStrategy();
    }
  }

  expectedGameValue /= numIterations;

  console.log(expectedGameValue, informationSetMap);
}

function cfr(
  informationSetMap,
  history = "",
  card_1 = -1,
  card_2 = -1,
  pr_1 = 1,
  pr_2 = 1,
  pr_c = 1
) {
  /*

    Counterfactual regret minimization algorithm.

    Parameters
    ----------

    informationSetMap: dict
        Dictionary of all information sets.
    history : [{'r', 'c', 'b'}], str
        A string representation of the game tree path we have taken.
        Each character of the string represents a single action:

        'r': random chance action
        'c': check action
        'b': bet action

    card_1 : (0, 2), int
        player A's card

    card_2 : (0, 2), int
        player B's card

    pr_1 : (0, 1.0), float
        The probability that player A reaches `history`.

    pr_2 : (0, 1.0), float
        The probability that player B reaches `history`.

    pr_c: (0, 1.0), float
        The probability contribution of chance events to reach `history`.

  */

  if (isChanceNode(history)) return chanceUtil(informationSetMap);
  if (isTerminal(history)) return terminalUtil(history, card_1, card_2)

  const n = history.length;
  const isPlayer1 = n % 2 === 0;
  const card = isPlayer1 ? card_1 : card_2;
  const infoSet = getInfoSet(informationSetMap, card, history);

  const strategy = infoSet.strategy;
  if (isPlayer1) infoSet.reachPr += pr_1;
  else infoSet.reachPr += pr_2;

  // Counterfactual utility per action.
  let actionUtils = new Array(numActions).fill(00);
  const actions = ["c", "b"];

  for (let i = 0; i < actions.length; i++) {
    let nextHistory = history + action;

    if (isPlayer1) {
      actionUtils[i] = -1 * cfr(
        informationSetMap,
        nextHistory,
        card_1,
        card_2,
        pr_1 * strategy[i],
        pr_2,
        pr_c
      )
    } else {
      actionUtils[i] = -1 * cfr(
        informationSetMap,
        nextHistory,
        card_1,
        card_2,
        pr_1,
        pr_2 * strategy[i],
        pr_c
      )
    }
  }
  
  // Utility of information set. TODO Array Math Logic!
  const util = Infinity // sum(action_utils * strategy)
  const regrets = -Infinity // actionUtils - util

  if (isPlayer1) infoSet.regretSum += pr_2 * pr_c * regrets;
  else infoSet.regretSum += pr_1 * pr_c * regrets;

  return util
}
