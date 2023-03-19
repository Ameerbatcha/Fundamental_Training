
# simple english statement to print a statement
print("Hello, World!")
print("""
      -----------------------------------------
      """)

# simple if condition [ true--> executes,false --> Donot Enter condition ]
if 5 > 2:
  print("Five is greater than two!")
print("""
      -----------------------------------------
      """)


# declaring a variable without type
x = 5
y = "Hello, World!"

print (type(x),type(y))
print("""
      -----------------------------------------
      """)

# assigning values to variables at once
a, b, c = "Orange", "Banana", "Cherry"
print(a)
print(b)
print(c)
print("""
      -----------------------------------------
      """)


# unpacking from an array
fruits = ["apple", "banana", "cherry"]
item1, item2, item3 = fruits
print(item1)
print(item2)
print(item3)
print("""
      -----------------------------------------
      """)


# printing variables combined together
statement1 = "Python"
statement2 = "is"
statement3 = "awesome"
print(statement1, statement2, statement3)
print("""
      -----------------------------------------
      """)


# example for Global Variable
somevar = "awesome"

def myfunc():
  somevar = "fantastic"
  print("Python is " + somevar)

myfunc()

print("Python is " + somevar)
print("""
      -----------------------------------------
      """)


# example for Global Variable by defining it by global keyword
avalue = "awesome"

def myfunc():
  global avalue
  avalue = "fantastic"

myfunc()

print("Python is " + avalue)
print("""
      -----------------------------------------
      """)


# Datatypes in python

                   # Text Type     :str
                   # Numeric Types :int, float, complex
                   # Sequence Types:list, tuple, range
                   # Mapping Type  :dict
                   # Set Types     :set, frozenset
                   # Boolean Type  :bool
                   # Binary Types  :bytes, bytearray, memoryview
                   # None Type     :NoneType

# giving a variable a value so that we know what data type wouild it be assigned under

x1 = 1    #--> int
y1 = 2.8  #--> float
z1 = 1j   #--> complex
print(type(x1))
print(type(y1))
print(type(z1))
print("""
      -----------------------------------------
      """)

# casting the datatype 
x1 =float(1)     #--> int to float so 1.0
y1 = int(2.8)  #--> float to int so 2
print(type(x1))
print(type(y1))
print("""
      -----------------------------------------
      """)


# slicing  a string
astring = "Hello, World!"
print(astring[2:5])
print("""
      -----------------------------------------
      """)

# negative indexing
astring = "Hello, World!"
print(astring[-5:-2])
print("""
      -----------------------------------------
      """)

# modifying strings by changing fonts
astring = "Hello, World!" 
print(astring.lower())
print(astring.upper())
print("""
      -----------------------------------------
      """)


# concatenating strings 
valuex = "Hello"
valuey = "World"
valuez = valuex + valuey
print(valuez)
print("""
      -----------------------------------------
      """)


# for looping

thislist = ["apple", "banana", "cherry"]
for x in thislist:
  print(x)
  print("""
      -----------------------------------------
      """)
  

# while
anotherlist = ["apple", "banana", "cherry"]
i = 0
while i < len(anotherlist):
  print(anotherlist[i])
  i = i + 1
  print("""
      -----------------------------------------
      """)
  


# creating  a new list by checking the condition wheter the word 'a' is present in it
fruitsfromheaven = ["apple", "banana", "cherry", "kiwi", "mango"]
newlist = []

for fruits in fruitsfromheaven:
  if "a" in fruits:
    newlist.append(fruits)

print(newlist)
print("""
      -----------------------------------------
      """)
