# دليل النشر والاستضافة

## متطلبات النشر

- Node.js 18 أو أحدث
- pnpm 10 أو أحدث
- حساب على منصة استضافة (Vercel, Netlify, Railway, إلخ)

## خطوات النشر على GitHub

### 1. إنشاء مستودع جديد على GitHub
- اذهب إلى https://github.com/new
- أنشئ مستودع باسم `salah-salem-butcher`
- اختر "Public" أو "Private" حسب الحاجة
- لا تختر "Initialize with README" (لأننا لدينا README بالفعل)

### 2. رفع الملفات إلى GitHub
```bash
git clone https://github.com/yourusername/salah-salem-butcher.git
cd salah-salem-butcher
cp -r /path/to/exported/files/* .
git add .
git commit -m "Initial commit: Salah Salem Butcher Shop website"
git push -u origin main
```

## خيارات الاستضافة

### 1. Vercel (الأفضل - مجاني)
```bash
npm i -g vercel
vercel
```

### 2. Netlify
1. اذهب إلى https://app.netlify.com
2. اختر "Add new site" → "Import an existing project"
3. اختر GitHub والمستودع

### 3. Railway
1. اذهب إلى https://railway.app
2. اختر "New Project" → "Deploy from GitHub"

### 4. Render
1. اذهب إلى https://render.com
2. اختر "New" → "Web Service"

## إعدادات البناء

- **Build Command**: `pnpm build`
- **Start Command**: `pnpm start`
- **Output Directory**: `dist/public`

## متغيرات البيئة

لا توجد متغيرات مطلوبة حاليًا.

## التحديثات المستقبلية

```bash
git add .
git commit -m "Update: [وصف التحديث]"
git push
```

## استكشاف الأخطاء

- **Cannot find module**: `pnpm install`
- **Port already in use**: `pnpm dev -- --port 3001`
- **Build failed**: `pnpm check` ثم `pnpm build`
