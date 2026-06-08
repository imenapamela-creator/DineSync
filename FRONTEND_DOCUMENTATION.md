# DineSync Frontend - Complete Documentation

## 📋 PROJECT OVERVIEW

**Project Name:** DineSync Frontend  
**Framework:** React 19 with Vite  
**Routing:** React Router v7  
**Type:** Single Page Application (SPA) - Restaurant & Dining Management Platform  
**Purpose:** Multi-user platform for restaurants to manage menus, orders, bookings and for clients to discover restaurants, view menus, and make reservations

---

## 🏗️ PROJECT STRUCTURE

```
DineSync/Frontend/
├── public/
├── src/
│   ├── assets/                 # Images and static files
│   ├── components/             # Reusable UI components
│   ├── pages/                  # Full page components (Routes)
│   ├── styles/                 # CSS files (one per component/page)
│   ├── App.jsx                 # Main routing component
│   ├── App.css                 # Root app styles
│   ├── index.css               # Global styles
│   └── main.jsx                # React DOM entry point
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite build config
├── eslint.config.js            # ESLint configuration
└── index.html                  # HTML entry point
```

---

## 📦 DEPENDENCIES & BUILD SETUP

### package.json Details:
```json
{
  "name": "dinesync_frontend",
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",                    // Start dev server
    "build": "vite build",            // Production build
    "lint": "eslint .",               // Run ESLint
    "preview": "vite preview"         // Preview production build
  }
}
```

### Core Dependencies:
- **react** (^19.2.6) - UI library
- **react-dom** (^19.2.6) - DOM rendering
- **react-router-dom** (^7.17.0) - Routing & navigation

### Dev Dependencies:
- **vite** (^8.0.12) - Build tool & dev server
- **@vitejs/plugin-react** - React support in Vite
- **eslint** - Code linting
- **eslint-plugin-react-hooks** - React Hooks linting
- **eslint-plugin-react-refresh** - React Refresh support

### Commands:
```bash
npm run dev        # Start development server (hot reload)
npm run build      # Create production build
npm run lint       # Check code quality
npm run preview    # Preview built app
```

---

## 🎯 ROUTING ARCHITECTURE

### Main Routing (App.jsx)
All routes are configured using **React Router BrowserRouter**:

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | `LandingPage` | Public landing/home page |
| `/login` | `LoginPage` | User login |
| `/signup` | `SignUpPage` | User registration (Admin/Client role) |
| `/credentials` | `CredentialsPage` | Restaurant setup wizard (3-step form) |
| `/overview` | `OverviewPage` | Admin dashboard with stats & charts |
| `/menu` | `MenuPage` | Admin menu management |
| `/orders` | `OrdersPage` | Admin order management |
| `/restaurants` | `RestaurantsPage` | Client restaurant discovery |
| `/client-menu` | `ClientMenuPage` | Client menu viewing |
| `/cart` | `CartPage` | Client shopping cart |
| `/view-item` | `ViewItemPage` | Client item detail view |
| `/book-table` | `BookTablePage` | Client table booking |

---

## 🧩 COMPONENTS (Reusable UI Pieces)

### 1. **Navbar.jsx** (`/src/components/Navbar.jsx`)
**Purpose:** Main navigation bar for landing page  
**Features:**
- Logo display with DineSync branding
- Navigation links: "How it works", "Features", "Pricing", "Contacts"
- Auth buttons: Login and Sign Up links
- Used only on Landing Page

**JSX Structure:**
```jsx
<nav className="navbar">
  <div className="navbar-logo"> // Logo section
  <ul className="navbar-links">  // Navigation links
  <div className="navbar-auth">  // Login/Signup buttons
</nav>
```

**Styling:** Uses `Navbar.css` with flexbox layout

---

