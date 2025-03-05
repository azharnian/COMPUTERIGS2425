import threading
import time

def task(name, delay):
    for i in range(5):
        time.sleep(delay)  # Simulating an I/O-bound task
        print(f"Task {name}: Step {i+1}")

# Benchmarking Single-threaded Execution
start_time = time.time()

task("Single", 1)  # Running the task sequentially
task("Single", 1.5)

single_thread_time = time.time() - start_time
print(f"Single-thread execution time: {single_thread_time:.2f} seconds\n")

# Benchmarking Multi-threaded Execution
start_time = time.time()

thread1 = threading.Thread(target=task, args=("A", 1))
thread2 = threading.Thread(target=task, args=("B", 1.5))

thread1.start()
thread2.start()

thread1.join()
thread2.join()

multi_thread_time = time.time() - start_time
print(f"Multi-thread execution time: {multi_thread_time:.2f} seconds")
