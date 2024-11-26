def merge_sort(arr):
    if len(arr) <= 1:
        return arr

    # Split the array into two halves
    mid = len(arr) // 2
    left_half = arr[:mid]
    right_half = arr[mid:]

    # Recursively sort each half
    left_sorted = merge_sort(left_half)
    right_sorted = merge_sort(right_half)

    # Merge the sorted halves
    return merge(left_sorted, right_sorted)

def merge(left, right):
    sorted_array = []
    left_index, right_index = 0, 0

    # Merge the two halves while maintaining sorted order
    while left_index < len(left) and right_index < len(right):
        if left[left_index] < right[right_index]:
            sorted_array.append(left[left_index])
            left_index += 1
        else:
            sorted_array.append(right[right_index])
            right_index += 1

    # Append any remaining elements from the left half
    while left_index < len(left):
        sorted_array.append(left[left_index])
        left_index += 1

    # Append any remaining elements from the right half
    while right_index < len(right):
        sorted_array.append(right[right_index])
        right_index += 1

    return sorted_array

# Example usage
arr = [3, 6, 8, 10, 1, 2, 1]
sorted_arr = merge_sort(arr)
print(sorted_arr)
