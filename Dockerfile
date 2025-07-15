FROM denoland/deno:alpine

WORKDIR /app

# Copy project files
COPY . .

# Pre-cache dependencies
RUN deno cache main.ts

# Expose the port your app runs on
EXPOSE 8000

# Start the Fresh app in production mode
CMD ["deno", "run", "-A", "main.ts"]

