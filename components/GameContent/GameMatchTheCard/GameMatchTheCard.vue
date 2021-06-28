<template>
  <div id="match-the-cartd" class="match-the-cartd">
    <!-- Form Game -->
    <div v-if="!gameState.submitSuccess" :class="gameCountry.toLowerCase()">
      <div class="match-the-cartd__container">
        <div class="match-the-cartd__col">
          <div class="typeGame typeGame--text" v-if="gameType === 'text'">
            <div class="item" v-for="item in imgResult" :key="item.id">
              <span class="text__col">
                {{ item.key }}
              </span>
            </div>
          </div>
          <div v-else class="typeGame">
            <div
              class="item item--img"
              v-for="item in imgResult"
              :key="item.id"
            >
              <img
                :src="require('~/assets/images/' + item.key)"
                :alt="item.value"
              />
            </div>
          </div>
        </div>
        <div class="match-the-cartd__col match-the-cartd__wrapper">
          <draggable
            class="v-tabs__container"
            v-model="answers"
            v-bind="dragOptions"
            @start="isDragging = true"
            @end="isDragging = false"
          >
            <transition-group type="transition">
              <div
                class="item item--text draggable"
                v-for="item in answers"
                :key="item.id"
              >
                <div class="item__hold-on">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span class="text">
                  {{ item.value }}
                </span>
              </div>
            </transition-group>
          </draggable>
        </div>
      </div>
      <div v-if="error" class="type-err">
        <p>Oops. Please try again.</p>
      </div>
      <Button
        :customClass="`btnSubmit`"
        type="button"
        @click="handleCheckResult"
        >Submit</Button
      >
    </div>

    <!-- Plus Chance -->
    <FormPlusChanceAndPoint
      :gameState="gameState"
      :title="title"
      @closeDialog="clickHandle"
      @handleReplay="handleReplay"
      :textLucky="textLucky"
      :gameCountry="gameCountry"
    />
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import FormPlusChanceAndPoint from "~/components/FormPlusChanceAndPoint/FormPlusChanceAndPoint.vue";
import data from "~/assets/mockup/data.json";
import Button from "~/components/BaseButton/BaseButton.vue";
import _ from "lodash";
import draggable from "vuedraggable";
export default {
  data() {
    return {
      error: false,
      answers: [],
      imgResult: [],
      dataJson: data,
      resultCompare: [],
    };
  },
  components: {
    FormPlusChanceAndPoint,
    Button,
    draggable,
  },
  props: {
    textLucky: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    closeDialog: {
      type: Function,
      default: (_) => _,
    },
    src: {
      type: String,
      default: "",
    },
    srcAfter: {
      type: String,
      default: "",
    },
    gameId: {
      type: String,
      default: "",
    },
    finalResult: {
      type: Array,
      default: [],
    },
    gameType: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapState("country", ["gameState", "gameCountry", "attemptId"]),
    dragOptions() {
      return {
        animation: 0,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },
  },
  methods: {
    ...mapActions("country", [
      "submitAnswer",
      "replay",
      "getAttemptId",
      "finishAttempt",
    ]),

    handleCheckResult() {
      const draggables = document.querySelectorAll(".text");
      let result = [];
      draggables.forEach((draggable) => {
        result.push(draggable.innerHTML.trim());
      });
      const finalResult = _.isEqual(result, this.finalResult);
      if (finalResult) {
        this.error = false;
        this.handleSubmit();
        this.finishAttempt({ attemptId: this.attemptId });
      } else {
        this.error = true;
      }
    },

    handleSubmit() {
      this.submitAnswer();
    },
    clickHandle() {
      this.$emit("closeDialog");
    },
    handleReplay() {
      this.replay();
      const data = this.dataJson;
      this.answers = data[this.gameCountry].games.answers;
      this.imgResult = data[this.gameCountry].games.answers;
    },
  },
  mounted: function () {
    const data = this.dataJson;
    this.answers = data[this.gameCountry].games.answers;
    this.imgResult = data[this.gameCountry].games.answers;
  },
  destroyed: function () {},
};
</script>
<style lang="scss" scoped>
@import "./GameMatchTheCard.scss";
</style>