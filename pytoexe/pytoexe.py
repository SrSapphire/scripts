from tkinter import filedialog as fd
from os import system, remove
from shutil import rmtree

loop = 1
blue = "\033[34m"
green = "\033[92m"
red = "\033[91m"
white = "\033[1;97m"
colorf = "\033[m"

#def to clear the terminal
def clear():
    system("cls")\

#input to get .py name


while loop == 1:
    clear()
    print(f"{red}-{colorf}" * 50 + f"{green}\nSelect where's your .py on explorer\n{colorf}" + f"{red}-{colorf}" * 50)

    pydire = fd.askdirectory()
    clear()
    pyname = input(f"{green}Digit your .py name: (ex: code.py){colorf}\n{blue}-->{colorf}")
    clearname = f"{pydire}/{pyname[0:-3]}"

    select = input(f"Do you want a program with admin privilegies? y/n\n>> ")
    if select.lower() == "y":
        system(f"PyInstaller --onefile --uac-admin {pydire}\{pyname}")
    elif select.lower() == "n":
        system(f"PyInstaller --onefile {pydire}\{pyname}")

    rmtree(f"{pydire}/build")
    remove(f"{clearname}.spec")

    input(f"\n{green}Finalizado.{colorf}")
    clear()

