export function isValidMapService(urlString:string) {
  return urlString.indexOf('/MapServer') === -1 ?  false : true;
}
