<script lang="ts" setup>
type strategyType = ('S' | 'A' | 'B' | 'C')
const strategies = {
    "S": (salary: number) => salary * 4,
    "A": (salary: number) => salary * 3,
    "B": (salary: number) => salary * 2,
    "C": (salary: number) => salary * 1,
}
const calculateBonus = (level: strategyType, salary: number) => strategies[level](salary)
console.log(calculateBonus('S', 1000));

</script>

<template>
    <div>Strategy pattern</div>
</template>