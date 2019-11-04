declare module 'react-native-zip-archive' {
  import { NativeEventSubscription } from 'react-native';
  export function zip(source: string, target: string): Promise<string>;
  export function unzip(source: string, target: string, charset?: string): Promise<string>;
  export function unzipWithPassword(assetPath: string, target: string, passowrd: string): Promise<string>;
  export function unzipAssets(assetPath: string, target: string): Promise<string>;
  export function createFilesListInZip(path: string, zipname: string): Promise<string>;
  export function subscribe(callback: ({ progress: number, filePath: string })): NativeEventSubscription;
}
