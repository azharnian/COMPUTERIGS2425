#include <iostream>
#include <vector>

void quicksort(std::vector<int>& arr, int low, int high);
int partition(std::vector<int>& arr, int low, int high);
void swap(int& a, int& b);

void quicksort(std::vector<int>& arr, int low, int high) {
    if (low < high) {
        int pivot_index = partition(arr, low, high);

        quicksort(arr, low, pivot_index - 1);
        quicksort(arr, pivot_index + 1, high);
    }
}

int partition(std::vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;

    for (int j = low; j < high; ++j) {
        if (arr[j] < pivot) {
            ++i;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    std::vector<int> arr = {3, 6, 8, 10, 1, 2, 1};
    int n = arr.size();

    quicksort(arr, 0, n - 1);

    std::cout << "Sorted array: ";
    for (int num : arr) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    return 0;
}
