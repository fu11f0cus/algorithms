def fact(n):
    if n == 0 or n == 1:
        return 1;
    return n * fact(n - 1)


def task(n):
    if n < 0:
        return 0
    if n == 0:
        return 1
    
    return task(n - 1) + task(n - 2) + task(n - 3)

print(task(12));