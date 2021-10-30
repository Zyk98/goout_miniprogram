//获取当前时间
//格式：2020/9/18 20:03:03
function getNowTime() {
  let now = new Date();
  let time = new Array(3);
  time[0] = now.getHours();
  time[1] = now.getMinutes();
  time[2] = now.getSeconds();

  for (let i = 0; i < 3; i++) {
    if (time[i] < 10) {
      time[i] = "0" + time[i];
    }
  }
  return time;
}

function formatSeconds(value) {
  let result = parseInt(value);
  let h =
    Math.floor(result / 3600) < 10
      ? "0" + Math.floor(result / 3600)
      : Math.floor(result / 3600);
  let m =
    Math.floor((result / 60) % 60) < 10
      ? "0" + Math.floor((result / 60) % 60)
      : Math.floor((result / 60) % 60);
  let s =
    Math.floor(result % 60) < 10
      ? "0" + Math.floor(result % 60)
      : Math.floor(result % 60);

  let res = "";
  if (h !== "00") res += `${h}h`;
  if (m !== "00") res += `${m}:`;
  res += `${s}`;
  return res;
}

function getDate() {
  let pre_date = "";
  let pre_month = "";
  let now = new Date();
  var date = now.getDate();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  if (date < 10) pre_date = "0";
  if (month < 10) pre_month = "0";
  return year + "年" + pre_month + month + "月" + pre_date + date + "日";
}

function getMyDate() {
  return getDate() + getNowTime();
}

export { getNowTime, getDate, formatSeconds, getMyDate };
