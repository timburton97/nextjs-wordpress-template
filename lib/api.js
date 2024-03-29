import graphqlRequest from "./graphqlRequests";

export async function getAllPosts() {
    const query = {
        query: `query getAllPosts {
            posts(where: {categoryName: "blog"}) {
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
              mediaItemUrl
              mediaDetails {
                height
                width
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

export async function getFooterMenuItems() {
  const query = {
      query: `query getFooterMenuItems {
        menu(id: "5", idType: DATABASE_ID) {
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

export async function getTripleCTAItems() {
  const query = {
      query: `query TripleCtaQuery {
        posts(where: {categoryName: "triple-cta-banner"}) {
          nodes {
            acfTripleBanner {
              backgroundColour
              fieldGroupName
              bannerPosition
              title
              icon {
                mediaItemUrl
                mediaDetails {
                  height
                  width
                }
              }
              link {
                ... on Page {
                  uri
                }
              }
            }
            id
          }
        }
      }`
  };

  const resJson = await graphqlRequest(query);
  const ctaItems = resJson.data.posts.nodes;

  return ctaItems;
}

export async function getFounderFlipCardItems() {
  const query = {
      query: `query FounderFlipCardQuery {
        posts(where: {categoryName: "founder-flip-card"}) {
          nodes {
            id
            founderFlipCard {
              order
              paragraph
              title
              backgroundImage {
                mediaItemUrl
              }
            }
          }
        }
      }`
  };

  const resJson = await graphqlRequest(query);
  const items = resJson.data.posts.nodes;

  return items;
}

export async function getTriMasonryColsItems(slug) {
  const query = {
      query: `query TriMasonryColsQuery {
        posts(where: {categoryName: "tri-masonry-cols", tag: "${slug}"}) {
          nodes {
            id
            triMasonryColContent {
              subtitle
              paragraph
              mainTitleWhite
              mainTitleGreen
              buttonText
              image {
                mediaItemUrl
              }
              buttonLink {
                ... on Page {
                  uri
                }
              }
            }
          }
        }
      }`
  };

  const resJson = await graphqlRequest(query);
  const items = resJson.data.posts.nodes;

  return items;
}

export async function getTestimonials() {
  const query = {
      query: `query TriMasonryColsQuery {
        posts(where: {categoryName: "testimonial"}) {
          nodes {
            id
            hcpTestimonials {
              author
              excerpt
              testimonial
            }
          }
        }
      }`
  };

  const resJson = await graphqlRequest(query);
  const testimonials = resJson.data.posts.nodes;

  return testimonials;
}

export async function getFaqs() {
  const query = {
      query: `query TriMasonryColsQuery {
        posts(where: {categoryName: "faq"}) {
          nodes {
            faqs {
              answer
              question
            }
          }
        }
      }`
  };

  const resJson = await graphqlRequest(query);
  const faqs = resJson.data.posts.nodes;

  return faqs;
}

