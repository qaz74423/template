import { InjectionKey, Ref } from "vue";

const InjectCollapsed: InjectionKey<Ref<boolean>> = Symbol();

const InjectIsMob: InjectionKey<Ref<boolean>> = Symbol();

const InjectIsTabs: InjectionKey<Ref<boolean>> = Symbol();

const InjectShowFooter: InjectionKey<Ref<boolean>> = Symbol();

type RouterFadeType = "fade-right" | "fade-left";

const InjectTransition: InjectionKey<Ref<RouterFadeType>> = Symbol();

export {
  InjectCollapsed,
  InjectIsMob,
  InjectIsTabs,
  InjectShowFooter,
  RouterFadeType,
  InjectTransition,
};
