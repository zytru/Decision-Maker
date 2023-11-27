import random

def flip_coin():
    user = input("Would you like to choose heads or tails?\n").lower()
    coin = random.randint(0,1)
    if user == "heads":
        choice = 0
        if choice == coin:
            print("Lucky you, it's heads!")
        else:
            print("Unlucky it's tails!")
    elif user == "tails":
        choice = 1
        if choice == coin:
            print("Lucky you, it's tails!")
        else:
            print("Unlucky it's heads!")
    else:
        print("Please put in heads or tails")

flip_coin()