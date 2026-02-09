# دليل الإعداد المحلي

## المتطلبات

- **Node.js**: 18.0.0 أو أحدث
- **pnpm**: 10.0.0 أو أحدث (أو npm/yarn)
- **Git**: لاستنساخ المستودع

## التثبيت

### 1. استنساخ المستودع
```bash
git clone https://github.com/yourusername/salah-salem-butcher.git
cd salah-salem-butcher
```

### 2. تثبيت المكتبات
```bash
pnpm install
```

أو إذا كنت تستخدم npm:
```bash
npm install
```

### 3. تشغيل خادم التطوير
```bash
pnpm dev
```

سيتم فتح الموقع على `http://localhost:3000`

## الأوامر المتاحة

| الأمر | الوصف |
|------|-------|
| `pnpm dev` | تشغيل خادم التطوير |
| `pnpm build` | بناء النسخة الإنتاجية |
| `pnpm start` | تشغيل النسخة الإنتاجية |
| `pnpm preview` | معاينة النسخة المبنية |
| `pnpm check` | التحقق من أخطاء TypeScript |
| `pnpm format` | تنسيق الكود |

## هيكل المشروع

```
salah-salem-butcher/
├── client/                 # الواجهة الأمامية
│   ├── public/            # الملفات الثابتة
│   ├── src/
│   │   ├── components/    # مكونات React
│   │   ├── pages/        # الصفحات
│   │   ├── contexts/     # React Contexts
│   │   ├── hooks/        # Custom Hooks
│   │   ├── lib/          # دوال مساعدة
│   │   ├── App.tsx       # المكون الرئيسي
│   │   ├── main.tsx      # نقطة الدخول
│   │   └── index.css     # الأنماط
│   └── index.html        # HTML الرئيسي
├── server/               # خادم Express
├── shared/               # ملفات مشتركة
├── package.json          # المكتبات
├── vite.config.ts       # إعدادات Vite
├── tsconfig.json        # إعدادات TypeScript
└── README.md            # التوثيق
```

## تعديل الموقع

### تعديل الصفحة الرئيسية
عدّل ملف `client/src/pages/Home.tsx`

### تعديل الأنماط العامة
عدّل ملف `client/src/index.css`

### إضافة مكونات جديدة
أنشئ ملف جديد في `client/src/components/`

### إضافة صفحات جديدة
أنشئ ملف جديد في `client/src/pages/` وأضفه إلى `client/src/App.tsx`

## استكشاف الأخطاء

### الخطأ: "Cannot find module '@/...'"
تأكد من تثبيت المكتبات:
```bash
pnpm install
```

### الخطأ: "Port 3000 is already in use"
استخدم منفذ مختلف:
```bash
pnpm dev -- --port 3001
```

### الخطأ: "TypeScript errors"
تحقق من الأخطاء:
```bash
pnpm check
```

### الخطأ: "Module not found"
تأكد من وجود المسارات الصحيحة في `tsconfig.json`

## الموارد

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [TypeScript Documentation](https://www.typescriptlang.org)
