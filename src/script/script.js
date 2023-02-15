import { addDoc, collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDAad2dGeuraqq4MiaxhvdwzXzoxdfsxBU",
  authDomain: "coffee-deliver.firebaseapp.com",
  projectId: "coffee-deliver",
  storageBucket: "coffee-deliver.appspot.com",
  messagingSenderId: "571727603275",
  appId: "1:571727603275:web:087a28e7b1377457148fce",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const products = [
  {
    id: "6228fc8bb7e6cb904bbe014e",
    name: ["Americano Coffee"],
    price: 9.9,
    type: ["Tradicional"],
    phrase: "Traditional coffee made with hot water and ground beans",
    imageUrl:
      "https://res.cloudinary.com/binvent/image/upload/v1676384593/BInvent%20App/Type_Americano_eafvpc.png",
  },
  {
    id: "6228fc8bb7e6cb904bbe014e1",
    name: ["Expresso Coffee"],
    price: 9.9,
    type: ["Tradicional"],
    phrase: "Traditional coffee made with hot water and ground beans",
    imageUrl:
      "https://res.cloudinary.com/binvent/image/upload/v1676384594/BInvent%20App/Type_Expresso_gldy5r.png",
  },
  {
    id: "6228fce4b7e6cb904bbe0154",
    name: ["Expresso Cremoso"],
    price: 9.9,
    type: ["Tradicional"],
    phrase: "Tradicional expresso with cream",
    imageUrl:
      "https://res.cloudinary.com/binvent/image/upload/v1676384594/BInvent%20App/Type_Expresso_Cremoso_p7qfry.png",
  },
  {
    id: "6228fd19b7e6cb904bbe0157",
    name: "Cold Expresso",
    price: 9.9,
    type: ["Tradicional", "Cold"],
    phrase: "Drink prepared with espresso coffee and ice cubes",
    imageUrl:
      "https://res.cloudinary.com/binvent/image/upload/v1676384593/BInvent%20App/Type_Caf%C3%A9_Gelado_m3cmqi.png",
  },
  {
    id: "6228fd3bb7e6cb904bbe015a",
    name: "Coffee with Milk",
    price: 9.9,
    type: ["Tradicional", "With Milk"],
    phrase: "Half expresso with hot milk",
    imageUrl:
      "https://res.cloudinary.com/binvent/image/upload/v1676384593/BInvent%20App/Type_Caf%C3%A9_com_Leite_h0lkks.png",
  },
  {
    id: "6228fda4b7e6cb904bbe015f",
    name: "Latte",
    price: 9.9,
    type: ["Tradicional", "With Milk"],
    phrase: "one espresso with hot milk and cream,",
    imageUrl:
      "https://res.cloudinary.com/binvent/image/upload/v1676384595/BInvent%20App/Type_Latte_vgareq.png",
  },
  {
    id: "6228fca3b7e6cb904bbe0150",
    name: "Cappucino",
    price: 9.9,
    type: ["Tradicional", "With Milk"],
    phrase: "half coffee, half hot milk with cream and cinnamon ",
    imageUrl:
      "https://res.cloudinary.com/binvent/image/upload/v1676384594/BInvent%20App/Type_Capuccino_t58hqe.png",
  },
  {
    id: "6228fd63b7e6cb904bbe015c",
    name: "Machiato",
    price: 9.9,
    type: ["Tradicional", "With Milk"],
    phrase: "half coffee, half hot milk with cream and cinnamon ",
    imageUrl:
      "https://res.cloudinary.com/binvent/image/upload/v1676384594/BInvent%20App/Type_Capuccino_t58hqe.png",
  },
  {
    id: "6228fd63b7e6cb904bbe015c2",
    name: "Mocaccino",
    price: 9.9,
    type: ["Tradicional", "With Milk"],
    phrase: "espresso coffee with chocolate sauce, a little milk and foam",
    imageUrl:
      "https://res.cloudinary.com/binvent/image/upload/v1676384596/BInvent%20App/Type_Mochaccino_w59dti.png",
  },
  {
    id: "6228fd63b7e6cb904bbe015c3",
    name: "Hot Chocolate",
    price: 9.9,
    type: ["Tradicional", "With Milk"],
    phrase: "Hot Chocolate with milk",
    imageUrl:
      "https://res.cloudinary.com/binvent/image/upload/v1676384594/BInvent%20App/Type_Chocolate_Quente_qhpw3k.png",
  },
  {
    id: "6228fd63b7e6cb904bbe015c4",
    name: "Cubano",
    price: 9.9,
    type: ["Special", "Alcohol", "cold"],
    phrase: "iced espresso drink with rum, cream, hazelnut and mint",
    imageUrl:
      "https://res.cloudinary.com/binvent/image/upload/v1676384594/BInvent%20App/Type_Cubano_d6r3gn.png",
  },
  {
    id: "6228fd63b7e6cb904bbe015c5",
    name: "Havana",
    price: 9.9,
    type: ["Special"],
    phrase: "sweetened drink prepared with coffee and coconut milk",
    imageUrl:
      "https://res.cloudinary.com/binvent/image/upload/v1676384595/BInvent%20App/Type_Havaiano_trtgzs.png",
  },
  {
    id: "6228fd63b7e6cb904bbe015c6",
    name: "Arabic",
    price: 9.9,
    type: ["Special"],
    phrase: "drink prepared with Arabic coffee beans and spices",
    imageUrl:
      "https://res.cloudinary.com/binvent/image/upload/v1676384593/BInvent%20App/Type_%C3%81rabe_gde9v9.png",
  },
  {
    id: "6228fd63b7e6cb904bbe015c7",
    name: "Irish",
    price: 9.9,
    type: ["Special", "Alcohol"],
    phrase: "Drink based on coffee, Irish whiskey, sugar and whipped cream",
    imageUrl:
      "https://res.cloudinary.com/binvent/image/upload/v1676384593/BInvent%20App/Type_%C3%81rabe_gde9v9.png",
  },
];

const main = async () => {
  await Promise.all(
    products.map(async (category) => {
      await addDoc(collection(db, "products"), category);
    })
  );
};

main().then(() => process.exit());
