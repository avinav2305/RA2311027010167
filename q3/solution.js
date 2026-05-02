// 1. Two Sum
function twoSum(nums, target) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    const comp = target - nums[i]
    if (map[comp] !== undefined) return [map[comp], i]
    map[nums[i]] = i
  }
}
console.log(twoSum([2,7,11,15], 9)) // [0,1]

// 2. Has duplicate
function hasDuplicate(arr) {
  return new Set(arr).size !== arr.length
}
console.log(hasDuplicate([1,2,3,1])) // true

// 3. Reverse string
function reverse(str) {
  return str.split("").reverse().join("")
}
console.log(reverse("hello")) // olleh

// 4. Char frequency
function charFreq(str) {
  const freq = {}
  for (let c of str) freq[c] = (freq[c] || 0) + 1
  return freq
}
console.log(charFreq("hello")) // {h:1, e:1, l:2, o:1}