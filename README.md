# 💡 Aayush Tamang - Data Scientist Portfolio

A modern, interactive, and completely **FREE** portfolio website showcasing my data science projects, skills, and expertise.

## 🆓 100% FREE Stack

- **Next.js 14** - Free open-source framework
- **Tailwind CSS** - Free utility-first styling
- **Framer Motion** - Free animation library
- **TypeScript** - Free language
- **Vercel** - Free hosting (or GitHub Pages)

## ✨ Features

✅ Responsive design (mobile-first)  
✅ Smooth animations & transitions  
✅ Dark mode support  
✅ Fast performance  
✅ SEO optimized  
✅ Interactive components  
✅ Contact form (free options included)  
✅ Portfolio showcase

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed

### Installation

1. **Navigate to project folder**
   ```bash
   cd aayush-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
aayush-portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🎨 Customization

### Update Personal Information
Edit the content in component files:
- `Hero.tsx` - Main heading and CTA
- `About.tsx` - About section
- `Skills.tsx` - Skills list
- `Projects.tsx` - Projects showcase
- `Contact.tsx` - Contact info

### Change Colors
Modify Tailwind CSS classes or update `tailwind.config.ts`

### Add Projects
Update the `projects` array in `components/Projects.tsx`

## 📧 Contact Form Options (ALL FREE)

### Option 1: Formspree (50 free submissions/month)
1. Go to https://formspree.io/
2. Sign up (free)
3. Create a new form
4. Copy your form ID
5. Update `Contact.tsx` with your form ID:
   ```typescript
   const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
   ```

### Option 2: EmailJS (200 free emails/month)
```bash
npm install @emailjs/browser
```

### Option 3: Simple local implementation
Just log the data to console or email yourself

## 🚀 Deployment (ALL FREE)

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

Or:
1. Push to GitHub
2. Connect repo on vercel.com
3. Deploy automatically

### Deploy to GitHub Pages
```bash
npm run build
git add .
git commit -m "Deploy"
git push
```

## 🛠️ Build for Production

```bash
npm run build
npm start
```

## 📊 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

Open source - Use freely!

## 🤝 Contributing

Feel free to fork and customize!

---

**Made with ❤️ using free tools - Completely Open Source!**