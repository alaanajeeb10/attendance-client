# factory_attendance_client

צד לקוח למערכת שעון נוכחות במפעל.
המערכת כוללת עמוד כניסה, עמוד יציאה ועמוד דוח חודשי.
## הפעלה

1. קודם להפעיל את צד השרת `factory_attendance_server`.
2. לפתוח את התיקייה ב-WebStorm.
3. להריץ:

```bash
npm install
npm run dev
```

האתר רץ על:

```txt
http://localhost:4387
```

## חיבור לשרת

בקובץ:

```txt
src/vars.jsx
```

מוגדר:

```js
const backURL = "http://localhost:6127/api";
```

זה מחבר את הלקוח לשרת Node.js.

## עמודים

- רישום כניסה
- רישום יציאה
- דוח חודשי לפי תעודת זהות, חודש ושנה
