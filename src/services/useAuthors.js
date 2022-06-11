import { useState, useEffect } from "react";

import client from "../contentful/client";

const useAuthors = () => {
  const [authors, setAuthors] = useState(); 




  useEffect(() => {
         
         client.getEntries({ content_type: "author",  }).then(data => { console.log(data);setAuthors(data); }) 
     /*    client.getEntry("6JskwXzBBLXONlsAUGspWg").then(entry => console.log(entry)) */
  }, []);

  if (!authors) return null;

/*   console.log(authors); */

  return authors;
};

export default useAuthors;
