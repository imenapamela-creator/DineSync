# DineSync Frontend — Documentation

This document describes the frontend application, its structure, and how the user flows are organized.

## Project summary

- Single-page React app built with Vite.
- Two primary user roles: Admin (restaurant management) and Client (restaurant discovery & ordering).
- Routes and pages are defined in `src/App.jsx`.

## Key scripts

```bash
npm install
npm run dev    # start dev server
npm run build  # production build
npm run preview
npm run lint
```

## High-level structure

src/
- assets/ — images and static media
- components/ — Navbar, Sidebar, Icon, Hero, Footer, LoginForm, etc.
- pages/ — top-level route pages (LandingPage, SignUpPage, CredentialsPage, OverviewPage, MenuPage, OrdersPage, RestaurantsPage, ClientMenuPage, ViewItemPage, CartPage, BookTablePage)
- styles/ — CSS files for pages/components

## User flow (enforced)

Landing Page
  ├── "Get Started" / "Sign Up" → `SignUpPage`
  └── "Login" → `LoginPage`

SignUpPage
  ├── "Admin" button → `CredentialsPage`
  └── "Client" button → `RestaurantsPage`

CredentialsPage (3 steps) → `OverviewPage`

OverviewPage (admin sidebar)
  ├── Menu → `MenuPage`
  └── Order → `OrdersPage`

RestaurantsPage (client)
  └── "Visit" → `ClientMenuPage`

ClientMenuPage
  └── "Add" on a dish → `ViewItemPage`
        ├── "Add to cart" → `CartPage`
        └── "Back" → `ClientMenuPage`

ClientMenuPage sidebar
  └── "Book a table" → `BookTablePage`

## Notes about components and styling

- The `Sidebar` component receives a `links` array from each page to control what appears for Admin vs Client. Admin pages pass admin-only links; client pages pass client links.
- Icons are provided by `src/components/Icons.jsx` as inline SVGs.
- Credentials illustrations use PNG assets located in `src/assets/` (house.png, map.png, check.png).

## Visual changes made recently

- BookTable: seat map enlarged, sidebar restored to full height, legend colors adjusted.
- Credentials: illustration images enlarged; step indicator spacing improved.
- Client menu: responsive grid and larger dish images.

## Where to look

- Routing and user flow: [src/App.jsx](src/App.jsx)
- Sidebar behavior: [src/components/Sidebar.jsx](src/components/Sidebar.jsx)
- Credentials page: [src/pages/CredentialsPage.jsx](src/pages/CredentialsPage.jsx) and [src/styles/CredentialsPage.css](src/styles/CredentialsPage.css)
- Book table: [src/pages/BookTablePage.jsx](src/pages/BookTablePage.jsx) and [src/styles/BookTablePage.css](src/styles/BookTablePage.css)

---
If you'd like, I can also:
- Add screenshots to this documentation.
- Create a CONTRIBUTING.md and PR template.
- Publish a live demo (Netlify, Vercel) and add the demo link to the README.
Tell me which of those you want next.

