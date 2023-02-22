import gql from "graphql-tag";

export const ALL_SERMON_QUERY = gql`
  query {
    sermons {
      data {
        id
        attributes {
          title
          description
          reference
          speaker {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const ALL_SPEAKER_QUERY = gql`
  query {
    speakers {
      data {
        id
        attributes {
          name
          email
          phoneNumber
          sermons {
            data {
              id
              attributes {
                title
              }
            }
          }
        }
      }
    }
  }
`;
