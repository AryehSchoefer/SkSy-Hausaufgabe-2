# SkSy-Hausaufgabe-2
# Download mongodb on linux and start local dbdeamon
```bash
sudo apt-get install gnupg
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
```
find out what init system your plattfrom uses:
```bash
ps --no-headers -o comm 1
```
then start the deamon:
```bash
sudo systemctl start mongod
```
or
```bash
sudo sudo service mongod start
```
## Run the app in development mode 🧑‍💻
via npm:
```bash
npm install
npm run dev
```
via yarn:
```bash
yarn dev
```
