export function _Event() {
  // 第一种
  class Singleton1 {
    private name: string | undefined;

    static instance: Singleton1 | undefined = undefined;

    constructor(name: string) {
      if (!Singleton1.instance) {
        this.name = name;
        Singleton1.instance = this;
      }
      return Singleton1.instance;
    }

    getName() {
      return this.name;
    }

    static removeInstance() {
      if (this.instance) this.instance = undefined;
    }
  }

  return {
    Singleton1,
  };
}
