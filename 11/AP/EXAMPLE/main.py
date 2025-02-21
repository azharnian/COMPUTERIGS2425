class Person:

    def __init__(self):
        self.name = "Bob"

    def __str__(self):
        return f'My name is {self.name}'

person = Person()
print(person)