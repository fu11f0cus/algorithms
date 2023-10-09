import math

array = [1, 10, 3, 5, 2, 6, 4, 11, 7];

def binarySearch(arr, el):
    start = -1
    end = len(arr)
    arr.sort()
    while end - start > 1:
        mid = math.floor((start + end) / 2)
        if arr[mid] == el: 
            return mid
        if arr[mid] > el:
            end = mid
        else:
            start = mid

    return -1

print(binarySearch(array, 12));