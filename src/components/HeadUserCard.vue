<template>
  <div class="head-user-card">
    <a-dropdown :placement="placement" overlayClassName="" class=" ">
      <div class="user flex items-center text-md space-x-1 cursor-pointer">
        <img
          src="@/assets/vue.svg"
          alt=""
          class="w-7 h-7 rounded-full bg-slate-200"
          srcset=""
        /><span>SHITIN</span>
      </div>
      <template #overlay>
        <div class="mt-5">
          <a-menu selectable="false">
            <a-menu-item class="flex items-center">
              <div class="flex items-center space-x-2">
                <SettingOutlined /> <span>设置</span>
              </div>
            </a-menu-item>
            <a-menu-item>
              <div class="flex items-center space-x-2">
                <DisconnectOutlined /> <span>退出登录</span>
              </div>
            </a-menu-item>
          </a-menu>
        </div>
      </template>
    </a-dropdown>
  </div>
</template>
<script setup>
import { ref } from "vue";
import {  DisconnectOutlined, SettingOutlined } from "@ant-design/icons-vue";
</script>

