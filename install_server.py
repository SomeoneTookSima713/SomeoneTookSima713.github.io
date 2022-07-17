WINDOWS = False

import os
print("Installing Python-Module \"requests\" for usage in this script if not already installed...")

if WINDOWS:
    os.system("python -m pip install requests")
else:
    os.system("python3 -m pip install requests")

import requests
import subprocess

print("Installing CraftBukkit 1.12...")
print("\tGetting file contents from cdn.getbukkit.org...")
resp = requests.get("https://cdn.getbukkit.org/craftbukkit/craftbukkit-1.12.jar")
print("\tCreating Server-Folder \"server\" and storing the downloaded file...")
os.mkdir("server")
with open("server/server.jar","wb") as f:
    f.write( resp.content )
print("\tStarting Server-Jar to generate files for further installation...")
os.chdir("./server/")
completedProc = subprocess.run('java -Xmx1024M -Xms1024M -jar server.jar',stderr=subprocess.PIPE)
if not completedProc.returncode == 0:
    print("\tError starting server. Install another version of java using the following command and then re-run this script:")
    print("\tapt-get install openjdk-8-jdk")
    print("\n\tIf this doesn't fix the error, there may be a different error than anticipated. Here is the error-log if that's the case:")
    print("\n",str(completedProc.stderr,"utf-8"))
    exit(0)
print("\tAgreeing to the EULA to be able to start the server...")
with open("eula.txt","w") as f:
    f.write("#By changing the setting below to TRUE you are indicating your agreement to our EULA (https://account.mojang.com/documents/minecraft_eula).\n#Sun Jul 17 15:10:26 CEST 2022\neula=true")
print("\nInstallation completed! Start the server once again to generate all necessary files for configurating the server. You can do this by using the following command:")
print("\tjava -Xmx<RAM>M -Xms<RAM>M -jar server.jar")
print("\tReplace <RAM> with the amount of RAM you want to dedicate to the Server in Megabytes. The recommended amount is at least 2 Gigabytes, so 2048 Megabytes. Here is an example of the completed command:")
print("\tjava -Xmx2048M -Xms2048M -jar server.jar")