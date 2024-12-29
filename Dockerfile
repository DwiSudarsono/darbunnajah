# Gunakan Node.js sebagai image dasar
FROM node:18

# Tentukan working directory
WORKDIR /app

# Salin file package.json dan package-lock.json ke container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Salin semua file ke container
COPY . .

# Jalankan aplikasi
CMD ["npm", "run", "dev"]

# Expose port aplikasi
EXPOSE 3000
