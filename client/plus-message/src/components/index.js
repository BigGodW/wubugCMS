import {createApp} from 'vue';
import Button from "./Button/Button.vue";
import Message from "./Message/Message.vue";
window.CHAN = {
  button: (id, props) => {
   createApp(Button, props).mount(id);
  },
  message: (id, props) => {
    createApp(Message, props).mount(id);
  }
};
