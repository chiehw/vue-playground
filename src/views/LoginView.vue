<script setup lang="ts">
import { reactive } from 'vue'
import { useDevclientStore } from "@/stores/dav";
import { useRouter } from "vue-router"

const storeDav = useDevclientStore()
const router = useRouter()

const state = reactive({
  username: '',
  password: ''
})

function goToMain() {
  storeDav.username = state.username
  storeDav.password = state.password

  router.push('/home')
}
</script>

<template>
  <el-row justify="center">
    <el-col :span="6">
      <el-card class="box-card">
        <el-form label-width="80px">
          <el-form-item label="账号">
            <el-input v-model="state.username" placeholder="请输入账号"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" show-password v-model="state.password" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="goToMain">登陆</el-button>
            <el-button plain>取消</el-button>
          </el-form-item>
        </el-form>

      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped>
.card-part {
  display: flex;
  justify-content: center;
}

.box-card {
  width: 360px;
  height: 240px;
}
</style>
@/stores/dav