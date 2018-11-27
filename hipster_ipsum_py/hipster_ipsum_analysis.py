file = open('hipster_ipsum.txt')

def wordFreq ():
    glutenFreeMentions = 0
    coffeeMentions = 0
    wokeMentions = 0
    freqs = []
    for word in file.read().split():
        if word == str('coffee'):
            coffeeMentions += 1
        if word == str('Gluten-free'):
            glutenFreeMentions += 1
        if word == str('woke'):
            wokeMentions += 1
    freqs.append('coffee mentions= ' + str(coffeeMentions))
    freqs.append('gluten-free mentions = ' +str(glutenFreeMentions))
    freqs.append('woke mentions = ' +str(wokeMentions))
    return freqs

print(wordFreq())

