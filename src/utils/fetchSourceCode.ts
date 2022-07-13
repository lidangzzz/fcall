import * as syncfetch from 'sync-fetch';

export function fetchFunctionSourceCodeSync(filePath: string): string {
  let result = syncfetch(filePath);
  return result.body.toString();
}