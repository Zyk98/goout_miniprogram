const cloud = require("wx-server-sdk");
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV,
});

exports.main = async (event, context) => {
  const db = cloud.database();
  return await db.collection("user").add({
    // data 字段表示需新增的 JSON 数据
    data: {
      //_id: event.id,
      _stuId: event.stuId,
      _stuName: event.stuName,
      _stuCloudImg: event.stuCloudImg,
    },
  });
};
