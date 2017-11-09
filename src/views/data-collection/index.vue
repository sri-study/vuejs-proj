<template>
  <div>
    <button class="button block" @click="toggle">{{ btnTitle }}</button>

    <div class="collection_box">
      <h2>VUE.JS 공식</h2>
      <section>
        <a href="https://kr.vuejs.org/" target="_blank">https://kr.vuejs.org</a>
        <b-message title="Infomation" :active="isActive">
          공식 홈페이지
        </b-message>
      </section>
      <section>
        <a href="https://vuejs-kr.github.io/" target="_blank">https://vuejs-kr.github.io/</a>
        <b-message title="Infomation" :active="isActive">
          Vue.js 한국 사용자 모임
        </b-message>
      </section>
    </div>

    <div class="collection_box">
      <h2>API 자료</h2>
      <section>
        <a href="https://buefy.github.io/#/documentation/start" target="_blank">https://buefy.github.io/#/documentation/start</a>
        <b-message title="Infomation" :active="isActive">
          UI 디자인 - buefy
        </b-message>
      </section>
    </div>

    <div class="collection_box">
      <h2>스터디 자료</h2>
      <section>
        <a href="https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/overview" target="_blank">https://www.udemy.com/vuejs-2-the-complete-guide/learn/v4/overview</a>
        <b-message title="Infomation" :active="isActive">
          Max의 Vuejs 강좌 (영어/동영상/유료)
        </b-message>
      </section>
      <section>
        <a href="https://joshua1988.github.io/web_dev/vuejs-tutorial-for-beginner" target="_blank">https://joshua1988.github.io/web_dev/vuejs-tutorial-for-beginner</a>
        <b-message title="Infomation" :active="isActive">
          Vue.js 입문서 - 프론트엔드 개발자를 위한
        </b-message>
      </section>
      <section>
        <a href="https://hanwong.github.io/2017/02/11/vue-resource-firebase01/" target="_blank">https://hanwong.github.io/2017/02/11/vue-resource-firebase01/</a>
        <b-message title="Infomation" :active="isActive">
          VueJS 공부하기
        </b-message>
      </section>
      <section>
        <a href="https://laracasts.com/series/learn-vue-2-step-by-step" target="_blank">https://laracasts.com/series/learn-vue-2-step-by-step</a>
        <b-message title="Infomation" :active="isActive">
          Learn vue2 step-by-step (영어/동영상/무료)
        </b-message>
      </section>
    </div>

    <div class="collection_box">
      <h2>기타 자료</h2>
      <section>
        <a href="/"></a>
        <b-message title="Infomation" :active="isActive">

        </b-message>
      </section>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dataCollection',
    data() {
      return {
        isActive: false,
        btnTitle: 'Info 전체 열기'
      }
    },
    methods : {
      toggle: function () {
        if (this.isActive === false){
          this.btnTitle = 'Info 전체 닫기'
        }else {
          this.btnTitle = 'Info 전체 열기'
        }
        this.isActive = !this.isActive
      }
    }
  }
</script>

<style scoped>
  .collection_box {position:relative;margin-bottom:40px;padding:10px 10px 20px;border:1px solid #714dd2}
  .collection_box h2 {position:absolute;top:-15px;padding:0 10px;background:#fff;}
  .collection_box section {margin-top:10px;}
</style>
