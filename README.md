This project is just a demo how to use git

//git init: cai dat
//git status: kiem tra xem co file nao da commit chua
//git add : git add <filename> 
//git commit : commit tat ca cac file da add

//git log: xem lich su cac commit da dc tao
//git show : git show <id cua commit> : show noi dung cua commit

//git diff : xem noi dung cua nhung file duoc modified


//working directory: chua nhung file da thay doi
//staging area: vung chua nhung file da duoc a, chi nhung file nam trong staging area moi co the duoc commit
//git repository: luu nhung thay doi cua cac commit, luu tap hop cua cac commit


//git checkout(tren ubuntu)/restore(tren window) + <fileName> : xoa bo thay doi cua mot file chua duoc cho vao staging area  
//git  restore --staged <fileName> :  chuyen 1 file dang o trong staging area xuong working directory


// 	git checkout -b <branch name>: tao mot branch moi
// git branch : xem cac branch va xem minh dang dung o branch nao
//	git checkout <branch name>: chuyen cho dung hien tai sang branch khac
// git merge : merge B vao A (merge: sat nhap)
A <---- B1
git checkout A
git merge B

//git branch -D <branch name> : xoa mot branch

//git reset --soft <id commit> : unback commit ve trang thai o staging area
//git reset --mixed <id commit>: unback commit ve trang thai o working directory 
//git reset --hard <id commit> : bo han cai commit trc no di (becarefull when use it)
//git revert <id commit > : ( very dangerous)

// gitignore : bo qua mot so file neu khong muon commit no
 // cach dung .gitignore : tạo file gitignore , trong file này muốn bỏ qua file nào chỉ cần viết tên file đấy vào, nên dùng cho những file chua được commit

** up code len github
// git remote add origin + link repository da tao tren github
// git remote -v : hien ra danh sach cac remote 
// git push -u origin <branchName> 
// git push : push code moi len github


** luu tru thong tin dang nhap de khong phai nhap username & pass moi lan push code len git
//C1: onfig --golbal crendential.helper store : luu user & pass (khong ma hoa, de lo thong tin, khong nen dung)
//C2 : git config --golbal crendential.helper "cache -- timeout= 18000": sau 18000p moi phai nhap lai thong tin
//c3: ubuntu: google "gnome-keyring" hoac "git ssh"

//git clone + link repository tren git : clone cod tren git ve may
// git pull : pull code thay doi ve may



 ** pull request 
//1. git checkout -b <branch name> : tao mot branch moi
//2. git push origin <branch> : push branch len git
//3. create a pull request on Github
//4. review code
	4.1. review code online (github)
	4.2. fetch branch into local to test offline (optional)
	4.3. approve the pull request
//5. merge to master
