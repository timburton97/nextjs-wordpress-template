import graphqlRequest from "./graphqlRequests";

export async function getAllPosts() {
    const query = {
        query: `query getAllPosts {
            posts {
              nodes {
                date
                slug
                title
                excerpt
                featuredImage {
                  node {
                    mediaDetails {
                      sizes {
                        sourceUrl
                        width
                        height
                      }
                    }
                  }
                }
                categories {
                  nodes {
                    name
                    slug
                  }
                }
              }
              pageInfo {
                endCursor
                hasNextPage
                hasPreviousPage
                startCursor
              }
            }
          }`
    }

    const resJson = await graphqlRequest(query);
    const allPosts = resJson.data.posts;

    return allPosts;
}

export async function getSinglePost(slug) {
    const query = {
        query: `query getSinglePost {
            post(id: "${slug}", idType: SLUG) {
                title
                date
                content(format: RENDERED)
            }
          }`
    };

    const resJson = await graphqlRequest(query);
    const singlePost = resJson.data.post;

    return singlePost;
}

export async function getSinglePage(slug) {
  const query = {
      query: `query getSinglePage {
        page(id: "${slug}", idType: URI) {
          content(format: RENDERED)
          slug
          title(format: RENDERED)
          date
          featuredImage {
            node {
              mediaDetails {
                sizes {
                  height
                  sourceUrl
                  width
                }
              }
            }
          }
        }
      }`
  };

  const resJson = await graphqlRequest(query);
  const singlePage = resJson.data.page;

  return singlePage;
}

export async function getPostSlugs() {
    const query = {
        query: `query getPostSlugs {
            posts {
              nodes {
                slug
              }
            }
          }`
    };

    const resJson = await graphqlRequest(query);
    const slugs = resJson.data.posts.nodes;

    return slugs;
}

export async function getPageSlugs() {
  const query = {
      query: `query getPageSlugs {
        pages {
          nodes {
            slug
          }
        }
      }`
  };

  const resJson = await graphqlRequest(query);
  const slugs = resJson.data.pages.nodes;

  return slugs;
}

export async function getPrimaryMenuItems() {
  const query = {
      query: `query getPrimaryMenuItems {
        menu(id: "4", idType: DATABASE_ID) {
          menuItems {
            nodes {
              label
              path
            }
          }
        }
      }`
  };

  const resJson = await graphqlRequest(query);
  const menuItems = resJson.data.menu.menuItems.nodes;

  return menuItems;
}