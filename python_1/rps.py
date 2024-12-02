import time
import random


winStreakPlayer = 0
winStreakComputer = 0
   
lossStreakPlayer = 0
lossStreakComputer = 0


playerScore = 0
computerScore = 0
   
   
def artComputer():
   
   
   
    if computerChoice == "rock":
        print("""
THE COMPUTER CHOSE:          
             
   
    _______
---'   ____)
     (_____)
     (_____)
     (____)
---.__(___)
""")
    elif computerChoice == "paper":
        print("""    
THE COMPUTER CHOSE:    
             
   
    _______
---'   ____)____
         ______)
         _______)
        _______)
---.__________)
              """)
       
    elif computerChoice == "scissors":
        print("""
THE COMPUTER CHOSE:          
             


   _______
---'   ____)____
         ______)
      __________)
     (____)
---.__(___)  
             
              """)  


def artPlayer():
   
   
   
    if playerChoice == "rock":
        print("""
    YOU CHOSE:              
             
        _______
    ---'   ____)
         (_____)
         (_____)
         (____)
    ---.__(___)
    """)
    elif playerChoice == "paper":
        print("""
    YOU CHOSE:
         
                 
       _______
    ---'   ____)____
             ______)
             _______)
            _______)
    ---.__________)
                  """)
       
    elif playerChoice == "scissors":
        print("""
    YOU CHOSE:
             
   
        _______
    ---'   ____)____
             ______)
          __________)
         (____)
    ---.__(___)  
             
                  """)




def playerWinChampAscii():
    print("""You win THE CHAMPIONSHIPS! (you beat the game!)
           
                                  ___________
                            .---'::'        `---.
                           (::::::'              )
                           |`-----._______.-----'|
                           |              :::::::|
                          .|               ::::::!-.
                          \|               :::::/|/
                           |               ::::::|
                           | Special CHAMP Award:|
                           |    for EXCELLENCE:::|
                           |               ::::::|
                           |              .::::::|
                           J              :::::::F
                            \            :::::::/
                             `.        .:::::::'
                               `-._  .::::::-'
                                 
                                   |  :::|
                                   F   ::J
                                  /     ::\                                      
                             __.-'      :::`-.__
                            (____________::::::_)
         """)
   
def computerWinChampAscii():
    print("""
 __          ______  _____   _____ _______       _____  _            __     ________ _____         ____  ______                _      _           _______ _____ __  __ ______            __
 \ \        / / __ \|  __ \ / ____|__   __|     |  __ \| |        /\\  \   / /  ____|  __ \       / __ \|  ____|         /\   | |    | |         |__   __|_   _|  \/  |  ____|        _ / /
  \ \  /\  / / |  | | |__) | (___    | |        | |__) | |       /  \\  \_/ /| |__  | |__) |     | |  | | |__           /  \  | |    | |            | |    | | | \  / | |__          (_) |
   \ \/  \/ /| |  | |  _  / \___ \   | |        |  ___/| |      / /\ \\    / |  __| |  _  /      | |  | |  __|         / /\ \ | |    | |            | |    | | | |\/| |  __|           | |
    \  /\  / | |__| | | \ \ ____) |  | |        | |    | |____ / ____ \| |  | |____| | \ \      | |__| | |           / ____ \| |____| |____        | |   _| |_| |  | | |____         _| |
     \/  \/   \____/|_|  \_\_____/   |_|        |_|    |______/_/    \_\_|  |______|_|  \_\      \____/|_|          /_/    \_\______|______|       |_|  |_____|_|  |_|______|       (_) |
                                                                                                                                                                                       \_
          """)


def timeSleep():
    time.sleep(.4)


