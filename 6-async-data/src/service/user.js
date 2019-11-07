function delay(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

export async function getUserInfo() {
  await delay(1500);
  return {
    name: '异步数据',
    desc: '这是一段描述～这里是异步的数据'
  };
}
