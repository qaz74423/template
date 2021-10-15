<template>
  <div class="wrap">
    <div v-show="open" class="stars">
      <div class="star" v-for="index in starsCount" :key="index" :ref="star"></div>
    </div>
  </div>
</template>


<script lang='ts'>
import { defineComponent, onMounted, reactive, Ref, ref, toRefs } from "vue";
export default defineComponent({
  props: {
    open: {
      type: Boolean,
      defaule: true
    }
  },
  name: "stars",
  setup() {
    const state = reactive({
      starsCount: 400, //星星数量
      distance: 800, //间距
    });
    let starArr: Ref<Array<HTMLElement>> = ref([]);
    let star = (el: HTMLElement) => {
      starArr.value.push(el);
    };
    onMounted(() => {
      starArr.value.forEach((item) => {
        let speed = 0.2 + Math.random() * 1;
        let thisDistance = state.distance + Math.random() * 300;
        item.style.transformOrigin = `0 0 ${thisDistance}px`;
        item.style.transform = `translate3d(0,0,-${thisDistance}px) rotateY(${Math.random() * 360
          }deg) rotateX(${Math.random() * -50}deg) scale(${speed})`;
      });
    });
    return {
      ...toRefs(state),
      star,
    };
  },
});
</script>

<style lang='scss' scoped>
.wrap {
  width: 100%;
  height: 100%;
  background: radial-gradient(
    200% 100% at bottom center,
    #f7f7b6,
    #e96f93,
    #1b2947
  );
  background: radial-gradient(
    220% 105% at top center,
    #1b2947 10%,
    #75517d 40%,
    #e96f92 65%,
    #f7f7bf
  );
  // background-attachment: fixed;
  display: flex;
  overflow: hidden;
  position: fixed;
  z-index: -1;
  //   动画
  @keyframes rotate {
    0% {
      transform: perspective(400px) rotateZ(20deg) rotateX(-40deg) rotateY(0);
    }
    100% {
      transform: perspective(400px) rotateZ(20deg) rotateX(-40deg)
        rotateY(-360deg);
    }
  }
  .stars {
    transform: perspective(500px);
    transform-style: preserve-3d;
    position: absolute;
    perspective-origin: 50% 100%;
    left: 50%;
    animation: rotate 90s infinite linear;
    bottom: 0;
    .star {
      width: 2px;
      height: 2px;
      background: #f7f7b8;
      position: absolute;
      top: 0;
      left: 0;
      backface-visibility: hidden;
    }
  }
}
</style>