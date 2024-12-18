def binary_search(arr, target):
    left, right = 0, len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == target:
            return mid  # Target found at index `mid`
        elif arr[mid] < target:
            left = mid + 1  # Move to the right half
        else:
            right = mid - 1  # Move to the left half

    return -1  # Target not found

# Example Usage
sorted_array = [1, 3, 5, 7, 9, 11, 13]
target = 7

index = binary_search(sorted_array, target)
if index != -1:
    print(f"Element {target} found at index {index}")
else:
    print(f"Element {target} not found in the array")
