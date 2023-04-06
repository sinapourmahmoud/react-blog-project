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
export const fetchPostDetail = (slugPath) => {
  return `*[_type == "post" && slug.current == '${slugPath}']{
    _id,
       mainImage{
        asset->{
          url
        }
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
  body,
    publishedAt
  
  }`;
};
