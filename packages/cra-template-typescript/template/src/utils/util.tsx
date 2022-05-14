/**
 * type: String、Number、Boolean、Null、Undefined、Array、Object、Map、Set、Function、Date、Promise、Error、FormData
 * useage: isType('Number')(1) // true
 */
export const isType = (type: string) => (target: any) =>
  `[object ${type}]` === Object.prototype.toString.call(target);

export function delay(timeout = 500) {
  return new Promise(res => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      res(true);
    }, timeout);
  });
}

export async function delayPromise(promise: Promise<any>, timeout = 500) {
  const [res] = await Promise.all([promise, delay(timeout)]);
  return res;
}
