min = int(input())
max = int(input())

if min > max:
    min, max = max, min

sum = 0
for i in range(min+1, max):
    if i%2 != 0:
        sum += i

print(sum)