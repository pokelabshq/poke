FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY . .
RUN npm link
EXPOSE 8765 8766 8770 8775 8777 8780 8790
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD poke status || exit 1
CMD ["poke", "status"]
