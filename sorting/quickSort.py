array = [1, 4, 6, 2, 3, 11, 4, 9, 6, 12, 24, 13];

def qSort(arr):
    if (len(arr) <= 1):
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]

    return qSort(left) + middle + qSort(right)

print(qSort(array))