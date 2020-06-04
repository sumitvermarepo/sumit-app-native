/** @format */

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log("error======>",error)
  }
};

 export const  retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem("@MySuperStore:key");
      if (value !== null) {
        return value;
      }
    } catch (error) {
      console.log("error======>", error);
      // Error retrieving data
    }
  };
