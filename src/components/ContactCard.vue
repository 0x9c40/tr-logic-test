<template>
  <div class="card" @click="toggleInterface">
    <div class="card__info">
      <div class="card__name">{{ name }}</div>
      <div class="card__phone">{{ phone }}</div>
    </div>
    <transition name="open">
      <div v-show="isInterfaceOpened" class="card__interface" @click.stop>
        <router-link :to="thisContactURL" class="card__edit">
          Info
        </router-link>
        <div class="card__delete" @click="isModalOpened = true">Delete</div>
      </div>
    </transition>
    <Modal :opened="isModalOpened" @close="isModalOpened = false">
      <div class="confirm-question">Are you sure?</div>
      <div class="confirm-buttons">
        <div class="confirm-buttons__button" @click="isModalOpened = false">
          Cancel
        </div>
        <div
          class="confirm-buttons__button confirm-buttons__button--delete"
          @click="onDelete"
        >
          Yes, delete.
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Modal from "./Modal.vue";

export default {
  name: "ContactCard",

  components: {
    Modal,
  },

  props: {
    contact: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      isInterfaceOpened: false,
      isModalOpened: false,
    };
  },

  computed: {
    thisContactURL() {
      return `/contact/${this.contact[0][1]}`;
    },

    name() {
      return this.contact[1][1];
    },

    phone() {
      return this.contact[2][1];
    },
  },

  methods: {
    ...mapActions(["deleteContact"]),

    toggleInterface() {
      this.isInterfaceOpened = !this.isInterfaceOpened;
    },

    onDelete() {
      this.deleteContact(this.contact[0][1]);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin-bottom: 16px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.36);
  cursor: pointer;
  transition: background-color 0.1s;

  &:hover {
    background-color: #f5f5f5;
  }

  &__info {
    display: flex;
    padding: 16px;
  }

  &__name,
  &__phone {
    width: 50%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__phone {
    text-align: right;
  }

  &__interface {
    display: flex;
    justify-content: flex-end;
    max-height: 40px;
    padding: 0 16px 16px;
    overflow: hidden;
  }

  &__edit {
    font-weight: bold;
    text-decoration: none;
  }

  &__delete {
    margin-left: 16px;
    font-weight: bold;
  }

  &__edit,
  &__delete {
    &:hover {
      color: #444;
    }
  }
}

.confirm-question {
  margin-bottom: 36px;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
}

.confirm-buttons {
  display: flex;
  justify-content: space-around;
  padding: 16px;

  &__button {
    padding: 4px 16px;
    border: 1px solid #444;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #f5f5f5;
    }
  }

  &__delete {
    font-weight: bold;
  }
}

.open-enter-active,
.open-leave-active {
  transition: max-height 0.2s, padding 0.2s, opacity 0.2s;
}

.open-enter,
.open-leave-to {
  max-height: 0;
  padding: 0 16px;
  opacity: 0;
}
</style>