def championships():
    global playerScore, computerScore, winStreakPlayer, winStreakComputer, lossStreakPlayer, lossStreakComputer
   
    winStreakPlayer = 0
    winStreakComputer = 0
   
    lossStreakPlayer = 0
    lossStreakComputer = 0


    playerScore = 0
    computerScore = 0
   
    print("Welcome to  ")








    time.sleep(.5)








    print("""
       _______
    ---'   ____)
         (_____)
         (_____)
         (____)
    ---.__(___)
    """)








    time.sleep(.5)








    print("""








       _______
    ---'   ____)____
             ______)
             _______)
           _______)
    ---.__________)
    """)








    time.sleep(.5)








    print("""








      _______
    ---'   ____)____
             ______)
          __________)
         (____)
    ---.__(___)""")








    time.sleep(.6)








    print("  _____ _    _          __  __ _____ _____ ____  _   _  _____    ")
    timeSleep()
    print(" / ____| |  | |   /\   |  \/  |  __ \_   _/ __ \| \ | |/ ____| ")
    timeSleep()
    print("| |    | |__| |  /  \  | \  / | |__) || || |  | |  \| | (___    ")
    timeSleep()
    print("| |    |  __  | / /\ \ | |\/| |  ___/ | || |  | | . ` |\___ \  ")
    timeSleep()
    print("| |____| |  | |/ ____ \| |  | | |    _| || |__| | |\  |____) | ")
    timeSleep()
    print(" \_____|_|  |_/_/    \_\_|  |_|_|   |_____\____/|_| \_|_____/")




    time.sleep(1.04)

    print(" ")


    print("DRAMATIC MUSIC PLAYS")


    time.sleep(2.2)


    print(" ")






    while playerScore < 7 or computerScore < 7:
 
       
       
       


        playerChoice = input("Do you want to choose rock, paper, or scissors? ")








        elementList = ["rock", "paper", "scissors"]
        computerChoice = random.choice(elementList)




        time.sleep(.05)




        rollAnimation()
 
        print("--------------------------------------------------------")
       
        if playerChoice == "rock":
            print("""
    YOU CHOSE:              
             
        _______
    ---'   ____)
         (_____)
         (_____)
         (____)
    ---.__(___)
    """)
        elif playerChoice == "paper":
            print("""
    YOU CHOSE:
         
                 
       _______
    ---'   ____)____
             ______)
             _______)
            _______)
    ---.__________)
                  """)
       
        elif playerChoice == "scissors":
            print("""
    YOU CHOSE:
             
   
        _______
    ---'   ____)____
             ______)
          __________)
         (____)
    ---.__(___)  
             
                  """)
           
        time.sleep(.5)




        if computerChoice == "rock":
            print("""
THE COMPUTER CHOSE:          
             
   
    _______
---'   ____)
     (_____)
     (_____)
     (____)
---.__(___)
""")
        elif computerChoice == "paper":
            print("""    
THE COMPUTER CHOSE:    
             
   
    _______
---'   ____)____
         ______)
         _______)
        _______)
---.__________)
              """)
       
        elif computerChoice == "scissors":
            print("""
THE COMPUTER CHOSE:          
             


   _______
---'   ____)____
         ______)
      __________)
     (____)
---.__(___)  
             
              """)
   
       
 
        time.sleep(.75)
 
        print("--------------------------------------------------------")
 
 
 
        #When player wins a round
        if playerChoice == "rock" and computerChoice == "scissors" or playerChoice == "paper" and computerChoice == "rock" or playerChoice == "scissors" and computerChoice == "paper":
            playerScore += 1
            print("You won this round!")
            scoreboard()
            streak(playerChoice, computerChoice)
 
       
            print("--------------------------------------------------------")
     
   #When computer wins a round
        elif playerChoice == "rock" and computerChoice == "paper" or playerChoice == "scissors" and computerChoice == "rock" or playerChoice == "paper" and computerChoice == "scissors":
            computerScore += 1
            print("You lost this round!")
            scoreboard()
            streak(playerChoice, computerChoice)
   
       
            print("--------------------------------------------------------")
     
   #When there is a tie
        elif playerChoice == "rock" and computerChoice == "rock" or playerChoice == "paper" and computerChoice == "paper" or playerChoice == "scissors" and computerChoice == "scissors":
            print("You both tied!")
            scoreboard()
            streak(playerChoice, computerChoice)
   
       
        print("--------------------------------------------------------")
 


 
        print("⬇️  ⬇️  ⬇️")




        print(" ")
 
        if playerScore == 7:
            playerWinChampAscii()
            break
       
        if computerScore == 7:
            computerWinChampAscii()
            break














def rollAnimation():
    print("Drumroll... 🥁 ")
    time.sleep(.1)
    print("             🥁 ")
    time.sleep(.1)
    print("              🥁 ")
    time.sleep(.1)
    print("             🥁 ")
    time.sleep(.1)
    print("            🥁 ")
    time.sleep(.1)
    print("             🥁 ")
    time.sleep(.1)
    print("              🥁 ")
    time.sleep(.1)
    print("             🥁 ")
    time.sleep(.1)
    print("            🥁 ")


def compWinAscii():
   


   print("""THE COMPUTER WON...
         
  _______________                        |*\_/*|________
 |  ___________  |     .-.     .-.      ||_/-\_|______  |
 | |           | |    .****. .****.     | |           | |
 | |   0   0   | |    .*****.*****.     | |   0   0   | |
 | |     -     | |     .*********.      | |     -     | |
 | |   \___/   | |      .*******.       | |   \___/   | |
 | |___     ___| |       .*****.        | |___________| |
 |_____|\_/|_____|        .***.         |_______________|
   _|__|/ \|_|_.............*.............._|________|_
  / ********** \                          / ********** \
/  ************  \                      /  ************  \
--------------------                    --------------------
         """)
 












def playerWinAscii():
   print("""You win!
           
                                  ___________
                            .---'::'        `---.
                           (::::::'              )
                           |`-----._______.-----'|
                           |              :::::::|
                          .|               ::::::!-.
                          \|               :::::/|/
                           |               ::::::|
                           | Special Flonk Award:|
                           |    for Silliness::::|
                           |               ::::::|
                           |              .::::::|
                           J              :::::::F
                            \            :::::::/
                             `.        .:::::::'
                               `-._  .::::::-'
                                 
                                   |  :::|
                                   F   ::J
                                  /     ::\                                      
                             __.-'      :::`-.__
                            (____________::::::_)
         """)






