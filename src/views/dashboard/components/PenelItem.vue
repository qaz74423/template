<script setup lang="ts">
import { Card, Row, Col } from "ant-design-vue";
import { appService } from "../../../AppService";
type PenelType = {
  icon: any;
  text: string;
  number: string;
  bgcolor: string;
};
const { isMob } = appService.serviceDiscovery();
// const { item } = defineProps({
//   item: {
//     type: Object,
//     default: {},
//   },
// });
const props = defineProps<{ item: PenelType }>();
</script>

<template>
  <Card class="card" :style="{ backgroundColor: props.item.bgcolor }">
    <Row type="flex" :justify="isMob ? 'center' : 'space-between'">
      <Col>
        <component class="icon" :is="props.item.icon" />
      </Col>
      <Col v-if="!isMob">
        <div class="text">{{ props.item.text }}</div>
        <div class="number">{{ props.item.number }}</div>
      </Col>
    </Row>
  </Card>
</template>
<style scoped lang="scss">
.card {
  border-radius: 8px;
  cursor: pointer;
  backdrop-filter: blur(5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease-in-out;
  &:hover {
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.5);
    transform: translateY(-3px);
  }
  .icon {
    font-size: 70px;
    color: #fff;
  }
  .text {
    line-height: 18px;
    color: #fff;
    font-size: 16px;
    margin-bottom: 12px;
    user-select: none;
  }
  .number {
    color: #fff;
    font-size: 25px;
    user-select: none;
  }
}
</style>
