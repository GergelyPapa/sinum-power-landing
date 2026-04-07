# Deployment Guide - SINUM POWER Landing Page

## Quick Start - Local Development

```bash
# 1. Navigate to project directory
cd sinum-power

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env.local

# 4. Run development server
npm run dev

# 5. Open in browser
# http://localhost:3000
```

## Production Build

```bash
# Build optimized production bundle
npm run build

# Start production server
npm start

# Server will run on http://localhost:3000
```

---

## Deployment Options

### 1. **Vercel (Recommended)**

Vercel is the creator of Next.js and provides the best integration and performance.

#### Option A: Git Integration
1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New..." > "Project"
4. Import your Git repository
5. Vercel automatically detects Next.js
6. Click "Deploy"
7. Your site will be live at `https://your-project.vercel.app`

#### Option B: CLI Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts to complete deployment
```

#### Environment Variables on Vercel
1. Go to your project settings on Vercel
2. Navigate to "Environment Variables"
3. Add these variables:
   - `NEXT_PUBLIC_OFFICIAL_SITE`: `https://dellamel.hu/SINUM_POWER`
   - `NEXT_PUBLIC_SITE_URL`: `https://your-domain.com`

---

### 2. **AWS Amplify**

```bash
# 1. Install AWS Amplify CLI
npm install -g @aws-amplify/cli

# 2. Configure Amplify
amplify configure

# 3. Initialize Amplify in project
amplify init

# 4. Add hosting
amplify add hosting

# 5. Deploy
amplify publish
```

---

### 3. **Netlify**

#### Option A: Git Integration
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect your repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy

#### Option B: CLI Deployment
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

---

### 4. **Docker Deployment**

For any cloud platform supporting Docker:

```bash
# Build Docker image
docker build -t sinum-power-landing .

# Run locally
docker run -p 3000:3000 sinum-power-landing

# Push to registry (e.g., Docker Hub)
docker tag sinum-power-landing username/sinum-power-landing
docker push username/sinum-power-landing
```

Deploy with:
- **AWS ECS**: Push to ECR and create ECS service
- **Google Cloud Run**: `gcloud run deploy`
- **Azure Container Instances**: `az container create`
- **DigitalOcean**: Use App Platform or Kubernetes

---

### 5. **Self-Hosted / VPS**

#### Ubuntu/Debian Server

```bash
# 1. SSH into server
ssh root@your-server-ip

# 2. Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 3. Install Git
sudo apt-get install -y git

# 4. Clone repository
git clone https://github.com/yourusername/sinum-power.git
cd sinum-power

# 5. Install dependencies
npm install

# 6. Build
npm run build

# 7. Install PM2 (process manager)
npm install -g pm2

# 8. Start with PM2
pm2 start npm --name "sinum-power" -- start

# 9. Save PM2 configuration
pm2 save

# 10. Setup PM2 to restart on reboot
pm2 startup

# 11. Configure Nginx reverse proxy
# Create /etc/nginx/sites-available/sinum-power
# (See Nginx configuration below)

# 12. Enable Nginx site
sudo ln -s /etc/nginx/sites-available/sinum-power /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

#### Nginx Configuration

Create `/etc/nginx/sites-available/sinum-power`:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;
    
    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name your-domain.com www.your-domain.com;
    
    # SSL certificates (use Let's Encrypt with Certbot)
    ssl_certificate /etc/letsencrypt/live/your-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your-domain.com/privkey.pem;
    
    # SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    
    # Gzip compression
    gzip on;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss;
    
    # Proxy to Next.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

#### SSL Certificate with Let's Encrypt

```bash
# Install Certbot
sudo apt-get install -y certbot python3-certbot-nginx

# Obtain certificate
sudo certbot certonly --nginx -d your-domain.com -d www.your-domain.com

# Auto-renewal
sudo systemctl enable certbot.timer
```

---

### 6. **Railway**

```bash
# 1. Install Railway CLI
npm i -g @railway/cli

# 2. Login
railway login

# 3. Create project
railway init

# 4. Deploy
railway up

# Your app will be live at a railway.app domain
```

---

### 7. **Heroku**

```bash
# 1. Install Heroku CLI
# Download from https://devcenter.heroku.com/articles/heroku-cli

# 2. Login
heroku login

# 3. Create app
heroku create your-app-name

# 4. Set environment variables
heroku config:set NEXT_PUBLIC_OFFICIAL_SITE=https://dellamel.hu/SINUM_POWER

# 5. Deploy
git push heroku main
```

---

## Custom Domain Setup

### For Vercel
1. Go to project settings
2. Navigate to "Domains"
3. Add custom domain
4. Update DNS records at your registrar

### For Other Platforms
Update your domain's DNS records to point to the platform's nameservers or IP address.

---

## Performance Optimization

### CDN & Caching
- Vercel includes automatic CDN
- For self-hosted, use CloudFlare (free)
  - Visit cloudflare.com
  - Add your site
  - Update nameservers at registrar

### Monitoring & Analytics
- Vercel Analytics (built-in)
- Vercel Web Vitals
- Google Analytics (optional, add to layout.tsx)

---

## SSL/TLS Certificates

- **Vercel**: Automatic with Let's Encrypt
- **Netlify**: Automatic
- **Railway**: Automatic
- **Self-hosted**: Use Let's Encrypt (free) with Certbot
- **AWS/Azure/GCP**: Use their certificate services

---

## Environment Variables

### Required
- `NEXT_PUBLIC_OFFICIAL_SITE`: `https://dellamel.hu/SINUM_POWER`

### Optional
- `NEXT_PUBLIC_SITE_URL`: For canonical URLs
- Analytics tracking IDs
- Custom domains

---

## Monitoring & Maintenance

### Uptime Monitoring
- Vercel has built-in uptime
- Use external services:
  - UptimeRobot (free)
  - StatusCake
  - Pingdom

### Log Monitoring
- Vercel: View in deployment logs
- Self-hosted: Check PM2 logs `pm2 logs`
- Docker: `docker logs container-id`

### Updates
```bash
# Check for dependency updates
npm outdated

# Update all dependencies
npm update

# Rebuild and redeploy
npm run build
# Follow your platform's deployment steps
```

---

## Troubleshooting

### Port Already in Use
```bash
# Find process on port 3000
lsof -i :3000

# Kill process
kill -9 <PID>
```

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Environment Variables Not Working
- Vercel: Prefix must be `NEXT_PUBLIC_` for client-side access
- Restart server after changing variables
- Check variables are set correctly in platform settings

---

## Security Checklist

✅ SSL/TLS enabled (HTTPS)
✅ Security headers set (in vercel.json)
✅ No sensitive data in code
✅ Environment variables for secrets
✅ Regular dependency updates
✅ CORS properly configured (if needed)
✅ Input validation on forms
✅ CSP headers configured

---

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs

---

## Contact

For SINUM POWER information: https://dellamel.hu/SINUM_POWER
