import { Map } from 'immutable';

export const initialState = {
  mainPage: new Map({
    loaded: false,
    new_robot_id: null,
    volume: "0.5",
    current_video_websocket_port: null,
    initialized_control_panel: false,
    movement_button_color_left: "#ff4081",
    movement_button_color_right: "#ff4081",
    movement_button_color_forward: "#ff4081",
    movement_button_color_backward: "#ff4081",
  }),
  activityBox: new Map({
    activity_messages: [{ command: 'first_message'  }],
    initialized_activity_page: false
  }),
  chat: new Map({
    chat_messages: [],
    initialized_chat: false
  }),
  chatDays: new Map({
    chat_messages: [],
    initialized_chat_days: false
  }),
  controlPanel: new Map({
    robot_statuses: {robot_statuses: [{}]}
  }),
  movementButton: new Map({
  }),
  moderatorPage: new Map({
    current_messages: [],
  }),
  xControl: new Map({
  }),
  xControlStatusBox: new Map({
  }),
  userProfile: new Map({
  }),
  messagesList: new Map({
    scrolled: false,
  }),
  loginPage: new Map({
  }),
  loginModal: new Map({
  }),
  donate: new Map({
  }),
  phoneNumberModal: new Map({
  }),
  snapshots: new Map({
    snapshots: []
  })
}
