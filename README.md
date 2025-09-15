# 👩‍👩‍👧 Made_by_Mothers

This custom-built project was made to provide parents with homemade baby food recipes and highlight the benefits of making nutritious meals for their little ones.

The web application features **8 homemade recipes** along with their ingredients, nutrition facts, and interactive features for a user-friendly experience.

---

## 🚀 Tech Stack

- React (Frontend)
- React Router (Routing)
- CSS / Styled Components (Styled with Figma designs)
- Nutritionix API (for nutrition data)
- MockData (for stubbing API responses)
- JWT tokens (for user authentication)

---

## ✨ Key Features

- 👶 8 homemade baby food recipes
- 📊 Nutrition facts fetched via Nutritionix API
- ❤️ Add/remove recipes from favorites on the users profile (saved to localStorage)
- 👤 User authentication (Register/Login) with token storage
- 📝 Editable profile (name, email, photo upload option)
- 📱 Fully responsive design for desktop and mobile

- **Nutrition Modal**  
  ![Screenshot of nutrition modal](<Screenshot 2025-09-13 172006.png>)

- **Profile Page**
  ![Screenshot of profile page](<Screenshot 2025-09-13 173856.png>)

---

## 🌐 Deployment

- **Frontend Repo**: [Made_by_Mothers-frontend]
  https://mgracej91.github.io/Made_by_Mothers-frontend/

---

## 🧩 Challenges I Faced but Overcame

One of the biggest challenges I faced was getting the Nutritionix API to work correctly with my app. At first, every call I made to the API came back with an “Unauthorized” error, even though I had my key and endpoint set up.

I overcame this by carefully reviewing the API documentation and testing different configurations. I realized that the API required very specific headers which included both an App ID and an API Key in every request. Once I updated my fetch function to include those headers, the requests worked successfully.

This process taught me how important it is to slow down, check the small details in documentation, and test systematically until I find the issue.
