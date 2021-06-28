<template>
  <div class="game-type-container">
    <div v-if="!gameState.submitSuccess">
      <div class="radio-answers" v-bind:class="{ horizontal: type }">
        <div class="radio-item" v-for="(item, index) in questions" :key="index">
          <BaseRadio
            type="radio"
            :className="type"
            :value="item.value"
            name="name"
            :id="item.id"
            :keyAnswer="item.key"
            :textAnswer="item.value"
            @handleRadio="handleRadio"
            :error="
              answer.id === item.id &&
              correctAnswer !== answer.value &&
              triggerSubmit
            "
          />
        </div>
      </div>
      <div
        class="button-wrapper"
        :class="[{ 'has-error': triggerSubmit && triggerSubmit}, gameCountry.toLowerCase()]"
      >
        <BaseButton :medium="true" :disabled="disabled" @click="handleSubmit">Submit</BaseButton>
      </div>
    </div>

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
export default {
  props: {
    correctAnswer: {
      type: String,
      default: "A",
    },
    questions: {
      type: Array,
      default: [],
    },
    type: {
      type: Boolean,
      default: false,
    },
    className: {
      type: String,
      default: "",
    },
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
  },
  components: {
    FormPlusChanceAndPoint,
  },
  data() {
    return {
      triggerSubmit: false,
      showMessage: true,
      answer: {
        value: "",
        id: "",
      },
    };
  },
  computed: {
    ...mapState("country", ["gameState", "gameCountry", "attemptId"]),
    disabled() {
      return this.answer.id.length === 0
    }
  },
  methods: {
    handleRadio(value) {
      this.triggerSubmit = false;
      this.answer = value;
    },
    handleSubmit() {
      this.triggerSubmit = true;
      if (this.answer.value === this.correctAnswer) {
        this.showMessage = false;
        if (this.attemptId) {
          this.finishAttempt({ attemptId: this.attemptId });
          this.submitAnswer(this.answer);
        }
        
      } else {
        this.showMessage = true;
      }
    },
    clickHandle() {
      this.$emit("closeDialog");
    },
    handleReplay() {
      this.answer = {
        value: "",
        id: "",
      },
      this.replay();
    },
    ...mapActions("country", ["submitAnswer", "replay", "finishAttempt"]),
  },
};
</script>
<style lang="scss" scoped>
@import "GTrail360";
</style>