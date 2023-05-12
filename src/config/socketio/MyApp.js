var socket = null;
var user_id = "";
var meeting_id = "";
const _init = (uid, mid) => {
  user_id = uid;
  meeting_id = mid;
  // $("#meetingContainer").show();
  // $("#me h2").text(user_id + "(Me)");
  document.title = user_id;

  console.log(user_id);
  // event_process_for_signaling_server();
  // eventHandeling();
};

export { _init };
