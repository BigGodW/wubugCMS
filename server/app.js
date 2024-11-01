const Chanjs = require("chanjs");
const chan = new Chanjs();
chan.beforeStart(async () => {});
chan.start(async () => {
  console.log("ChanCMS 启动成功");
});
chan.run();
