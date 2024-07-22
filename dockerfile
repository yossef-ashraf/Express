# استخدام الصورة الأساسية Node.js
FROM node:14

# تعيين مجلد العمل داخل الحاوية
WORKDIR /usr/src/app

# نسخ package.json و package-lock.json
COPY package*.json ./

# تثبيت التبعيات
RUN npm install

# نسخ باقي ملفات التطبيق
COPY . .

# تعيين المنفذ الذي سيتم الاستماع عليه
EXPOSE 3000
# Command to run the application
# CMD ["npm", "start"]
CMD ["node", "index.js"]
