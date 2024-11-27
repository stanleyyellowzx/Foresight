import filecmp
import os

file1 = './datatextfiles/pokemonmoves.txt'
file2 = "./datatextfiles/pokemonmoveswithcheck.txt"

if filecmp.cmp(file1, file2, shallow=False):
    print("The files have the same content.")
else:
    print("The files have different content.")