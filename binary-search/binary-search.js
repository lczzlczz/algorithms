// Binary Search Template 1

const BinarySearch = (target, list) = {
  let left = 0, right = list.length - 1;
  while(left <= right) {
    const mid = (left + right) >>> 1;
    if (list[mid] === target) {
      return list[mid]; // find the target
    } else if (list[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}
