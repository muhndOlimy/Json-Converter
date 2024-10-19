import { JsonData, TableKey } from "../interfaces/common";

export function extractKeysForTable(arr: JsonData[]): TableKey[] {
    if (arr.length === 0 || typeof arr[0] !== 'object') {
      return [];
    }
  
    // Get the keys from the first object in the array
    const keys = Object.keys(arr[0]);
  
    // Map keys to the desired format
    return keys.map(key => ({
      field: key,
      header: key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ')  // Format header title
    }));
}