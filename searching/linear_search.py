array = [1, 2, 3, 2, 11, 4, 6, 7, 3, 5]

def linear_search(arr, el):
    for i in range(0, len(arr)):
        if arr[i] == el:
            return i
        
    return -1;

print(linear_search(array, 11));