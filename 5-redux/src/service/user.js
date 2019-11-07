function delay(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}

export async function getUserInfo() {
  await delay(1500);
  return {
    name: 'this is name',
    desc: '这是一段描述～～SSR 中使用 redux'
  };
}
