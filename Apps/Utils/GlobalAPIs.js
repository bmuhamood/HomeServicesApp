import { request, gql } from 'graphql-request'

const MASTER_URL = 'https://api-ap-south-1.hygraph.com/v2/clv405hlg00zm08w7j6oprsi6/master'

const getSlider=async()=>{
const query = gql`
query GetSLider {
    sliders {
      id
      name
      image {
        url
      }
    }
  }  
`
    const result = await request(MASTER_URL, query);
    return result;
}

const getCategories=async()=>{
  const query = gql`
  query GetCategory {
    categories {
      name
      id
      icon {
        url
      }
    }
  }
`
const result = await request(MASTER_URL, query);
return result;
}

const getBusinessList=async()=>{
  const query = gql`
  query GetBusinessList {
    businessLists {
      id
      name
      email
      contactPerson
      category {
        name
      }
      about
      address
      images {
        url
      }
    }
  }  
`
const result = await request(MASTER_URL, query);
return result;
}

const getBusinessListByCategory=async(category)=>{
  const query = gql`
  query GetBusinessList {
    businessLists(where: {category: {name: `+category+`}}) {
      id
      name
      email
      contactPerson
      category {
        name
      }
      about
      address
      images {
        url
      }
    }
  } 
`
const result = await request(MASTER_URL, query);
return result;
}

export default {
    getSlider,
    getCategories,
    getBusinessList,
    getBusinessListByCategory
}