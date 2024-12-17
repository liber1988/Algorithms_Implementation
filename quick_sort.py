def quick_sort(arr):
    if len(arr) <= 1:  # Base case: A single element or empty list is already sorted
        return arr

    pivot = arr[len(arr) // 2]  # Choose the pivot (middle element)
    left = [x for x in arr if x < pivot]   # Elements smaller than pivot
    middle = [x for x in arr if x == pivot]  # Elements equal to pivot
    right = [x for x in arr if x > pivot]  # Elements larger than pivot

    # Recursively sort left and right, and combine them with the pivot
    return quick_sort(left) + middle + quick_sort(right)

# Example Usage
arr = [10, 7, 8, 9, 1, 5]
sorted_arr = quick_sort(arr)
print("Sorted Array:", sorted_arr)
