import numpy as np

arr = np.array([1, 2, 3, 4,5,6,7])

print(arr[1])
print(arr[2] + arr[3])
print(arr[1:5])
print(arr[4:])
print(arr.dtype)

arr2 = np.array(['apple', 'banana', 'cherry'])
print(arr2.dtype)

arr3 = np.array([[1, 2, 3, 4], [5, 6, 7, 8]])
print(arr3.shape)