jsergio@LAPTOP-CBSQ8HH4 MINGW64 ~/Desktop/Workspace/JavaScript (master)
$ git init

jsergio@LAPTOP-CBSQ8HH4 MINGW64 ~/Desktop/Workspace/JavaScript (master)
$ git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        GitHub-Comandos.md
nothing added to commit but untracked files present (use "git add" to track)

jsergio@LAPTOP-CBSQ8HH4 MINGW64 ~/Desktop/Workspace/JavaScript (master)
$ git add *

jsergio@LAPTOP-CBSQ8HH4 MINGW64 ~/Desktop/Workspace/JavaScript (master)
$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   GitHub-Comandos.md

jsergio@LAPTOP-CBSQ8HH4 MINGW64 ~/Desktop/Workspace/JavaScript (master)
$ git commit -m "Criando a Estrutura JavaScript-Basico"
[master 19616a6] Criando a Estrutura JavaScript-Basico
 1 file changed, 2 insertions(+)
 create mode 100644 GitHub-Comandos.md

jsergio@LAPTOP-CBSQ8HH4 MINGW64 ~/Desktop/Workspace/JavaScript (master)
$ git remote add origin git@github.com:jssergio/JavaScript-Basico.git

jsergio@LAPTOP-CBSQ8HH4 MINGW64 ~/Desktop/Workspace/JavaScript (master)
$ git push origin master
Enter passphrase for key '/c/Users/js058/.ssh/id_ed25519':
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 8 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 482 bytes | 482.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To github.com:jssergio/JavaScript-Basico.git
   f19d0ef..19616a6  master -> master
   
jsergio@LAPTOP-CBSQ8HH4 MINGW64 ~/Desktop/Workspace/JavaScript (master)
$ git clone git@github.com:DianaMartine/curso-dio-sintaxe-basica-javascript.git
Cloning into 'curso-dio-sintaxe-basica-javascript'...
Enter passphrase for key '/c/Users/js058/.ssh/id_ed25519':
remote: Enumerating objects: 57, done.
remote: Counting objects: 100% (57/57), done.
remote: Compressing objects: 100% (54/54), done.
remote: Total 57 (delta 17), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (57/57), 225.59 KiB | 619.00 KiB/s, done.
Resolving deltas: 100% (17/17), done.
