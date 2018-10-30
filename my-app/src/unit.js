export function getRedirectPath({ type, avater }) {
  // 根据type值跳转到/boss或者/genius
  // 根据avatar是否存在跳转到是否需要完善信息
  let url = (type === 'boss') ? '/boss' : '/genius';
  if (!avater) {
    url += 'info';
  }
  return url;
}