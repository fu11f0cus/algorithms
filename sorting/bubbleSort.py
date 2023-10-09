array = [1, 4, 6, 2, 3, 11, 4, 9, 6, 12, 24, 13];

def bubbleSort(arr):
    for i in range(0, len(arr)):
        for j in range(0, len(arr) - i - 1):
            if arr[j] > arr[j + 1]:
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
    return arr

print(bubbleSort(array))