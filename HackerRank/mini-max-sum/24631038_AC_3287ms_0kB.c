array = [int(x) for x in input().split()]
array.sort()
print(f'{sum(array[:-1])} {sum(array[1:])}')