**Bottom Section:**
- **Left:** Chart box showing "Orders overview"
  - Week filter dropdown
  - SVG area chart (gradient fill under curve)
  - Day labels: Mon-Sun
  - Color: Orange (#c8651b)
  
- **Right:** Top items box
  - Shows 4 top-selling items
  - Item image placeholder
  - Order count (85, 70, 42, 37)

**Styling:** `OverviewPage.css`

---

### 6. **MenuPage.jsx** (`/src/pages/MenuPage.jsx`)
**Purpose:** Admin menu management interface  
**Layout:** Sidebar + Main content

**Header:**
- "Menu" title
- "Add Item +" button

**Search Bar:**
- Magnifying glass icon (🔍)
- Real-time filtering by search input

**Category Tabs:**
- 5 category buttons: "All", "Starters", "Main", "Desserts", "Drink"
- Active tab highlighted
- Tab click filters menu items

**Menu Table:**
```jsx
Columns: Item | Category | Price | Action
```

**Sample Menu Items:**
```jsx
[
  { id: 1, name: "Capuccino coffee", category: "Drinks", price: "5000rwf" },
  { id: 2, name: "Iced Tea", category: "Drinks", price: "5000rwf" },
  { id: 3, name: "Bagu", category: "Main", price: "18000rwf" },
  { id: 4, name: "Cheese burger", category: "Main", price: "7000rwf" },
  { id: 5, name: "Vanilla cake", category: "Dessert", price: "5000rwf" }
]
```

**Table Row Features:**
- Item cell with image placeholder + name
- Category display
- Price display
- Action buttons: "✏️ Edit" & "🗑️ Delete"

**Filtering Logic:**
```jsx
const filtered = items.filter((item) => {
  const matchTab = activeTab === "All" || 
    item.category.toLowerCase().includes(activeTab.toLowerCase());
  const matchSearch = item.name.toLowerCase()
    .includes(search.toLowerCase());
  return matchTab && matchSearch;
});
```

**State:**
```jsx
const [activeTab, setActiveTab] = useState("All");
const [search, setSearch] = useState("");
const [items, setItems] = useState(menuItems);
```

**Handler:**
- `handleDelete(id)` - Removes item from items array

**Styling:** `MenuPage.css`

---

### 7. **OrdersPage.jsx** (`/src/pages/OrdersPage.jsx`)
**Purpose:** Admin order management and tracking  
**Layout:** Sidebar + Main content

**Title:** "Orders"

**Tab Filters:**
- 5 tabs: "All", "Pending", "Preparing", "completed", "Cancelled"
- Click to filter orders

**Orders Table:**
```jsx
Columns: Order ID | Customer | Items | Total | Status | Time
```

**Sample Orders:**
```jsx
[
  { 
    id: "#QRD-1021", 
    customer: "Aline Mugisha", 
    items: "1 items", 
    total: "FRW 16000", 
    status: "Completed", 
    time: "23:30" 
  }
]
```

**Status Badge Component:**
- Dynamic background colors:
  - Completed: Green (#4caf50)
  - Preparing: Orange (#ff9800)
  - Pending: Gray (#aaa)
  - Cancelled: Red (#e53935)

**Filtering Logic:**
```jsx
const filtered = activeTab === "All"
  ? allOrders
  : allOrders.filter(o => 
      o.status.toLowerCase() === activeTab.toLowerCase()
    );
```

**State:**
```jsx
const [activeTab, setActiveTab] = useState("All");
```

**Styling:** `OrdersPage.css`

---

### 8. **RestaurantsPage.jsx** (`/src/pages/RestaurantsPage.jsx`)
**Purpose:** Client-side restaurant discovery  
**Layout:** Sidebar + Main content

**Sidebar Links (Client-specific):**
- Restaurants (🏠)
- Favorites (❤️)
- Profile (👤)

**Title:** "Restaurants"

**Options Panel (Left Side):**
3 clickable options:
1. "View All"
2. "Description"
3. "View near me"
- Active option highlighted

**Restaurant Grid (Right Side):**
6 restaurant cards:
```jsx
const restaurants = [
  { id: 1, name: "La grande palace hotel" },
  { id: 2, name: "Italian resto" },
  { id: 3, name: "McDonalds" },
  { id: 4, name: "kigalicious" },
  { id: 5, name: "Nyamata" },
  { id: 6, name: "cafe camelia" }
]
```

**Restaurant Card Structure:**
- Image placeholder
- Restaurant name
- "Visit" button (triggers `onVisit` callback)

**State:**
```jsx
const [activeOption, setActiveOption] = useState("View All");
```

**Styling:** `RestaurantsPage.css`

---

### 9. **ClientMenuPage.jsx** (`/src/pages/ClientMenuPage.jsx`)
**Purpose:** Client-side menu browsing for specific restaurant  
**Layout:** Sidebar + Main content

**Sidebar Links (Client-specific):**
- Menu (📋)
- Book a table (🪑)
- My orders (🪑)
- Favorites (❤️)
- Profile (👤)

**Top Bar:**
- Restaurant name (default: "La grande palace hotel")
- Icons on right: Cart (🛒) + Back arrow (←)

**Categories Panel (Left Side):**
5 category options:
- "All items"
- "Main dish"
- "Starter"
- "Desserts"
- "Drinks"
- Active category highlighted

**Food Grid (Right Side):**
6 food items displayed as cards:
```jsx
const foodItems = [
  { id: 1, name: "Chicken shawarma", price: "4500rwf", category: "Main dish" },
  { id: 2, name: "Caesar salad", price: "3000rwf", category: "Starter" },
  { id: 3, name: "beef pizza", price: "10000rwf", category: "Main dish" },
  { id: 4, name: "Latte", price: "2700rwf", category: "Drinks" },
  { id: 5, name: "Smoothie", price: "4500rwf", category: "Drinks" },
  { id: 6, name: "fruit salad", price: "2000rwf", category: "Starter" }
]
```

**Food Card Structure:**
- Image placeholder
- Food name
- Footer with: Price + "Add" button
- Add button triggers `onViewItem` callback

**Filtering Logic:**
```jsx
const filtered = activeCategory === "All items"
  ? foodItems
  : foodItems.filter(f => f.category === activeCategory);
```

**State:**
```jsx
const [activeCategory, setActiveCategory] = useState("All items");
```

**Props:**
```jsx
{
  restaurantName: string (optional),
  onViewItem: function,
  onCartClick: function
}
```

**Styling:** `ClientMenuPage.css`

---

### 10. **CartPage.jsx** (`/src/pages/CartPage.jsx`)
**Purpose:** Shopping cart overlay for clients  
**Layout:** Modal overlay with cart box

**Initial Cart Items:**
```jsx
[
  { id: 1, name: "Cheese burger", price: 6000, qty: 1 },
  { id: 2, name: "Vanilla cake", price: 3000, qty: 1 },
  { id: 3, name: "smoothie", price: 4000, qty: 1 }
]
```

**Cart Structure:**
- Top icon: 🛒
- Header: "Your cart" title + item count

**Cart Items List:**
Each item shows:
- Image placeholder
- Item name
- Total price (price × qty)
- Quantity controls: − and + buttons

**State & Methods:**
```jsx
const [items, setItems] = useState(initialItems);

function updateQty(id, delta) {
  setItems(items.map(item =>
    item.id === id 
      ? { ...item, qty: Math.max(0, item.qty + delta) } 
      : item
  ).filter(item => item.qty > 0));
}
```

**More Items Link:** "MORE..." text (expandable placeholder)

**Bottom Buttons:**
- "Order" button - confirms order
- "Back" button - closes cart (triggers `onBack` callback)

**Props:**
```jsx
{
  onBack: function  // Callback to close cart
}
```

**Styling:** `CartPage.css`

---

### 11. **ViewItemPage.jsx** (`/src/pages/ViewItemPage.jsx`)
**Purpose:** Item detail view with customization options  
**Layout:** Modal overlay

**Item Display (Left Side):**
- Large item image placeholder
- Item name (default: "Chicken shawarma")
- Price display (default: "4500rwf")
- Description label & text: "Creamy chicken shawarma with cream and chips and extra spice"
- Two buttons:
  - "Add to cart" - triggers `onAddToCart`
  - "Back" - closes view

**Customization (Right Side):**
- **Quantity Section:**
  - Label: "Quantity"
  - Controls: − [qty display] + buttons
  - Initial qty: 2
  - Min qty: 1 (enforced by Math.max(1, qty - 1))

- **Customisation Section:**
  - Title: "Customisation"
  - Options with brown dots (●):
    - "Grilled chicken ●"
    - "Garva cream ●"
  - "More options" button

**Props:**
```jsx
{
  item: { name, price } (optional),
  onBack: function,
  onAddToCart: function
}
```

**State:**
```jsx
const [qty, setQty] = useState(2);
```

**Styling:** `ViewItemPage.css`

---

### 12. **BookTablePage.jsx** (`/src/pages/BookTablePage.jsx`)
**Purpose:** Table reservation/booking interface  
**Layout:** Split screen - form on left, seat map on right

**Left Side - Booking Form:**
- Back arrow button (←)
- Title: "Book a table"

**Form Fields:**
1. **Date Input**
   - Type: date
   - Icon: 🕐

2. **Time Select**
   - Dropdown with options: 12:00, 13:00, 14:00, 18:00, 19:00, 20:00
   - Icon: 🕐

3. **Guests Input**
   - Type: number
   - Placeholder: "Enter guests"

4. **Area Preference Select**
   - Options: (optional), Indoor, Outdoor, VIP
   - Optional field

- **"Check availability" Button** at bottom

**Right Side - Seat Map:**
- Back arrow button (←)
- Grid of 20 seats (rendered as emoji ⚙️)
- Each seat has 3 possible states:
  - Available (gray/default) - clickable
  - Selected (highlighted) - user selected
  - Booked (red) - not clickable
  - Pre-selected seats: [3, 10]
  - Pre-booked seats: [6, 7, 15, 16]

**Seat Map Legend:**
- Available dot + label
- Selected dot + label
- Booked dot + label

**State:**
```jsx
const [date, setDate] = useState("");
const [time, setTime] = useState("");
const [guests, setGuests] = useState("");
const [area, setArea] = useState("");
const [selected, setSelected] = useState([3, 10]);
const booked = [6, 7, 15, 16];
```

**Methods:**
```jsx
function toggleSeat(seatNum) {
  if (booked.includes(seatNum)) return; // Can't select booked
  if (selected.includes(seatNum)) {
    setSelected(selected.filter(s => s !== seatNum)); // Deselect
  } else {
    setSelected([...selected, seatNum]); // Select
  }
}

function getSeatStatus(num) {
  if (booked.includes(num)) return "booked";
  if (selected.includes(num)) return "selected";
  return "available";
}
```

**Props:**
```jsx
{
  onBack: function
}
```

**Styling:** `BookTablePage.css`

---

## 🎨 STYLING & CSS FILES

### Global Styles

**index.css:**
- CSS variables for theming (colors, fonts, shadows)
- Light & dark mode support
- Default font sizes and spacing
- Base element styling (h1, h2, p, code)

**Key CSS Variables:**
```css
--text: #6b6375 (main text)
--text-h: #08060d (headings)
--bg: #fff (background)
--border: #e5e4e7
--accent: #aa3bff (purple)
--accent-bg: rgba(170, 59, 255, 0.1)
--sans: system-ui, 'Segoe UI', Roboto, sans-serif
```

**app.css:**
- Contains counter styles and hero section transforms
- Flexbox layouts for responsive design

### Component-Specific CSS Files

| CSS File | Component | Purpose |
|----------|-----------|---------|
| `Navbar.css` | Navbar.jsx | Navigation bar styling |
| `Hero.css` | Hero.jsx | Hero section + food images + feature cards |
| `LoginForm.css` | LoginForm.jsx | Login form styling |
| `Sidebar.css` | Sidebar.jsx | Dashboard sidebar styling |
| `landingPage.css` | LandingPage.jsx | Landing page layout |
| `LoginPage.css` | LoginPage.jsx | Login page split screen |
| `SignUpPage.css` | SignUpPage.jsx | Signup page styling |
| `CredentialsPage.css` | CredentialsPage.jsx | Credential form styling |
| `OverviewPage.css` | OverviewPage.jsx | Admin dashboard styling |
| `MenuPage.css` | MenuPage.jsx | Menu management table |
| `OrdersPage.css` | OrdersPage.jsx | Orders table styling |
| `RestaurantsPage.css` | RestaurantsPage.jsx | Restaurant grid layout |
| `ClientMenuPage.css` | ClientMenuPage.jsx | Client menu browsing |
| `CartPage.css` | CartPage.jsx | Shopping cart overlay |
| `ViewItemPage.css` | ViewItemPage.jsx | Item detail view |
| `BookTablePage.css` | BookTablePage.jsx | Table booking styling |

### Design Patterns Used in CSS:
1. **Flexbox layouts** - Primary layout method
2. **CSS Grid** - For product grids and seat maps
3. **Overlay/Modal patterns** - For cart and item views
4. **Split-screen layouts** - For login, signup, credentials
5. **Color-coded badges** - For status indicators
6. **Responsive design** - Mobile-first approach (if media queries present)

---

## 🎯 ASSETS

Located in `/src/assets/`:

| File | Purpose |
|------|---------|
| `LOGO.png` | DineSync logo |
| `dish1.png` | Food image - Green salad |
| `dish2.png` | Food image - Pasta salad |
| `dish3.png` | Food image - Curry dish |
| `log.png` | Restaurant background image (login/signup) |
| `hero.png` | Hero section background |
| `signup.png` | Additional signup asset |
| `react.svg` | React logo (optional branding) |
| `vite.svg` | Vite logo (optional branding) |

---

## 📊 DATA FLOW & STATE MANAGEMENT

### Architecture Pattern:
- **Component-based**: Each page is a self-contained component
- **Prop drilling**: Data passed through props (no global state management like Redux)
- **Local state**: Each component manages its own state with `useState()`
- **Functional components**: All components are functional with Hooks

### State Management Pattern:
```jsx
// Each component manages its own local state
const [state, setState] = useState(initialValue);

// State updates on user interactions
const handleChange = (field, value) => {
  setState(prev => ({ ...prev, [field]: value }));
};
```

### Common State Patterns:

**1. Form State (SignUp, Credentials, BookTable):**
```jsx
const [formData, setFormData] = useState({
  field1: "",
  field2: "",
  field3: ""
});
```

**2. Filter State (Menu, Orders, Restaurants):**
```jsx
const [activeTab, setActiveTab] = useState("All");
const [search, setSearch] = useState("");
const filtered = items.filter(/* logic */);
```

**3. List State with CRUD (Menu items, Cart):**
```jsx
const [items, setItems] = useState(initialItems);
const handleDelete = (id) => {
  setItems(items.filter(item => item.id !== id));
};
```

**4. Toggle State:**
```jsx
const [showPassword, setShowPassword] = useState(false);
const toggle = () => setShowPassword(!showPassword);
```

---

## 🔄 COMPONENT RELATIONSHIPS

### Landing Page Flow:
```
LandingPage
├── Navbar (navigation)
├── Hero (call-to-action)
├── FeaturesSection (features showcase)
├── ReviewsSection (testimonials)
└── Footer (footer links)
```

### Admin Dashboard Flow:
```
AdminPage (OverviewPage, MenuPage, OrdersPage)
├── Sidebar (navigation)
└── MainContent
    ├── Header (title + filters)
    └── Content (stats/tables/forms)
```

### Client Dashboard Flow:
```
ClientPage (RestaurantsPage, ClientMenuPage)
├── Sidebar (navigation)
└── MainContent
    ├── OptionsPanel (filters)
    └── Grid/List (restaurants/items)
```

### Modal Overlays:
```
CartPage (overlay)
ViewItemPage (overlay)
BookTablePage (full page)
```

---

## 🔌 HOOKS & METHODS USED

### React Hooks:
1. **useState()** - State management (used in every page/component with interactivity)
2. **useNavigate()** - Navigation (used in Hero component)

### Common Methods:

**Array Methods:**
- `filter()` - For filtering items/orders
- `map()` - For rendering lists
- `includes()` - For checking if item in array
- `find()` - For searching specific item
- `Math.max()` / `Math.min()` - For quantity bounds

**String Methods:**
- `toLowerCase()` - For case-insensitive search/comparison
- `includes()` - For substring matching

**Object Methods:**
- Spread operator `{ ...object }` - For immutable state updates

---

## 🚀 WORKFLOW & USER FLOWS

### New User Flow (Admin):
1. Visit `/` (LandingPage)
2. Click "Sign Up" → `/signup` (SignUpPage)
3. Fill form, select "Admin" role
4. Redirect to `/credentials` (CredentialsPage)
5. Complete 3-step restaurant setup
6. Redirect to `/overview` (OverviewPage - Admin Dashboard)

### Admin Operations:
- View `/overview` - see dashboard stats
- Go to `/menu` - manage restaurant menu
  - Search for items
  - Filter by category
  - Edit/Delete items
  - Add new items (UI placeholder)
- Go to `/orders` - view and manage orders
  - Filter by status (Pending, Preparing, Completed, Cancelled)
  - Track order progress

### New User Flow (Client):
1. Visit `/` (LandingPage)
2. Click "Sign Up" → `/signup` (SignUpPage)
3. Fill form, select "Client" role
4. Redirect to `/restaurants` (RestaurantsPage)

### Client Operations:
1. Browse restaurants at `/restaurants`
   - Filter by options (View All, Description, View near me)
   - Click "Visit" on restaurant
2. View restaurant menu at `/client-menu`
   - Browse items by category
   - Click "Add" on item → `/view-item` (ViewItemPage)
   - Select quantity and customization
   - "Add to cart"
3. View shopping cart at `/cart` (CartPage)
   - Adjust quantities
   - Place order
4. Book table at `/book-table` (BookTablePage)
   - Select date, time, guests, area
   - Select available seats
   - Confirm booking

### Authentication Flow:
- `/login` (LoginPage) - Existing users
- `/signup` (SignUpPage) - New users with role selection
- Post-signup redirect based on role

---

## ⚠️ CURRENT ISSUES & PLACEHOLDERS

1. **No Backend Integration**: All handlers are console.log placeholders
   - `handleLogin()`, `handleSignUp()`, `handleDelete()`, etc.

2. **No Global State Management**: Uses prop drilling (can cause issues with deep component trees)

3. **Incomplete Features**:
   - Login form: "Continue with Google/Apple" not functional
   - Menu page: "Add Item" button not functional
   - Cart: "MORE..." text not expandable
   - Seat map: Pre-selected/booked seats hardcoded

4. **No Error Handling**: No validation or error messages

5. **No API Calls**: All data is hardcoded/mock data

6. **Hero.jsx**: Syntax error on line 7 - `food3 Dynamically linked from`

---

## 🔧 KEY FILES TO MODIFY FOR FEATURES

### To Add Backend Integration:
1. Create `src/services/api.js` - API client setup
2. Create `src/context/AuthContext.js` - Global auth state
3. Replace `handleLogin()` with actual API call
4. Replace `handleDelete()` with actual API call

### To Add State Management:
1. Install Redux: `npm install redux react-redux`
2. Create `src/store/` folder with slices
3. Wrap App with Redux Provider

### To Add Validation:
1. Create `src/utils/validation.js` - Validation functions
2. Add error state to forms
3. Display error messages

---

## 🎓 BEST PRACTICES OBSERVED

✅ **Good:**
- Component composition (Sidebar reused)
- Consistent naming conventions
- Separated concerns (styles in separate files)
- Functional components with Hooks
- Props-based configuration

❌ **Could Improve:**
- Error handling
- Input validation
- Loading states
- API integration
- TypeScript types
- Comments/documentation in code
- Custom hooks for repeated logic

---

## 📝 SUMMARY

**DineSync Frontend** is a React-based restaurant and dining management platform built with:
- **Architecture**: Component-based, functional React with routing
- **Styling**: CSS files per component with global CSS variables
- **State**: Local component state with useState()
- **Navigation**: React Router with 12 routes
- **Users**: Two user types (Admin/Client) with different dashboards

**Core Features**:
- Landing page with marketing content
- Authentication (Login/Signup)
- Admin dashboard (Menu, Orders, Overview management)
- Client interface (Restaurant browsing, Ordering, Table booking)
- Form handling with multi-step wizards
- Table/Grid based data display

The codebase is ready for backend integration and requires API setup to become fully functional.
