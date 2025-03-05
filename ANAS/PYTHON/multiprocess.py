import multiprocessing
import time
import os

def compute_square(n):
    print(f"Process {os.getpid()} computing square of {n}")
    time.sleep(1)  # Simulating a CPU-intensive task
    return n * n

if __name__ == "__main__":
    numbers = [1, 2, 3, 4, 5]
    num_cores = multiprocessing.cpu_count()  # Get number of CPU cores
    print(f"Number of CPU cores available: {num_cores}\n")

    # 1. Using a single core (1 process)
    start_time = time.time()
    with multiprocessing.Pool(processes=1) as pool:
        single_core_results = pool.map(compute_square, numbers)
    single_core_time = time.time() - start_time
    print(f"Single-core results: {single_core_results}")
    print(f"Single-core execution time: {single_core_time:.2f} seconds\n")

    # 2. Using multiple cores (all available cores)
    start_time = time.time()
    with multiprocessing.Pool(processes=num_cores) as pool:
        multi_core_results = pool.map(compute_square, numbers)
    multi_core_time = time.time() - start_time
    print(f"Multi-core results: {multi_core_results}")
    print(f"Multi-core execution time: {multi_core_time:.2f} seconds")