def streak(playerChoice, computerChoice):
    global winStreakComputer, winStreakPlayer, lossStreakComputer, lossStreakPlayer  
   
   
   
   
    if playerChoice == "rock" and computerChoice == "scissors" or playerChoice == "paper" and computerChoice == "rock" or playerChoice == "scissors" and computerChoice == "paper":
        winStreakPlayer += 1
        lossStreakComputer += 1
       
        lossStreakPlayer = 0
        winStreakComputer = 0
       
        if winStreakPlayer >= 2:
            print(f"Player {winStreakPlayer}x win streak! ")  
       
        if lossStreakComputer >= 2:
            print(f"Computer {lossStreakComputer}x loss streak! ")        
               
       
    elif playerChoice == "rock" and computerChoice == "paper" or playerChoice == "scissors" and computerChoice == "rock" or playerChoice == "paper" and computerChoice == "scissors":
        lossStreakPlayer += 1
        winStreakComputer += 1
       
        lossStreakComputer = 0
        winStreakPlayer = 0
       
        if winStreakComputer >= 2:
            print(f"Computer {winStreakComputer}x win streak! ")  
       
        if lossStreakPlayer >= 2:
            print(f"Player {lossStreakPlayer}x loss streak! ")
   


def winOrLose():
   global playerScore
   global computerScore
 
   #When player wins a round
   if playerChoice == "rock" and computerChoice == "scissors" or playerChoice == "paper" and computerChoice == "rock" or playerChoice == "scissors" and computerChoice == "paper":
       playerScore += 1
       print("You won this round!")
       scoreboard()
       streak(playerChoice, computerChoice)
 
       
       print("--------------------------------------------------------")
     
   #When computer wins a round
   elif playerChoice == "rock" and computerChoice == "paper" or playerChoice == "scissors" and computerChoice == "rock" or playerChoice == "paper" and computerChoice == "scissors":
       computerScore += 1
       print("You lost this round!")
       scoreboard()
       streak(playerChoice, computerChoice)
   
       
       print("--------------------------------------------------------")
     
   #When there is a tie
   elif playerChoice == "rock" and computerChoice == "rock" or playerChoice == "paper" and computerChoice == "paper" or playerChoice == "scissors" and computerChoice == "scissors":
       print("You both tied!")
       scoreboard()
       streak(playerChoice, computerChoice)
   
       
       print("--------------------------------------------------------")
       
       
       
       
       


   








def scoreboard():
    print(f"""                       ------------------
                  ----------------------------
            --------------------------------------
          ----------                     -----------
          --                                      --
        ----     PLAYER              COMPUTER     ----
_____------                                        ------_____
     ------         {playerScore}                    {computerScore}         ------
        ----                                      ----
          --                                      --
          ----------                     -----------  
            --------------------------------------  
                  ----------------------------  
                       ------------------
         
          """)


















print("Welcome to  ")








time.sleep(.5)








print("""
   _______
---'   ____)
     (_____)
     (_____)
     (____)
---.__(___)
""")








time.sleep(.5)








print("""








   _______
---'   ____)____
         ______)
         _______)
        _______)
---.__________)
""")








time.sleep(.5)








print("""








   _______
---'   ____)____
         ______)
      __________)
     (____)
---.__(___)""")








time.sleep(.6)








print("""
   
     In this game, you will play by the classic rules, but the first one who wins 5 rounds
     gets a trophy!
   
     """)








playerScore = 0
computerScore = 0








while playerScore < 5 or computerScore < 5:
 
   time.sleep(.4)








   playerChoice = input("Do you want to choose rock, paper, or scissors? ")








   elementList = ["rock", "paper", "scissors"]
   computerChoice = random.choice(elementList)




   time.sleep(.05)




   rollAnimation()
 
   print("--------------------------------------------------------")




   artPlayer()
   
   time.sleep(.5)
   
   artComputer()
 
   time.sleep(.75)
 
   print("--------------------------------------------------------")
 
 
 
   winOrLose()
 


 
   print("⬇️  ⬇️  ⬇️")




   print(" ")
 
   if playerScore == 5:
       playerWinAscii()
       again = input("""
Since you won, you have the choice to go to the championships! If you choose to accept this offer, there will be
                    a game of first to 7 points... (spooky). If you win, you officially beat the game.
                    If you lose, well, then you have the title of worst player of rock paper scissors. (You really don't wanna lose this).
                    The stakes are high; WILL YOU MOVE TO THE CHAMPIONSHIPS? (y), (n) """)
       if again == "y":


           
           print("It seems like you've chosen the WARIOR PATH. ")
           time.sleep(1.3)
           
           print("You've come this far...")
           time.sleep(1.3)
           
           print("I wish you luck...")
           time.sleep(2.2)
           
           print("*Crowd cheering sounds ")
           
           time.sleep(4)
           championships()
           break
       else:
           print("Well, I guess you gave up... LIKE A LOSER! Goodbye for now. ")
           break
           
           
   if computerScore == 5:
       compWinAscii()
       break



