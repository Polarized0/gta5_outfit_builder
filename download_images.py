import os

path = "public/items/undershirt/male"

from os.path import isfile, join
onlyfiles = [f for f in os.listdir(path) if isfile(join(path, f))]

for filename in onlyfiles:
    new_name = filename.replace("96px", "120px")
    os.rename(path + "/" + filename, path + "/" + new_name)