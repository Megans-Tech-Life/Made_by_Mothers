# 👩‍👩‍👧 Made_by_Mothers

This custom-built project was made to provide parents with homemade baby food recipes and highlight the benefits of making nutritious meals for their little ones.

The web application features **8 homemade recipes** along with their ingredients, nutrition facts, and interactive features for a user-friendly experience.

---

## 🚀 Tech Stack

- React (Frontend)
- React Router (Routing)
- CSS / Styled Components (Figma)
- Nutritionix API (for nutrition data)
- MockData(for stubbing API responses)
- JWT tokens (for authentication for Logged in users)

---

## ✨ Key Features

- 👶 8 homemade baby food recipes
- 📊 Nutrition facts fetched via Nutritionix API
- ❤️ Add/remove recipes from favorites on the users profile(saved to localStorage or backend)
- 👤 User authentication (Register/Login) with token storage
- 📝 Editable profile (name, email, photo upload option)
- 📱 Fully responsive design for desktop and mobile

- **Nutrition Modal**  
  ![Screenshot of nutrition modal](<Screenshot 2025-09-13 172006.png>)

- **Profile Page**
  ![Screenshot of profile page](<Screenshot 2025-09-13 173856.png>)

---

## 🌐 Deployment

- **Frontend Repo**: [Made_by_Mothers-frontend](https://github.com/mgracej91/Made_by_Mothers-frontend.git)

---

## 🧩 Challenges I Faced but Overcame

One of the biggest challenges I faced during this project was keeping users logged in after a page refresh. At first, the login worked, but as soon as the page reloaded, the user was logged out. This made the app frustrating to use since it required logging in over and over.

I solved this by finding a way to “remember” the user’s login information in the browser. To do so I stored the login details securely in the browser using local storage. When the page reloads, the app checks that stored information and restores the user’s session automatically.
