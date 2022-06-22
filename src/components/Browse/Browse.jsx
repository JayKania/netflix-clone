import { doc, getDoc, setDoc } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../../firebase/FirebseConfig";
import userStore from "../../store/UserStore";
import Nav from "./Navigation/Nav";
import Billboard from "./Sections/Billboard";

const Browse = ({ yPosition }) => {
  const { user } = userStore((state) => ({
    user: state.user,
  }));

  useEffect(() => {
    // getting reference of our document (uid)
    let docRef;
    let docSnap;

    const checkUserExistInDatabase = async () => {
      if (user) {
        docRef = doc(db, "users", user.uid);
        docSnap = await getDoc(docRef);

        // !docSnap.exists() is usefull when user comes from signup route and reloads the page
        // we dont want to overwrite the doc unnecessarily
        if (!docSnap.exists()) {
          createProfile();
        }
      }
    };

    checkUserExistInDatabase();

    const createProfile = async () => {
      // now adding emailId and profiles array as fields in our selected document
      await setDoc(docRef, {
        email: user.email,
        profiles: [{ name: user.email.split(`@`)[0], wishlist: [] }],
      });
    };
  }, [user]);

  return (
    <>
      <Nav yPosition={yPosition} />
      <Billboard></Billboard>
    </>
  );
};

export default Browse;
