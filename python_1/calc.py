def addition(firstNumber, secondNumber):
    sum = firstNumber + secondNumber
    print(f"{firstNumber} plus {secondNumber} = {sum} ")

def subtraction(firstNumber, secondNumber):
    difference = firstNumber - secondNumber
    print(f"{firstNumber} minus {secondNumber} = {difference} ")

def division(firstNumber, secondNumber):
    quotient = firstNumber / secondNumber
    print(f"{firstNumber} divided by {secondNumber} = {quotient} ")

def multiplication(firstNumber, secondNumber):
    product = firstNumber * secondNumber
    print(f"{firstNumber} times {secondNumber} = {product} ")



def main():
    loop = True

    while loop == True:

        allFeatures = ["1: Addition", "2: Subtraction", "3: Division", "4: Multiplication"]

        print("Here are the features in the application")
        print(" ")

        #start loop
        for currentFeature in allFeatures:
            print(currentFeature)

        print(" ")

        userOption = int(input("Please select an option: "))

    

        userFirstNumber = int(input("First Number: "))
        userSecondNumber = int(input("Second Number: "))

        if userOption == 1:
            addition(userFirstNumber, userSecondNumber)
    
        elif userOption == 2:
            subtraction(userFirstNumber, userSecondNumber)

        elif userOption == 3:
            division(userFirstNumber, userSecondNumber)

        elif userOption == 4:
            multiplication(userFirstNumber, userSecondNumber)

        print(" ")

main()