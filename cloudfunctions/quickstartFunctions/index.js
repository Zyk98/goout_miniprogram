const getOpenId = require("./getOpenId/index");
const addStu = require("./addStu/index");

// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.type) {
    case "getOpenId":
      return await getOpenId.main(event, context);
    case "addStu":
      return await addStu.main(event, context);
  }
};
