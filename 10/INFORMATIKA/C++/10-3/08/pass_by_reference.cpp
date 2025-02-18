#include <iostream>

void modifyArray(int (&arr)[5]) {  // Passing array by reference
    for (int i = 0; i < 5; i++) {
        arr[i] *= 2;  // Modify the array
    }
}

int main() {
    int numbers[5] = {1, 2, 3, 4, 5};

    std::cout << "Before modification: ";
    for (int n : numbers) {
        std::cout << n << " ";
    }

    modifyArray(numbers);

    std::cout << "\nAfter modification: ";
    for (int n : numbers) {
        std::cout << n << " ";
    }
    std::cout << std::endl;
    return 0;
}
