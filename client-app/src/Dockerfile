FROM node:14-alpine AS builder
# ENV NODE_ENV production
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm  ci
# Copy app files
COPY . .
# Build the app
RUN npm run build

# CMD ["npm","run","build"]

# Bundle static assets with nginx
FROM nginx:alpine as production
ENV NODE_ENV production

# Copy built assets from builder
COPY --from=builder ./app/dist /usr/share/nginx/html
# Add your nginx.conf
COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
ENV PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080
# Start nginx
CMD ["nginx", "-g", "daemon off;"]