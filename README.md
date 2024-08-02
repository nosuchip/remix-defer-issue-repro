### Issue description

- Having component `ProductsList` which import and re-export `loader` declared in Resource route `/api/products`
- Component contains Suspense/Await to dynamically show skeleton while loading data

### Steps to reproduce

- clone repo
- install dependencies with `npm install`
- run code `npm run dev`
- access `http://localhost:5173`

**Expected**: page opens, initially `Suspense` show "loading" then, when `products` array is awaited show jsonified array

**Actually**: server error

```
11:00:58 PM [vite] Internal server error: Server-only module referenced by client

'~/db/db.server' imported by 'app/routes/api/products.ts'
```
