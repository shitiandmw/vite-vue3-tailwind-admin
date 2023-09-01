<script setup>
import { ref } from "vue";
import CommonLayout from "@/layouts/CommonLayout.vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";

</script>

<template>
  <CommonLayout>
    
    <div class="pt-32 px-4 m-auto space-y-14 w-full md:w-120">
      <div class="space-y-2 flex flex-col items-center">
        <div class="text-3xl font-bold flex items-center space-x-2">
          <img src="@/assets/vue.svg" class="w-14" /><span>Vue Antd Admin</span>
        </div>
        <div class="text-sm text-gray-500">眼健康系统商城登录</div>
      </div>
      <div class="space-y-6">
        <div
          class="bg-white w-full h-10 rounded border border-gray-200 flex items-center px-2 space-x-2"
        >
          <UserOutlined />
          <input
            type="text"
            class="flex-1 border-0 outline-none placeholder:text-sm placeholder:text-gray-300"
            placeholder="请输入账号"
          />
        </div>
        <div
          class="bg-white w-full h-10 rounded border border-gray-200 flex items-center px-2 space-x-2"
        >
          <LockOutlined />
          <input
            type="password"
            class="flex-1 border-0 outline-none placeholder:text-sm placeholder:text-gray-300"
            placeholder="请输入密码"
          />
        </div>
      </div>
      <div class="-translate-y-6 space-y-4">
        <button
          class="bg-primary text-white text-sm w-full rounded h-10 cursor-pointer active:opacity-95"
        >
          登录
        </button>
        <div class="text-sm text-gray-500 text-center">
          登录即视为同意用户协议
        </div>
      </div>
    </div>
  </CommonLayout>
</template>

<style scoped>
</style>
