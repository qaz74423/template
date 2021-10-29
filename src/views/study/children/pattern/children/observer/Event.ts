import { message } from "ant-design-vue";

export function _Event() {
  // 主体
  class Subject {
    private state: number | undefined;

    private observers: Array<Observer> | undefined;

    constructor() {
      this.state = 0;
      this.observers = [];
    }

    getState() {
      return this.state;
    }

    setState(state: number) {
      this.state = state;
      // 通知
      this.notifyAllObservers();
    }

    notifyAllObservers() {
      this.observers?.forEach((item) => {
        item.update();
      });
    }

    attch(observer: Observer) {
      this.observers?.push(observer);
    }
  }

  //   观察者
  class Observer {
    private name: string | undefined;

    private subject: Subject | undefined;

    constructor(name: string, subject: Subject) {
      this.name = name;
      this.subject = subject;
      this.subject.attch(this);
    }

    update() {
      message.info(this.name + " 更新, state: " + this.subject?.getState());
    }
  }

  return {
    Subject,
    Observer,
  };
}
