# Etapa de build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Etapa de serve (Nginx)
FROM nginx:1.27-alpine
# Config Nginx para SPA (fallback a index.html)
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copia el build de Vite
COPY --from=builder /app/dist /usr/share/nginx/html
# Exponer puerto
EXPOSE 80
# Salud simple
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://127.0.0.1/ || exit 1
