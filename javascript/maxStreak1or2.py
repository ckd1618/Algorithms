#this was designed to test the liklihood of seeing a repeated result, heads or tails (one or two)
#it tracks the maximum streak, in a game of first to 10 million either heads or tails

import random
one=0
two=0
i=1
maxStreak1 = 0
maxStreak2 = 0
currentStreak1 = 0
currentStreak2 = 0
while(i<20000000):
    x = random.randint(1,2)
    if x==1:
        one+=1
        currentStreak1 +=1
        currentStreak2 = 0
        if currentStreak1 > maxStreak1:
            maxStreak1 = currentStreak1
        oneStreak = True
        twoStreak = False
    elif x==2:
        two+=1
        currentStreak2 +=1
        currentStreak1 = 0
        if currentStreak2 > maxStreak2:
            maxStreak2 = currentStreak2
        twoStreak = True
        oneStreak = False
    
    if one == 10000000 or two == 10000000:
        break
    i+=1
    
print("one's: %s" % (one))
print("two's: %s" % (two))
print("maxStreak1: %s" % (maxStreak1))
print("maxStreak2 %s" % (maxStreak2))