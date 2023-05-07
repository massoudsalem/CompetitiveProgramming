import math
def kadane(A) :
    maximumSubArray = currentSubArray = -math.inf
    for i in range(len(A)):
        if currentSubArray + A[i] >= A[i] :
            currentSubArray = currentSubArray + A[i]
        else:
            currentSubArray = A[i]
        if currentSubArray >= maximumSubArray :
            maximumSubArray = currentSubArray

    return maximumSubArray
n = int(input())
for i in range(n):
    dump = input()
    array = [int(x) for x in input().split()]
    print(kadane(array))