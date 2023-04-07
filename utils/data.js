export const fetchPostDetail = (slugPath) => {
  if (!slugPath) {
    return `*[_type== "post"]{
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
  } else {
    return `*[_type == "post" && slug.current == '${slugPath}']{
      "comments" : *[_type=="comment" && post._ref==^._id && approved==true]{
        name,
          comment,
          email
         },
    _id,
    slug{current},
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
          description,
  body,
    publishedAt,
    _createdAt,
  title
  }`;
  }
};
