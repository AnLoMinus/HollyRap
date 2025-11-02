# 🌐 דיפלוי - GitHub Pages

מדריך זה מסביר איך להפעיל את האתר ב-GitHub Pages.

## 📋 דרישות מוקדמות

1. **מאגר ב-GitHub** - המאגר צריך להיות ב-GitHub
2. **גישה להגדרות** - הרשאות של owner או admin למאגר

## 🚀 הפעלת GitHub Pages

### שלב 1: הגדרת GitHub Pages

1. עבור ל-**Settings** של המאגר ב-GitHub
2. לחץ על **Pages** בתפריט הצד
3. תחת **Source**, בחר:
   - **Branch:** `main` (או `master`)
   - **Folder:** `/ (root)`
4. לחץ **Save**

### שלב 2: המתן לפרסום

- GitHub יפרסם את האתר תוך מספר דקות
- תקבל הודעה כשהאתר מוכן

### שלב 3: גישה לאתר

האתר יהיה זמין ב:

```
https://anlominus.github.io/HollyRap/
```

או:

```
https://anlominus.github.io/HollyRap/index.html
```

## 📁 מבנה הקבצים

הקבצים צריכים להיות בשורש המאגר:

```
hollyrap/
├── index.html           # דף הבית
├── battles-archive.html # ארכיון באטלים
├── styles.css           # עיצוב ראשי
├── battles-archive.css  # עיצוב ארכיון
├── scripts.js           # JavaScript ראשי
├── battle-content.js    # תוכן באטלים
├── .nojekyll            # מניעת עיבוד Jekyll
└── assets/              # תמונות
    └── images/
```

## ⚙️ קבצי תצורה

### .nojekyll

קובץ `.nojekyll` חשוב מאוד! הוא אומר ל-GitHub Pages **לא** לעבד את האתר עם Jekyll.

בלי הקובץ הזה, GitHub Pages יכול לנסות לעבד את הקבצים עם Jekyll, מה שיכול לגרום לבעיות.

## 🔧 פתרון בעיות

### האתר לא נטען?

1. **בדוק את ה-Settings** - ודא ש-Pages מוגדר נכון
2. **בדוק את .nojekyll** - ודא שהקובץ קיים
3. **בדוק נתיבים** - ודא שהנתיבים בקבצים נכונים (יחסיים)
4. **חכה כמה דקות** - לפעמים לוקח זמן לעדכן

### תמונות לא נטענות?

1. **בדוק את הנתיבים** - ודא שהם יחסיים (לא מתחילים ב-`/`)
2. **בדוק את הגודל** - תמונות גדולות יכולות להיות איטיות
3. **בדוק את הפורמט** - PNG, JPG, SVG בדרך כלל עובדים

### קישורים לא עובדים?

1. **ודא שהקישורים יחסיים** - לא `http://` או `https://`
2. **בדוק את שמות הקבצים** - חשוב התאמה מדויקת
3. **ודא שהקבצים קיימים** - בדוק ב-GitHub

## 📝 עדכון האתר

לאחר כל שינוי:

1. **Commit** את השינויים
2. **Push** ל-GitHub
3. **המתן כמה דקות** - GitHub יעדכן את האתר אוטומטית

## 🌍 דומיין מותאם

אם יש לך דומיין מותאם:

1. צור קובץ **CNAME** בשורש המאגר
2. הוסף את שם הדומיין בקובץ
3. הגדר DNS בדומיין שלך להצביע ל-GitHub Pages

**דוגמה ל-CNAME:**

```
hollyrap.example.com
```

## 🔗 קישורים חשובים

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Jekyll Configuration](https://jekyllrb.com/docs/configuration/)

## ✅ רשימת בדיקה

לפני פרסום, ודא:

- [ ] כל הקבצים בשורש המאגר
- [ ] קובץ `.nojekyll` קיים
- [ ] הנתיבים בקבצים יחסיים
- [ ] GitHub Pages מוגדר ב-Settings
- [ ] Branch `main` נבחר ב-Source

---

**הצלחה עם הדיפלוי! 🚀**

אם יש בעיות, פתח [Issue](https://github.com/AnLoMinus/hollyrap/issues) בקהילה.
