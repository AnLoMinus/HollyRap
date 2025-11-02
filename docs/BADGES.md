# 🏷️ מדריך תגיות (Badges) - HollyRap

מדריך זה מסביר איך התגיות ב-README עובדות ואיך לעדכן אותן.

## 📊 סוגי תגיות

### ✅ תגיות שמתעדכנות אוטומטית

רוב התגיות מתעדכנות **אוטומטית** מ-GitHub:

1. **GitHub Release** - מתעדכן אוטומטית כשאתה יוצר release חדש
2. **GitHub Stars** - מתעדכן אוטומטית כשמישהו נותן כוכב
3. **GitHub Forks** - מתעדכן אוטומטית כשמישהו עושה fork
4. **GitHub Issues** - מתעדכן אוטומטית לפי מספר ה-issues
5. **GitHub Pull Requests** - מתעדכן אוטומטית לפי מספר ה-PRs
6. **Contributors** - מתעדכן אוטומטית לפי מספר התורמים
7. **Last Commit** - מתעדכן אוטומטית בכל commit חדש
8. **Languages** - מתעדכן אוטומטית לפי שפות הקוד במאגר
9. **Repo Size** - מתעדכן אוטומטית לפי גודל המאגר

**אין צורך לעדכן אותן ידנית!** 🎉

### 🔧 תגיות שצריך לעדכן ידנית

רק **תגית הגרסה** צריכה עדכון ידני:

```markdown
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/AnLoMinus/hollyrap/releases)
```

## 📝 איך לעדכן את תגית הגרסה

כשאתה משחרר גרסה חדשה:

### שלב 1: עדכן את תגית הגרסה ב-README

בקובץ `README.md`, מצא את השורה:
```markdown
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/AnLoMinus/hollyrap/releases)
```

ועדכן את המספר `1.0.0` לגרסה החדשה:
```markdown
[![Version](https://img.shields.io/badge/version-1.1.0-blue.svg)](https://github.com/AnLoMinus/hollyrap/releases)
```

### שלב 2: עדכן את CHANGELOG.md

הוסף את הגרסה החדשה ל-`CHANGELOG.md`:
```markdown
## [1.1.0] - 2024-XX-XX

### הוסף
- תכונה חדשה...

### שונה
- שינוי קיים...
```

### שלב 3: צור Release ב-GitHub

1. עבור ל-**Releases** במאגר
2. לחץ **Create a new release**
3. בחר/צור תג (tag) חדש: `v1.1.0`
4. כתוב תיאור של השינויים
5. לחץ **Publish release**

### שלב 4: Commit ו-Push

```bash
git add README.md CHANGELOG.md
git commit -m "chore: update version to 1.1.0"
git push origin main
```

## 🔄 תגיות שמתעדכנות אוטומטית - איך זה עובד?

### GitHub API

התגיות משתמשות ב-GitHub API כדי לקבל מידע מעודכן:

**דוגמה לתגית:**
```markdown
[![GitHub stars](https://img.shields.io/github/stars/AnLoMinus/hollyrap.svg)](https://github.com/AnLoMinus/hollyrap)
```

הקישור `https://img.shields.io/github/stars/AnLoMinus/hollyrap.svg` מקבל מידע אוטומטי מ-GitHub על מספר הכוכבים.

### עדכון אוטומטי

- **תדירות:** התגיות מתעדכנות כל כמה דקות-שעות
- **אין צורך בפעולה:** הן פשוט מתעדכנות בעצמן
- **תמיד מעודכנות:** המידע תמיד מדויק ורענן

## 🎯 Semantic Versioning

מומלץ להשתמש ב-[Semantic Versioning](https://semver.org/) (SemVer):

**פורמט:** `MAJOR.MINOR.PATCH`

- **MAJOR** (1.0.0 → 2.0.0) - שינויים שוברים
- **MINOR** (1.0.0 → 1.1.0) - תכונות חדשות (ללא שבירה)
- **PATCH** (1.0.0 → 1.0.1) - תיקוני באגים

## 📋 רשימת בדיקה לפני Release

לפני שחרור גרסה חדשה, ודא:

- [ ] עדכנת את תגית הגרסה ב-README
- [ ] עדכנת את CHANGELOG.md
- [ ] יצרת Release ב-GitHub
- [ ] התג (tag) תואם את הגרסה
- [ ] כל השינויים commit ו-push

## 🔗 תגיות נוספות שאפשר להוסיף

### תגיות CI/CD

```markdown
[![CI](https://github.com/AnLoMinus/hollyrap/workflows/CI/badge.svg)](https://github.com/AnLoMinus/hollyrap/actions)
```

### תגיות נוספות

```markdown
[![GitHub watchers](https://img.shields.io/github/watchers/AnLoMinus/hollyrap.svg)](https://github.com/AnLoMinus/hollyrap)
[![GitHub downloads](https://img.shields.io/github/downloads/AnLoMinus/hollyrap/total.svg)](https://github.com/AnLoMinus/hollyrap/releases)
```

## 💡 טיפים

1. **תמיד עקוב אחר Semantic Versioning** - זה עוזר למשתמשים להבין את השינויים
2. **עדכן את CHANGELOG** - זה עוזר למעקב אחר שינויים
3. **השתמש ב-Git Tags** - זה חשוב ל-GitHub Releases
4. **תגיות אוטומטיות** - אין צורך לדאוג להן, הן מתעדכנות בעצמן

## ❓ שאלות נפוצות

### האם צריך לעדכן תגיות אחרי כל commit?

**לא!** רק תגית הגרסה צריכה עדכון ידני, וגם זה רק כשאתה משחרר גרסה חדשה.

### איך יודעים שהתגיות עדכניות?

התגיות מתעדכנות אוטומטית. אם יש בעיה, בדוק:
1. שהנתיב למאגר נכון (`AnLoMinus/hollyrap`)
2. שהמאגר ציבורי
3. שיש חיבור לאינטרנט

### איך להוסיף תגיות מותאמות אישית?

אתה יכול ליצור תגיות מותאמות אישית ב-[shields.io](https://shields.io/):

```markdown
[![Custom Badge](https://img.shields.io/badge/custom-text-blue)](https://example.com)
```

---

**הצלחה עם התגיות! 🏷️✨**

