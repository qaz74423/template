<script lang="ts" setup>
import { Dropdown, Avatar, Menu } from "ant-design-vue";
import { UserOutlined } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
import { getStorage } from "@utils/auth";
import type { UserType } from "../../api/user";
import { appService } from "@AppService";
const router = useRouter();
const { isLogin, isMob } = appService.serviceDiscovery();

let userInfo: UserType = {};
if (isLogin?.value) {
  userInfo = JSON.parse(getStorage("userInfo"));
}

const handlerClick = () => {
  if (!isLogin?.value) router.push("/login");
};

const logout = () => {
  localStorage.clear();
  router.push("/login");
};
</script>
<template>
  <Dropdown n class="right" @click="handlerClick">
    <span class="hover-con">
      <Avatar :size="isMob ? 40 : 50" :src="isLogin ? userInfo.avatar : ''">
        <template #icon>
          <UserOutlined />
        </template>
      </Avatar>
      <a class="username">{{ isLogin ? userInfo.username : "登录" }}</a>
    </span>
    <template #overlay>
      <Menu v-if="isLogin">
        <Menu.Item key="0" @click="router.push('/user-info')"
          >个人中心</Menu.Item
        >
        <Menu.Item key="1">个人设置（没写）</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="2" @click="logout">退出登录</Menu.Item>
      </Menu>
    </template>
  </Dropdown>
</template>

<style lang="scss" scoped>
.right {
  width: 160px;
  white-space: nowrap;
  float: right;
}
.hover-con {
  cursor: pointer;
}
.username {
  padding-left: 10px;
}
</style>
