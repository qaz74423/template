import {
  basePanelService,
  IPattern,
} from "@components/base-panel/BasePanelService";
import Example from "./Example.vue";
const code = `interface Expr {
  type: "value" | "division";
  value: number | DivisionExpr;
}
interface DivisionExpr {
  left: Expr;
  right: Expr;
}

// AST representation for expression '8 / (12 / 3)'
export const expr: Expr = {
  type: "division",
  value: {
    left: {
      type: "value",
      value: 8,
    },

    right: {
      type: "division",
      value: {
        left: {
          type: "value",
          value: 12,
        },

        right: {
          type: "value",
          value: 3,
        },
      },
    },
  },
};

// first
// const evaluate = (e: Expr): number => {
//   if (e.type === "value") return <number>e.value;
//   else {
//     return (
//       evaluate((<DivisionExpr>e.value).left) /
//       evaluate((<DivisionExpr>e.value).right)
//     );
//   }
// };

// seconds
// const evaluate = (e: Expr): number => {
//   if (e.type === "value") return <number>e.value;

//   const left = evaluate((<DivisionExpr>e.value).left);
//   const right = evaluate((<DivisionExpr>e.value).right);

//   if (right === 0) throw new Error("The divisor is zero");

//   return left / right;
// };

// third
// export class Maybe<T> {
//   public value?: T;

//   constructor(value?: T) {
//     if (value) {
//       this.value = value;
//     }
//   }
//   static nothing<T>() {
//     return new Maybe<T>();
//   }

//   static just<T>(value: T) {
//     return new Maybe(value);
//   }

//   isNothing() {
//     return typeof this.value === "undefined";
//   }
// }

// function safeDiv(x: number, y: number): Maybe<number> {
//   if (y === 0) return Maybe.nothing<number>();

//   return Maybe.just(x / y);
// }

// const evaluate = (e: Expr): Maybe<number> => {
//   if (e.type === "value") return Maybe.just(<number>e.value);

//   const left = evaluate((<DivisionExpr>e.value).left);
//   if (left.isNothing()) {
//     return Maybe.nothing<number>();
//   } else {
//     const right = evaluate((<DivisionExpr>e.value).right);
//     if (right.isNothing()) {
//       return Maybe.nothing<number>();
//     } else {
//       return safeDiv(<number>left.value, <number>right.value);
//     }
//   }
// };

// fourth
// export class Maybe<T> {
//   public value?: T;

//   constructor(value?: T) {
//     if (value) {
//       this.value = value;
//     }
//   }
//   static nothing<T>() {
//     return new Maybe<T>();
//   }

//   static just<T>(value: T) {
//     return new Maybe(value);
//   }

//   isNothing() {
//     return typeof this.value === "undefined";
//   }

//   // fourth add fun
//   bind<U>(transform: (value: T) => Maybe<U>): Maybe<U> {
//     return this.isNothing() ? Maybe.nothing<U>() : transform(<T>this.value);
//   }
// }
// function safeDiv(x: number, y: number): Maybe<number> {
//   if (y === 0) return Maybe.nothing<number>();

//   return Maybe.just(x / y);
// }
// const evaluate = (e: Expr): Maybe<number> => {
//   if (e.type === "value") return Maybe.just(<number>e.value);

//   return evaluate((<DivisionExpr>e.value).left).bind((left) =>
//     evaluate((<DivisionExpr>e.value).right).bind((right) =>
//       safeDiv(left, right)
//     )
//   );
// };

// End
export class Maybe<T> {
  public value?: T;

  constructor(value?: T) {
    if (value) {
      this.value = value;
    }
  }
  static nothing<T>() {
    return new Maybe<T>();
  }

  static just<T>(value: T) {
    return new Maybe(value);
  }

  isNothing() {
    return typeof this.value === "undefined";
  }

  // fourth add fun
  bind<U>(transform: (value: T) => Maybe<U>): Maybe<U> {
    return this.isNothing() ? Maybe.nothing<U>() : transform(<T>this.value);
  }
}

function safeDiv(x: number, y: number): Maybe<number> {
  if (y === 0) return Maybe.nothing<number>();

  return Maybe.just(x / y);
}
function doM<T>(generator: Iterator<Maybe<T>>) {
  function step(value?: any): Maybe<T> {
    const result = generator.next(value);
    if (result.done) {
      return result.value;
    }
    return result.value.bind(step);
  }
  return step();
}

export const evaluate = (e: Expr): Maybe<number> => {
  if (e.type === "value") return Maybe.just(<number>e.value);

  return doM(
    (function* () {
      const left = yield evaluate((<DivisionExpr>e.value).left);
      const right = yield evaluate((<DivisionExpr>e.value).right);
      return safeDiv(left, right);
    })()
  );
};
`;
const monad: IPattern = {
  title: "monad",
  describe: "monad",
  _Event: () => {},
  code,

  originArticle: "https://zhuanlan.zhihu.com/p/47130217",
  exampleComponent: Example,
};
export function MonadService() {
  basePanelService.serviceRigister(monad);
}