### 2. **Hero.jsx** (`/src/components/Hero.jsx`)
**Purpose:** Hero section with call-to-action and feature cards  
**Features:**
- Main headline: "Sync your Restaurant, elevate every dining experience"
- Two CTAs: "Get Started" button + "Learn more" link
- 4 Feature glass cards with custom SVG icons (orange stroke)
  - Easy Menu Management
  - Real-time Orders
  - Table Booking
  - Analytics & Reports
- Right side visual: Staggered food dish images (3 overlapping plates with styling)
- Decorative SVG background shapes and dots

**Key Methods:**
- `useNavigate()` hook for navigation to signup
- `FeatureCard` sub-component for reusable feature cards

**Styling:** `Hero.css` with advanced positioning, transforms, and staggered animations

---

### 3. **FeaturesSection.jsx** (`/src/components/FeaturesSection.jsx`)
**Purpose:** Features showcase section with stats  
**Features:**
- Left side: Text describing DineSync benefits + CTA button
- Stats row showing:
  - 4.9/5 Star rating
  - 1,200+ Restaurants
  - 12,000+ Orders
  - 3,000+ Reservations
- Right side: 3-image collage (Phone mockup, Restaurant interior, Plate close-up)

**Styling:** `No separate CSS imported` - styled inline or in parent CSS

---

### 4. **ReviewsSection.jsx** (`/src/components/ReviewsSection.jsx`)
**Purpose:** Customer testimonials section  
**Features:**
- Title: "Loved by restaurant owners and food lovers"
- 3 Review cards displaying:
  - Quote text
  - Customer avatar placeholder
  - Customer name and role
  - Orange quote icon
- Pagination dots (3 dots for carousel navigation - non-functional UI)

**Structure:**
- `ReviewCard` sub-component for each review

**Data Format:**
```jsx
{
  text: "Review content...",
  name: "Customer name",
  role: "Customer role/position"
}
```

---

### 5. **Footer.jsx** (`/src/components/Footer.jsx`)
**Purpose:** Website footer with branding, links, and info  
**Features:**
- Brand info block: Logo + company description
- 4 Link columns:
  - Product (How it works, Features, Pricing)
  - Company (About Us, Blog, Contacts)
  - Legal (Privacy Policy, Terms of Service)
  - Follow Us (Social media links with emoji icons)
- Copyright notice at bottom

**Styling:** `Footer styling not found in CSS files - likely embedded`

---

### 6. **Sidebar.jsx** (`/src/components/Sidebar.jsx`)
**Purpose:** Navigation sidebar for admin/client dashboards  
**Features:**
- Top logo section with hamburger menu icon
- Dynamic navigation links (passed as props)
- Sidebar links with icons and labels (highlight active page)
- Bottom section: Logout and Help options

**Props:**
```jsx
{
  links: [              // Array of navigation items
    { label: string, icon: string }
  ],
  onNavigate: function, // Callback when link clicked
  activePage: string    // Current active page
}
```

**Functionality:**
- Maps over `links` array to render menu items
- Highlights active page with class
- Emoji icons for visual identification

**Styling:** `Sidebar.css`

---

### 7. **LoginForm.jsx** (`/src/components/loginform.jsx`)
**Purpose:** Login form component (reusable)  
**Features:**
- Email input with envelope icon
- Password input with lock icon
- Forgot password link
- Login button
- Social login divider
- Google and Apple OAuth buttons (UI only)
- Sign up link

**State Management:**
```jsx
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
```

**Handlers:**
- `handleLogin()` - Logs credentials to console (placeholder)

**Styling:** `LoginForm.css`

---

## 📄 PAGES (Full-page Components)

### 1. **LandingPage.jsx** (`/src/pages/landingPage.jsx`)
**Purpose:** Public landing page (entry point for non-logged-in users)  
**Composition:**
```jsx
<LandingPage>
  <Navbar />           // Navigation
  <Hero />             // Hero section with CTA
  <FeaturesSection />  // Features showcase
  <ReviewsSection />   // Customer testimonials
  <Footer />           // Footer
</LandingPage>
```

