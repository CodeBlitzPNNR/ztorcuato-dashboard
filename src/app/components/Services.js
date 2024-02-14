import { redirect } from "next/dist/server/api-utils";

export async function getData() {
    try {
      const response = await fetch('www.theaudiodb.com/api/v1/json/2/search.php?s=coldplay');
      const data = await response.json();
      console.log('Data:', data)      
    } catch (error) {
      console.error(error);
    }
  }
