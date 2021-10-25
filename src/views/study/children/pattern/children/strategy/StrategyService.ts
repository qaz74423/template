import { PartternService } from "../../PartternService";
const { commenService } = PartternService();

export type strategyType = "S" | "A" | "B" | "C";

export function StrategyService() {
  function _Event() {
    const strategies = {
      S: (salary: number) => salary * 4,
      A: (salary: number) => salary * 3,
      B: (salary: number) => salary * 2,
      C: (salary: number) => salary * 1,
    };

    const calculateBonus = (level: strategyType, salary: number) =>
      strategies[level](salary);

    return {
      strategies,
      calculateBonus,
    };
  }

  const { showCode, code, redirect } = commenService(_Event);

  return {
    _Event,
    showCode,
    code,
    redirect,
  };
}
