import { gql, request } from 'graphql-request';

const MASTER_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;
const HYGRAPH_TOKEN = process.env.NEXT_PUBLIC_HYGRAPH_TOKEN;

if (!MASTER_URL) {
    console.error("NEXT_PUBLIC_BACKEND_API_URL is not defined.");
  }
  
  if (!HYGRAPH_TOKEN) {
    console.error("NEXT_PUBLIC_HYGRAPH_TOKEN is not defined.");
  }

// GraphQL query for fetching projects
const GET_PROJECTS = gql`
  query MyQuery {
    myprojects {
      name
      about
      projectLink
      sourcecode
      image {
        url
      }
      skill
    }
  }
`;

// GraphQL mutation for creating a contact
const CREATE_CONTACT = gql`
  mutation CreateContact($name: String!, $email: String!, $content: String!) {
    createContact(
      data: {name: $name, email: $email, content: $content}
    ) {
      id
    }
  }
`;
// Function to fetch projects from Hygraph
export const getProjects = async () => {
  try {
    // The headers should be passed as the third parameter to request
    const result = await request(
      MASTER_URL, 
      GET_PROJECTS, 
      null, // No variables needed
      { Authorization: `Bearer ${HYGRAPH_TOKEN}` } // Correct way to pass headers
    );
    return result;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return { myprojects: [] }; // Return empty array on error
  }
};

// Function to create a contact in Hygraph
export const createContact = async (formData) => {
  const variables = {
    name: formData.name,
    email: formData.email,
    content: formData.message,
  };

  try {
    const result = await request(
      MASTER_URL,
      CREATE_CONTACT,
      variables,
      { Authorization: `Bearer ${HYGRAPH_TOKEN}` }
    );
    return result;
  } catch (error) {
    console.error("Error creating contact:", error);
    throw error; // Re-throw to handle in the component
  }
};
  