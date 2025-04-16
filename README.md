This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Proje Kurulumu ve Çalıştırma

### Ana Web Uygulaması

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

Uygulama http://localhost:3000 adresinde çalışmaya başlayacaktır.

### Sanity CMS Kurulumu

1. Sanity klasörüne gidin:
```bash
cd sanity
```

2. Sanity bağımlılıklarını yükleyin:
```bash
npm install
```

3. Sanity geliştirme sunucusunu başlatın:
```bash
npm run dev
```

Sanity Studio http://localhost:3333 adresinde çalışmaya başlayacaktır.

### Önemli Gereksinimler

- Node.js ve npm'in bilgisayarınızda kurulu olması gerekir
- Sanity CMS için bir hesap oluşturmanız gerekebilir
- `.env` dosyasında aşağıdaki yapılandırmaların olması gerekir:
  - Sanity Project ID
  - Sanity Dataset
  - Sanity API Token (gerekirse)




