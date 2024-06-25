<template>
  <div id="app">
    <NavBar v-if="!isFullScreen" />
    <router-view />
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import NavBar from './components/NavBar';

export default {
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {
      isFullScreen: false
    };
  },
  methods: {
    toggleFullscreen() {
      console.log(111);
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    },
    handleFullscreenChange() {
      console.log(111);
      this.isFullScreen = document.fullscreenElement !== null;
    }
  },
  mounted() {
    // 添加keydown事件监听器来捕获F11键的按下
    document.addEventListener('keydown', (event) => {
      if (event.key === 'F11') {
        this.toggleFullscreen();
      }
    });

    // 添加fullscreenchange事件监听器来响应全屏状态的改变
    document.addEventListener('fullscreenchange', this.handleFullscreenChange);
  },
  beforeUnmount() {
    // 组件卸载前移除事件监听器
    document.removeEventListener('keydown', (event) => {
      if (event.key === 'F11') {
        this.toggleFullscreen();
      }
    });
    document.removeEventListener('fullscreenchange', this.handleFullscreenChange);
  }
}
</script>

<style>
/* 你可以在这里添加样式 */
</style>
