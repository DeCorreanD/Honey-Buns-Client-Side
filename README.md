# Honey Buns Breakfast
Honey Buns Breakfast is a home away from home. This is a place where families can come to enjoy a meal, drinks, atmosphere & make memories. Your more than welcome to come visit us in person, but if you dont want to dont worry. We offer an online experiance that's easy to use for anyone. On our emersive website you can register as a user. Once registered you can view a full menu, add items to a cart, view and modify your personal profile and "Fav" your favorite meals. Come grab a bite & join our family!!

## App Users
- Customers that wants to use the site to order a meal, view available meals & personalize their profile page.
## Features
- Honey Buns Breakfast uses Google Authentication for users to log in.
- User Register first and last name, address, email & phone number.
- User have access to a profile page with all the registered information. They are also able to edit information and delete the entire user registration.
- User can view a full menu of items that can be added to a cart.
- User can click a "Fav" button on items. This indicates the user likes the item more than others.
- User can view their cart to see what items have been added, the price of all items, can remove an item from cart &  can complete the order to begin being processed.
- User can use a searchbar on the menu page to search for an item in the menu. 
## Relevant Links
- [ERD](https://dbdiagram.io/d/64e04ba902bd1c4a5e0938fc)
- [Wireframe](https://www.figma.com/file/Xyiq3smayE3fCCUuhwtB65/Honey-Buns?type=whiteboard&node-id=1-119&t=S4dgDRVdnUvEpbhM-0)
- [Project Board](https://github.com/users/DeCorreanD/projects/6)
- [Server-Side Repo](https://github.com/DeCorreanD/Honey-Buns-Server-Side)
## Code Snippet
      <div>
        {favorites.map((favorite) => (
          <section key={`favorite--${favorite.id}`}>
            <FavItemCard itemObj={favorite.product} />
          </section>
        ))}
      </div>
    </>
  );
}

## Project Screenshots
-TBA
## Video Walkthrough
-TBA
## Contributors
-[DeCorrean Davis] (https://github.com/DeCorreanD)