**Styling:** `landingPage.css`

---

### 2. **LoginPage.jsx** (`/src/pages/LoginPage.jsx`)
**Purpose:** User login page  
**Layout:** Split screen design
- **Left side:** Restaurant background image + DineSync logo overlay
- **Right side:** LoginForm component

**Features:**
- Logo and brand text (Dine in white, Sync in orange)
- Tagline: "sync your restaurant, simplify your life"
- Underline decoration

**Styling:** `LoginPage.css` - Two-column responsive layout

---

### 3. **SignUpPage.jsx** (`/src/pages/SignUpPage.jsx`)
**Purpose:** User registration/account creation  
**Layout:** Similar split-screen design

**Form Fields:**
```jsx
State:
- firstName, setFirstName
- lastName, setLastName
- phone, setPhone
- email, setEmail
- password, setPassword
- showPassword, setShowPassword (toggle visibility)
- role, setRole ("Admin" or "Client")
```

**Features:**
- Phone input with +250 country code + divider
- Password with show/hide toggle (👁 icon)
- Password hints display (at least 8 chars, number, uppercase)
- Role selection buttons (Admin / Client) - toggle selection style
- Link to login page: "Already have an account? Log In"
- Left side: Same branding as LoginPage

**Handler:**
- `handleSignUp()` - Logs registration details (placeholder)

**Styling:** `SignUpPage.css`

---

### 4. **CredentialsPage.jsx** (`/src/pages/CredentialsPage.jsx`)
**Purpose:** Restaurant onboarding wizard (3-step form)  
**Layout:** Split screen with step indicator on right

**Step Indicator Component:**
- Visual step circles (1, 2, 3)
- Step labels, connecting lines
- Completed steps show checkmark (✓)
- Current step highlighted

**State:**
```jsx
const [step, setStep] = useState(1);
const [formData, setFormData] = useState({
  name, type, contactPhone, ownerPhone,
  ownerName, ownerEmail, address, city,
  postal, openTime, closeTime
});
```

**3-Step Form Structure:**

**Step 1: Restaurant Information**
- Restaurant name
- Restaurant type (Cafe, etc.)
- Contact number (@Restaurant)
- Owner phone number
- Owner name
- Owner email
- Next button → Step 2

**Step 2: Location & Hours**
- Full address
- City
- Postal code
- Opening hours (dropdown from 06:00-12:00)
- Closing hours (dropdown from 20:00-00:00)
- Back & Next buttons

**Step 3: Review**
- Displays summary of entered data
- Review-label style display
- Shows: Restaurant name, address, type
- Back & Finish buttons

**Right Side Illustration:**
- Changes based on current step (emoji + label)
- Step 1: "Helps us personalise your restaurant" 🏪
- Step 2: "Add your restaurant location" 🗺️
- Step 3: "Please review and confirm your details" 📋

**Styling:** `CredentialsPage.css`

---

### 5. **OverviewPage.jsx** (`/src/pages/OverviewPage.jsx`)
**Purpose:** Admin dashboard showing restaurant stats and analytics  
**Layout:** Sidebar + Main content

**Sidebar:** Navigation with links:
- Overview (🏠)
- Menu (📋)
- Order (🪑)
- Bookings (🪑)
- Settings (⚙️)
- My account (👤)

**Header:**
- "Overview" title
- Date range filter: "May 15 - May 22 ▾"
- Download report button

**Stat Cards Grid (4 cards):**
Each card shows: label, value, change %, "from yesterday"
```jsx
1. Table orders: 125 (+12.3%)
2. Total revenue: 200k rwf (+5.3%)
3. Booked tables: 12 (+30%)
4. New customers: 125 (+6.3%)
```

**StatCard Component:**
```jsx
<StatCard 
  label="Label text"
  value="Value display"
  change="+X.X%"
/>
```

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
