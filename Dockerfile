# Build stage
FROM node:20-alpine AS builder
WORKDIR /app

# Build argument para invalidar caché
ARG CACHE_BUST=1

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Install curl for health check (wget may not be available)
RUN apk add --no-cache curl

# Copy built files from builder stage
# Next.js con output: 'export' genera en 'out', no en 'dist'
COPY --from=builder /app/out /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

