export const fetchPosts = `*[_type== "post"]{
    _id,
    title,
      mainImage{
      asset->{
        url
      }
    },
    slug{
      current
      
    },
    author->{
          _id,
          name,
          image{
            asset->{
        url
      }
          }
        },
      description
    
    
    
  
      
  }`;
